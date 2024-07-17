"use client";
import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import NewMessageInput from "@/components/NewMessageInput";
import BottomNav from "@/components/BottomNav";
import UserProfile from "@/components/UserProfile";
import GiminiDetails from "@/components/GiminiDetails";

export default function Page() {
  const [messages, setMessages] = useState<{ text: string; date: string }[]>(
    []
  );

  const handleSend = (message: string) => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    setMessages([...messages, { text: message, date: currentDate }]);
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "8px",
      }}
    >
      <UserProfile />
      <GiminiDetails />
      <Box
        sx={{
          display: "flex",
          bottom: 20,
          left: 0,
          right: 0,
          flexDirection: "column",
        }}
      >
        <NewMessageInput onSend={handleSend} />
        <BottomNav />
      </Box>
    </Container>
  );
}
