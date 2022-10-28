import React from "react";
import Fab from "@mui/material/Fab";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const style = {
  backgroundColor: "#0064FF",
  color: "#F5F6FA",
  margin: 0,
  top: "auto",
  right: 25,
  bottom: 25,
  left: "auto",
  position: "fixed",
};

export default function ChatbotFab() {
  return (
    <Fab aria-label="chatbotFab" style={style}>
      <ChatBubbleIcon />
    </Fab>
  );
}
