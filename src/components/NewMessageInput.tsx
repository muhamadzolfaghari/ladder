// app/components/NewMessageInput.tsx
import React, { useRef, useState } from "react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  Paper,
  InputBase,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";

interface NewMessageInputProps {
  onSend: (message: string) => void;
}

const NewMessageInput: React.FC<NewMessageInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };
  const handleAttachmentClick = () => {
    console.log("attach button clicked");
  };

  const handleAttachmentChange = () => {
    console.log("handle attach chenge");
  };

  const handleCameraClick = async () => {
    console.log("camera  clicked");
  };

  const handleMicClick = () => {
    // Implement audio recording logic here
    console.log("Mic button clicked");
  };

  return (
    <Paper
      sx={{
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        margin: "20px",
        marginx: "8px",
      }}
    >
      <InputBase
        fullWidth
        sx={{ padding: "10px" }}
        placeholder="Write your prompt"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
          }
        }}
      />
      <IconButton onClick={handleAttachmentClick}>
        <AttachFileIcon sx={{ transform: "rotate(30deg)" }} color="secondary" />
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleAttachmentChange}
        />
      </IconButton>
      <IconButton>
        <PhotoCameraOutlinedIcon
          color="secondary"
          onClick={handleCameraClick}
        />
      </IconButton>
      <IconButton>
        <KeyboardVoiceOutlinedIcon color="secondary" onClick={handleMicClick} />
      </IconButton>
    </Paper>
  );
};

export default NewMessageInput;
