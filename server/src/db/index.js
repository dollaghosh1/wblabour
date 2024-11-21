// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";


// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection FAILED ", error);
//         process.exit(1)
//     }
// }

// export default connectDB

//const { Client } = require('pg')
import pg from 'pg'
const { Client } = pg
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'wblabour',
  password: 'postgres',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
client.query(`select * from users`,(err,res)=>{
  return console.log(res.rows)
});
export default client;
