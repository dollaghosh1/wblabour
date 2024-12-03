import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { createUser,existuser,bcryptUser} from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from "bcrypt"

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
            // return res.status(201).json(
            //     new ApiResponse(200, newUser, "User registered Successfully")
            // )
          } catch (err) {
            next(err);
          }
  
    
} )



export { registerUser }