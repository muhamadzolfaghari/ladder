import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Paper,
  InputBase,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import axios from "axios";

interface NewMessageInputProps {
  onSend: (message: string) => void;
}

function NewMessageInput({ onSend }: NewMessageInputProps) {
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (attachments.length > 0) {
      const newImagePreviews = attachments.map((file) => URL.createObjectURL(file));
      setImagePreviewUrls(newImagePreviews);
    } else {
      setImagePreviewUrls([]);
    }
  }, [attachments]);

  const handleSend = () => {
    if (message.trim() || attachments.length > 0) {
      onSend(message);
      setMessage("");
      setAttachments([]);
      setImagePreviewUrls([]);
    }
  };

  const handleAttachmentClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAttachmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const files = Array.from(event.target.files);
      setAttachments((prev) => [...prev, ...files]);
    }
  };

  const handleDeleteAttachment = (index: number) => {
    const newAttachments = attachments.filter((_, i) => i !== index);
    setAttachments(newAttachments);
  };

  const handleMicClick = async () => {
    if (!isRecording) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);

      recorder.ondataavailable = (event) => {
        setAudioChunks((prev) => [...prev, event.data]);
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        console.log("Recorded audio:", audioUrl);

        const formData = new FormData();
        formData.append("audio", audioBlob);

        try {
          const response = await axios.post("/api/transcribe", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          const transcription = response.data.transcription;
          setMessage(transcription);
        } catch (error) {
          console.error("Error transcribing audio:", error);
        }
      };

      recorder.start();
      setIsRecording(true);
      console.log("Recording started");
    } else {
      mediaRecorder?.stop();
      setIsRecording(false);
      setAudioChunks([]);
      console.log("Recording stopped");
    }
  };

  return (
    <Paper
      sx={{
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        margin: "20px",
        padding: "10px",
        backgroundColor: isRecording ? "green" : "inherit",
      }}
    >
      {imagePreviewUrls.map((url, index) => (
        <Box 
          key={index} 
          position="relative" 
          sx={{ 
            display: "inline-block", 
            marginRight: 1,
            "&:hover .delete-icon": {
              display: "flex",
            }
          }}
        >
          <Box
          borderRadius={2}
            component="img"
            src={url}
            alt="preview"
            sx={{ width: 50, height: 50 , border: '4px solid rgba(128, 128, 128, 0.1)'}}
          />
          <IconButton
            size="small"
            className="delete-icon"
            sx={{ 
              position: "absolute", 
              top: "50%", 
              left: "50%", 
              transform: "translate(-50%, -50%)", 
              display: "none",
              backgroundColor: "gray",
              "&:hover": {
                backgroundColor: "darkgray",
                "& .MuiSvgIcon-root": {
                  color: "white",
                }
              }
            }}
            onClick={() => handleDeleteAttachment(index)}
          >
            <ClearOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
      ))}
      <InputBase
        fullWidth
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
          accept="image/*,audio/*"
          style={{ display: "none" }}
          onChange={handleAttachmentChange}
        />
      </IconButton>
      <IconButton onClick={handleAttachmentClick}>
        <PhotoCameraOutlinedIcon color="secondary" />
      </IconButton>
      <IconButton onClick={handleMicClick}>
        <KeyboardVoiceOutlinedIcon color="secondary" />
      </IconButton>
      {(message.trim() || attachments.length > 0) && (
        <IconButton onClick={handleSend}>
          <SendIcon color="secondary" />
        </IconButton>
      )}
    </Paper>
  );
};

export default NewMessageInput;
