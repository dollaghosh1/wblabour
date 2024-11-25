
import pg from 'pg'
import { DB_NAME } from "../constants.js";
const { Client } = pg
const connectDB = async () => {
    const client = new Client({
      database: `${ DB_NAME }`,
      user: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5432,
    })
    try{
      const connectionInstance = await client.connect(function(err) {
        if (err) throw err;
        console.log("DB Connected!");
      });
    }
    catch (error){
      console.log("DB connection FAILED ", error);
      process.exit(1)
      

  }
}
export default connectDB;
