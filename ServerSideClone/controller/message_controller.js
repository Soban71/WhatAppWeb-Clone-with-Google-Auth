
import message from "../Models/Message.js"
import conversation from "../Models/conversation.js";

export const newMessage=async(request , response)=>{

    try{
        const  newMessage=new message(request.body);

        await newMessage.save();
        await conversation.findByIdAndUpdate(request.body.conversationId, {message : request.body.text})
        return response.status(200).json("Message has send Successfully");
    }
    catch(error){
        console.log("Error in newMessage Controller",error);
        return response.status(500).json(error.message);
    }
}

export const getMessage=async(request , response)=>{
    try{
        const Message=await message.find({conversationId: request.params.id})
        return response.status(200).json(Message);
    }
    catch(error){
        console.log("Error in getMessage Controller",error);
        return response.status(500).json(error.message);
    }
}