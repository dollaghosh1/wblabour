import pool from "../db/index.js";
//import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

export const existuser = async (email,username) => {
    const result = await pool.query("SELECT * FROM users where email = $1 or username = $2", [email,username]);
    //console.log(result.rows[0]);
   // process.exit(1);
    return result.rows[0];
  };
  

export const createUser = async (firstname, lastname, email, username, password) => {
  //const hashedPassword = await bcrypt.hash(password, 10);
 // let hashedPassword = await bcrypt.hash(password,10);
  //this.password = await bcrypt.hash(this.password,10)
 // next()
    const result = await pool.query(
      "INSERT INTO users (firstname, lastname, email, username, password) VALUES ($1, $2,$3,$4,$5) RETURNING *",
      [firstname, lastname, email, username, password]
    );
    return result.rows[0];
  };
  export const bcryptUser= async (password)=> {
    let hashedPassword = await bcrypt.hash(password,10);
    return hashedPassword;
 };
