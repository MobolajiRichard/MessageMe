import React from 'react'
import {useSelector} from 'react-redux'


function MainChat({messages}) {
  const user = useSelector(state => state.user.currentUser)
  return (
    <div className='mainchat'>
          {messages.length > 0 && messages.map((message)=>(
           <p key={message.timestamp} className={`chat_message ${message.name === user.displayName && 'chat_receiver'}`}>
        <span className='chat_sender'>{message.name}</span>
        {message.message}
        <span className='chat_timestamp'>
          {new Date(message.timestamp?.toDate()).toLocaleString()}
          </span>
      </p>
      ))} 
      {(!messages || messages.length === 0)  && <p className='chat_message'>Please choose a group or create one to begin chatting. </p>}
    </div>
  )
}

export default MainChat