import multer from 'multer'
import {GridFsStorage} from "multer-gridfs-storage"
import dotenv from 'dotenv'

dotenv.config();

const USERNAME=process.env.DB_UserName;
const PASSWORD=process.env.DB_Password;


const storage=new GridFsStorage({
    url: `mongodb://${USERNAME}:${PASSWORD}@ac-rbqd0id-shard-00-00.uvilplx.mongodb.net:27017,ac-rbqd0id-shard-00-01.uvilplx.mongodb.net:27017,ac-rbqd0id-shard-00-02.uvilplx.mongodb.net:27017/?ssl=true&replicaSet=atlas-v6s1de-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: {useUnifiedTopology: true , useNewUrlParser: true},

    file: (request,file)=>{
        const match=["image/png" , "image/jpg"];

        if(match.indexOf(file.memeType)===-1){
          return `${Date.now()}-file-${file.originalname}`;
        }
        return {
                bucketName: "photos",
                filename: `${Date.now()}-file-${file.originalname}`
        }
    }
})

export default multer ({storage})