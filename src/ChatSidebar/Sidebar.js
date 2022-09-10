import React,{useState, useEffect} from 'react'
import './sidebar.css'
import SidebarChat from './SidebarChat'
import db from '../firebase'
import {Avatar, IconButton} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import {Chat, MoreVertOutlined, Search, Logout} from '@mui/icons-material'
import { removeUser } from '../redux/userSlice'

 
function Sidebar({hideSidebar}) {
    const [rooms, setRooms] = useState([])

    const dispatch = useDispatch()

    const user = useSelector(state => state.user.currentUser)

    useEffect(()=>{
        db.collection('rooms').onSnapshot(
            snapshot =>(
                setRooms(snapshot.docs.map(doc =>
                    ({
                        id: doc.id,
                        data:doc.data()
                    })))
            )
        )
      },[])
    
      const createChat = ()=> {
        const roomName = prompt(' please enter a name for the chat')

        if (roomName){
            db.collection('rooms').add({
                name: roomName
            })
        }
      }


  return (
    <div className='sidebar_container'>
        <div className='sidebar_header'>
            <Avatar src={user?.photoURL }/>
            <div>
                <IconButton sx={{color:'red', transform:'rotate(180deg)'}} onClick={()=> dispatch(removeUser())}>
                <Logout/>
                </IconButton>
                <IconButton>
                <Chat/>
                </IconButton>
                <IconButton>
                <MoreVertOutlined/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar_main_search'>
            <div className='sidebar_search_container'>
                <Search/>
                <input
                placeholder='Search or New Chat..'
                />
            </div>
        </div>
        <h2 onClick={createChat} className='addNewChat'>Add New Chat</h2>
        <div className='sidebar_chats'> 
          {rooms.map((room)=>(
                <SidebarChat hideSide={hideSidebar} key={room.id} id={room.id}
                roomName={room.data.name}/>
          )     
          )}
        </div>
    </div>
  )
}

export default Sidebar