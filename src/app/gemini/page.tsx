"use client"
import React, { useState } from "react";
import {  Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import ChatHistory from "@/components/ChatHistory";
import NewMessageInput from "@/components/NewMessageInput";
import BottomNav from "@/components/BottomNav";
import logogemini from "../../../public/Images/logo-gemini.svg"

export default function Page() {
    const [messages, setMessages] = useState<{ text: string; date: string }[]>([
        { text: 'Check this CSS for me', date: 'June 12' },
        { text: 'Debug my code', date: 'June 07' },
        { text: 'Best HTML courses', date: 'May 24' }
      ]);
    
      const handleSend = (message: string) => {
        const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        setMessages([...messages, { text: message, date: currentDate }]);
      };
  return (
    <Container maxWidth="sm"  sx={{
        display: "flex",
        flexDirection: "column",
        height: "60vh",
        justifyContent: "space-between",
      }}>
    <ChatHistory messages={messages} />
    <Box my={8} textAlign="center" display="flex"  flexDirection="column" flexGrow={1} alignItems="center" justifyContent="center" >
      <Image src={logogemini} alt="Gemini Logo" width={150} height={100} />
      <Typography variant="body1">Ask anything that helps you with your path</Typography>
    </Box>
    <Box sx={{ position: 'absolute', bottom: 20, left: 0, right: 0,flexDirection: 'column' }}>
    <NewMessageInput onSend={handleSend} />
    <BottomNav/>
    </Box>
  </Container>
  );
}
