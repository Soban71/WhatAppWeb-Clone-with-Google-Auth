import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { Box , InputBase , styled} from '@mui/material';
import { useEffect } from 'react';
import { UploadFile } from '../../../Service/Api';

const Container=styled(Box)`
display:flex;
background: #ededed;
height:50px;
align-items:center;
width:96%;
padding:0px 15px;
& > *{
    margin:5px;
    color: #919191;
}
`
const Search=styled(Box)`
background: #FFFFFF;
border-radius:15px;
width:calc(94% - 100px);
`
const InputField=styled(InputBase)`
width: 100%;
padding: 20px;
height: 20px;
padding-left: 30px;
font-size: 14px;
`
const ClipIcons=styled(AttachFileIcon)`
transform: rotate(40deg);
`

export default function Footer({sendText, setValue , value, file , setFile,setImage}) {

  const onFileChange=(e)=>{
    setFile(e.target.files[0])
    setValue(e.target.files[0].name);

    
  }

  

  useEffect(() => {
    const getImage = async () =>
     {
        if (file) 
        {
            const data = new FormData();
            data.append("name", file.name);
            data.append("file", file);

           let response= await UploadFile(data);
           console.log(response);
           setImage(response.data);
        }
    }
    getImage();

}, [file])
  
  return (
    <Container>
    <InsertEmoticonIcon />
    <label  htmlFor='fileInputs'>
    <ClipIcons />
    </label>
    <input type='file' 
    style={{display: 'none'}} 
    id='fileInputs'
    onChange={(e)=>onFileChange(e)}
    />

    <Search>
    <InputField  placeholder='Type Message here'
    onChange={(e)=>setValue(e.target.value)}
    onKeyPress={(e)=> sendText(e)}
    value={value}
    />
    
    </Search>
    <MicIcon />

    </Container>
  )
}
