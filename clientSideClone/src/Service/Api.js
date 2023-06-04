import axios from 'axios'
const url='http://localhost:8000';
export const addUser=async(data)=>{
    try{
        await axios.post(`${url}/add`, data);
    }
    catch(error){
        console.log("Error While adding an user",error.message);
    }
}

export const getUsers=async()=>{
    try{
      let response=  await axios.get(`${url}/users`);
      //console.log(response.data);
      return response.data;
    }
    catch(error){
        console.log("Error in get UserApi",getUsers);
    }
}

export const setConversation=async(data)=>{
    try{
       await axios.post(`${url}/conversation/add`,data);
    }
    catch(error){
        console.log("Error in set Connection Api",error);
    }
}


export const getConversation=async(data)=>{
    try{
      let response= await axios.post(`${url}/conversation/get`,data);
      console.log(response);
      return response.data;
    }
    catch(error){
        console.log("Error in getting Connection Api",error);
    }
}
export const newMessage=async(data)=>{

    try{
        let response= await axios.post(`${url}/message/add`,data);
        console.log(response);
        return response.data;
      }
      catch(error){
          console.log("Error in Api of newMessage ",error);
      }
}

export const getMessages=async(id)=>{

    try{
        let response= await axios.get(`${url}/message/get/${id}`);
        console.log(response);
        return response.data;
      }
      catch(error){
          console.log("Error in Api of getMessages ",error);
      }

}

export const UploadFile=async(data)=>{
   
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error.message);
    }
}