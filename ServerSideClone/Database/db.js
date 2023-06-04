import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const USERNAME=process.env.DB_UserName;
const PASSWORD=process.env.DB_Password;

const Connection=async()=>{
    const url=`mongodb://${USERNAME}:${PASSWORD}@ac-rbqd0id-shard-00-00.uvilplx.mongodb.net:27017,ac-rbqd0id-shard-00-01.uvilplx.mongodb.net:27017,ac-rbqd0id-shard-00-02.uvilplx.mongodb.net:27017/?ssl=true&replicaSet=atlas-v6s1de-shard-0&authSource=admin&retryWrites=true&w=majority`

    try{
       await mongoose.connect(url,{ useUnifiedTopology: true });
        console.log("Database Connected Successfully");
    }
    catch(error){
        console.log('error',error);
    }
}
export default Connection;