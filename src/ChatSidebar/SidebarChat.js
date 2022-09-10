import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import db from '../firebase'

function SidebarChat({roomName, id, hideSide}) {
   const [seed, setSeed] = useState('')
   const [messages, setMessages]= useState('')
   const [sideState, setSideState] = useState(false)

   useEffect(()=>{
      if (id){
         db.collection('rooms').doc(id)
         .collection('messages')
         .orderBy ('timestamp', 'desc')
         .onSnapshot((snapshot)=>
             setMessages(snapshot.docs.map((doc)=>doc.data()))
         )
      }
     
   }, [id])
   useEffect(()=>{
      setSeed(Math.floor(Math.random() * 5000))
   }, [id])

   useEffect(()=>{
      if (window.screen.width > 600){
          setSideState(true) 
      }
    }, [])

  return (
   <Link to={`/rooms/${id}`} onClick={sideState ? '' : hideSide}>
      <div className='sidebarchat_container'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
         <div className='sidebarchat_info'>
            <h2>{roomName}</h2>
            <p>{messages[0]?.message.substr(0, 40) + '...' }</p>
         </div>

     </div>
   </Link>
  )
}

export default SidebarChat