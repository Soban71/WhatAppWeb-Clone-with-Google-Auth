import mongoose from "mongoose";

const conversationSchema=new mongoose.Schema({
    members:{
        type:Array
    },
    message:{
        type:String
    }},{
        timestamps:true
    })

    const conversation=mongoose.model('Conversation',conversationSchema);

    export default conversation; 