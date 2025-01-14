import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { createUser,existuser,bcryptUser,generateAccessToken,generateRefreshToken,updateRefreshToken} from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import pool from "../db/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";



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
const decryptPassword = (encryptedPassword) => {
    const secretKey = "mySuperSecretKey123";
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    //console.log(originalPassword);
    return originalPassword;
  };
// function decryptData(encryptedData, skey) {
 
//    const algorithm = "aes-256-cbc";
//    const key = crypto.createHash("sha256").update(skey).digest("base64").substr(0, 32);
//    //const iv = Buffer.from(div, "hex");
//    const encryptedText = encryptedData.encryptedData;
//    const decipher = crypto.createDecipheriv(algorithm, key);
     
//    //const decipher = crypto.createDecipheriv(algorithm, key, iv);
//    let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
//     //return decrypted;

//    console.log(decrypted);
//    // return decoded;
//   //  decrypted = Buffer.concat([decrypted, decipher.final()]);
//    // return JSON.parse(decrypted.toString());
//    //let decrypted = decipher.update(encryptedText);
//   // decrypted = Buffer.concat([decrypted, decipher.final()]);
//   //let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
//   //decrypted += decipher.final('utf8');
//   //console.log(decrypted);
//  //  return decrypted;
//   }
const loginUser =  asyncHandler( async (req, res) => {
    
    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie
    // const encryptedPayload = {
    //     ciphertext: req.body, // Replace with actual encrypted data
    //     iv: crypto.randomBytes(16), // Replace with actual IV used during encryption
    //   };
   // const encryptedData = req.body; // Replace with your encrypted data (hex format)
    //const skey = "mySuperSecretKey123"// Replace with your 32-byte key
   // const div = crypto.randomBytes(16); // Replace with your 16-byte IV

       //const secretKey = "mySuperSecretKey123";
      // console.log(secretKey);
  //  const decryptedData = decryptData(encryptedData, skey);
    // console.log("Decrypted Data:", decryptedData);
    // console.log(req.body.encryptedpass);
    //const {email,username,password} = req.body
   // console.log(req.body);
    const email = req.body.email;
    const username = req.body.username;
    const encryptedPassword = req.body.encryptedpass;
     const decryptedPassword = decryptPassword(encryptedPassword);
     const datapass = JSON.parse(decryptedPassword);
    //const decryptedPassword = decryptPassword(password);
    //console.log(datapass.password);
    //console.log("Decrypted Password:", decryptedPassword);
    
   // process.exit();
    if(!(username || email)){
        throw new(400, "username or email is required")
    }
    const existedUser = await existuser(email,username);
    if (!existedUser) {
        throw new ApiError(409, "user dose not exist")
    }
    
        // Verify password
        const passwordValid = await bcrypt.compare(datapass.password, existedUser.password);
       //console.log(decryptedPassword.password);
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
const logoutUser =  asyncHandler( async (req, res) => {
    const user_id = req.user.id;
    //console.log(user_id);
   // process.exit(1);
    if(user_id){
    const result = await pool.query("UPDATE users SET refreshtoken=1 where id = $1", [user_id]);
    
    const option ={
     httpOnly: true,
     secure: true
     }   
     return res
     .status(200)
     .clearCookie("accessToken", option)
     .clearCookie("refreshToken", option)
     .json(new ApiResponse(200, {}, "User logged Out"))
    }
 
 })
export { generateAccessAndRefereshTokens,registerUser,loginUser,logoutUser }