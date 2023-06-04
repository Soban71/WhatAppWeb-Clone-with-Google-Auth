import mongoose from "mongoose";
import Conversation from '../Models/conversation.js';

export const newConversion = async (request, response) => {
    try {
      const senderId = request.body.senderId;
      const receiverId = request.body.receiverId;
  
      const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });
  
      if (exist) {
        return response.status(200).json('Conversation already exists');
      }
  
      const newConversation = new Conversation({
        members: [senderId, receiverId]
      });
      
      await newConversation.save();
      
      return response.status(200).json('Conversation created');
    } catch (error) {
      console.log("Error in new conversion controller: ", error);
      return response.status(500).json(error.message);
    }
  }



  export const getConversion=async(request , response)=>{
    const senderId = request.body.senderId;
    const receiverId = request.body.receiverId;
    try{
      const conversations = await Conversation.findOne({members:{$all:[receiverId , senderId]}});
      return response.status(200).json(conversations)

    }
    catch(error){
      console.log("Error in get conversion controller: ", error);
      return response.status(500).json(error.message);
    }
  }