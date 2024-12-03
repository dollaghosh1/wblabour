// import pg from 'pg'
// import { DB_NAME } from "../constants.js";
// const { Client } = pg
// const connectDB = async () => {
//     const client = new Client({
//       database: `${ DB_NAME }`,
//       user: process.env.POSTGRES_USER,
//       password: process.env.POSTGRES_PASSWORD,
//       host: process.env.POSTGRES_HOST,
//       port: process.env.POSTGRES_PORT
//     })
//     try{
//       const connectionInstance = await client.connect(function(err) {
//         if (err) throw err;
//         console.log("DB Connected!");
//       });
//     }
//     catch (error){
//       console.log("DB connection FAILED ", error);
//       process.exit(1)
      

//   }
// }
// export default connectDB;
import pg from "pg";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";
const { Pool } = pg;
dotenv.config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: `${ DB_NAME }`,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

pool.on("connect", () => {
  console.log("Database Connected");
});

export default pool;
