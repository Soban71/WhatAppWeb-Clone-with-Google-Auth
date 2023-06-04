import User from "../Models/Users.js";

export const addUser=async(request , response)=>{
    //console.log(request.body); 
    try{
       const exist=await User.findOne({sub: request.body.sub});

       if(exist){
        return response.status(200).json({msg: "User Already Exist"});
       }

       const newUser=new User(request.body)
       await newUser.save();
       return response.status(200).json(newUser);

    }
    catch(error){
        console.log("Error while creating new user",error);
        return response.status(400).json(error.message);
    }

}


export const getUser=async(request , response)=>{
    try{
       const users= await User.find({});
       return response.status(200).json(users);
    }
    catch(error){
        return response.status(400).json({msg:"Error while getting user"});
    }
}