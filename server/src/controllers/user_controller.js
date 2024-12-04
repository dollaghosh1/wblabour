import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { createUser,existuser,bcryptUser,generateAccessToken,generateRefreshToken,updateRefreshToken} from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import pool from "../db/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const generateAccessAndRefereshTokens = async(userId) =>{
    //console.log(userId);
   // process.exit(1);
    try {
      //  const result = await pool.query("SELECT id FROM users where Id = $1", [userId]);
      //  user = result.rows[0]['id']
        const accessTokendata = generateAccessToken(userId)
        const accessToken = await Promise.resolve(accessTokendata);
        const refreshTokendata = generateRefreshToken(userId)
        const refreshToken = await Promise.resolve(refreshTokendata);
       // console.log(accessToken);
        //const refreshToken = user.generateRefreshToken()

        //user.refreshToken = refreshToken
        
        //await user.save({ validateBeforeSave: false })
        //updateTokenresult = await pool.query("UPDATE users SET refreshtoken=$1 where Id = $2", [refreshToken,userId]);
        //updateToken = updateTokenresult.rows[0];
        await updateRefreshToken(refreshToken,userId);
        
        return {accessToken,refreshToken}
     


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser = asyncHandler( async (req, res, next) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    try {
    const {firstName,lastName, email, username, password } = req.body
      
    if (!firstName && !lastName && !email && !username && !password)
        {
        throw new ApiError(400, "All fields are required")
        }
        const existedUser = await existuser(email,username);
        if (existedUser) {
            throw new ApiError(409, "User with email or username already exists")
        }

  
        let hashedPassword = await bcryptUser(password);
        
        const newUser = await createUser(firstName, lastName, email, username,hashedPassword);
   
        
            return res.status(201).json(
                new ApiResponse(200, newUser, "User registered Successfully")
            )
            
          } catch (err) {
            next(err);
          }
  
    
} )

const loginUser =  asyncHandler( async (req, res) => {
    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie
    const {email,username,password} = req.body
    if(!(username || email)){
        throw new(400, "username or email is required")
    }
    const existedUser = await existuser(email,username);
    if (!existedUser) {
        throw new ApiError(409, "user dose not exist")
    }
    
        // Verify password
        const passwordValid = await bcrypt.compare(password, existedUser.password);
        if (!passwordValid) {
            throw new ApiError(404, "Incorrect email and password combination")
            
        }
 
    const {accessToken, refreshToken}=await generateAccessAndRefereshTokens(existedUser.id)
  
    const loggedInUserresult = await pool.query("SELECT id,firstName, lastName, email, username FROM users where id = $1", [existedUser.id]);
    const loggedInUser = loggedInUserresult.rows[0]
    const option ={
        httpOnly: true,
        secure: true
    }
   // console.log(option);
    //process.exit(1);
    return res
    .status(200)
    .cookie("accessToken",accessToken,option)
    .cookie("refreshToken",refreshToken,option)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser,accessToken,
                refreshToken
            },
            "User logged In Successfully"
        )
    )


} )
/*const logoutUser =  asyncHandler( async (req, res) => {
    await User.findByIdAndUpdate(
         req.user._id,
         {
             $unset: {
                 refreshToken: 1
             }
         },
         {
             new:true
         }
 
 
    )
    const option ={
     httpOnly: true,
     secure: true
     }   
     return res
     .status(200)
     .clearCookie("accessToken", option)
     .clearCookie("refreshToken", option)
     .json(new ApiResponse(200, {}, "User logged Out"))
 
 
 })*/
export { generateAccessAndRefereshTokens,registerUser,loginUser }