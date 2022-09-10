import React from 'react'
import {Button} from '@mui/material'
import {auth, provider} from './firebase'
import { useDispatch } from 'react-redux'
import { addUser } from './redux/userSlice'
import {
  GitHub,
  Twitter,
  LinkedIn
} from "@mui/icons-material";
import { IconButton } from "@mui/material";



function Login() {
  const dispatch = useDispatch()
  const signIn = () =>{
    auth
      .signInWithPopup(provider)
      .then((result)=>{
        dispatch(addUser(result.user))
      })
      .catch((error) => alert => (error.message))
  }
  return (
    <div className='login_container'>
      {/* <img className='login_image' src='/image/MRLOGO.png' alt=''/> */}
      <div className='login_text'>
        <h1><span className='logo'>M</span>essage <span className='logo'>M</span>e</h1>
        <p> <span>Mobolaji Richard</span>Welcome, This is a chat application that mimics the whatsapp group features but with a little twists, when you login you can create a group chat or enter an already made group and start chatting with people all over the world.</p>
        <Button onClick={signIn} sx={{color:'green'}}>Sign In With Google</Button>
        <div>
      <a href='https://github.com/MobolajiRichard'>
        <IconButton sx={{color:'green'}}>
            <GitHub />
          </IconButton>
        </a>
  
        <a href="https://www.twitter.com/RichardMBJ23">
          <IconButton sx={{color:'green'}}>
            <Twitter />
          </IconButton>
        </a>
  
        <a href='https://www.linkedin.com/in/mobolaji-richard-oginni-7314b2230/'>
        <IconButton sx={{color:'green'}}>
          <LinkedIn />
        </IconButton>
        </a>
      </div>
      
      </div >
    </div>
  )
}

export default Login