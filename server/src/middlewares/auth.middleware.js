import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
//import { existedUser} from "../models/user.model.js"
import pool from "../db/index.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
    try{
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
   // console.log(token);
   // process.exit(1);
    if(!token){
        throw new ApiError(401, "Unauthorized request")
    }
    const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
   // console.log(decodedToken);
    
   // process.exit(1);
    const loggedInUserresult = await pool.query("SELECT * FROM users where id = $1", [decodedToken.id]);
   const user = loggedInUserresult.rows[0]
   //console.log(user);
   //process.exit(1);
    // const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    if(!user){
     throw new ApiError(401, "Invalid access token")
    }
     req.user=user;
     next()
}catch(error)
{
    throw new ApiError(401, error?.message || "Invalid access token")
}
})