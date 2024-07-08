import React from "react";
import { Box, TextField } from "@mui/material";

export default function FormField() {
  return (
    <Box component={"form"} sx={{ mt: 3 }}>
      <TextField
        label="Field-Specific"
        InputLabelProps={{ shrink: true }}
        multiline
        rows={6}
        placeholder="Key topics: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, Git, deployment processes.
        Foundational knowledge: Basic computer science principles, understanding of HTTP and RESTful APIs."
        fullWidth
      />
    </Box>
  );
}
// label , row , placeholder