import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import MoreVert from '@mui/icons-material/MoreVert';
import AttachFile from '@mui/icons-material/AttachFile';
import AddTaskIcon from '@mui/icons-material/AddTask';
import SelectInput from '@mui/material/Select/SelectInput';
import MicIcon from '@mui/icons-material/Mic';
function Chat() {
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar />
        <div className='chat_headerInfo'>
          <h3>Room name</h3>
          <p>last seen at...</p>
        </div>
        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        <p className='chat_message'>
      
        <span className='chat_name'>Helly</span>
         
          This is a message 
        <span className='chat_timestamp'>
          {new Date().toUTCString()}
        </span>
        </p>

        <p className='chat_message chat_reciever'>
      
      <span className='chat_name'>Helly</span>
       
        This is a message 
      <span className='chat_timestamp'>
        {new Date().toUTCString()}
      </span>
      </p>

      <p className='chat_message'>
      
      <span className='chat_name'>Helly</span>
       
        This is a message 
      <span className='chat_timestamp'>
        {new Date().toUTCString()}
      </span>
      </p> 
      </div>
      <div className='chat_footer'>
        <AddTaskIcon/>
        <form>
          <input
          // value={input} onClick={sendMessage} 
          // onChange={(e)=> SetInput(e.target.value)}
          placeholder='Type a message'
          type='text'/>
          <button type='submit'>
            Send a message
          </button>
        </form>
        <MicIcon/>
      </div>
    </div>
  )
}

export default Chat