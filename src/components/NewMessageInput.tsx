// app/components/NewMessageInput.tsx
import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, Paper, InputBase } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';


interface NewMessageInputProps {
  onSend: (message: string) => void;
}

const NewMessageInput: React.FC<NewMessageInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <Paper
    sx={{ boxShadow: 'none', display: 'flex', alignItems: 'center',margin:'20px',marginx:'8px'}}  
    >
      <InputBase
      fullWidth
        sx={{padding:"10px"}}
        placeholder="Write your prompt"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown ={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
          }
        }}
      />
      <IconButton >
        <AttachFileIcon sx={{ transform: 'rotate(30deg)'}}  color="secondary"/>
      </IconButton>
      <IconButton >
        <PhotoCameraOutlinedIcon   color="secondary"/>
      </IconButton>
      <IconButton >
        <KeyboardVoiceOutlinedIcon  color="secondary"/>
      </IconButton>
    </Paper>
  );
};

export default NewMessageInput;
