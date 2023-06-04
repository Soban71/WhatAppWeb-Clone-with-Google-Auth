import express from 'express'
import { addUser , getUser } from '../controller/user_Controller.js';
import {newConversion,getConversion} from '../controller/conversion_control.js';
import { newMessage , getMessage } from '../controller/message_controller.js';
import  {uploadFile , getImage} from '../controller/image_controller.js';
import upload from '../utils/upload.js';


const route=express.Router();

route.post('/add',addUser)
route.get('/users',getUser);

route.post('/conversation/add',newConversion);
route.post('/conversation/get',getConversion);

route.post('/message/add',newMessage);

route.get('/message/get/:id',getMessage);

route.post('/file/upload',upload.single('file'),uploadFile);

route.get('/file/:filename',getImage)

export default route;