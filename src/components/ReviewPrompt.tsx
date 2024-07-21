import { Box, Typography, List, ListItem, Button } from "@mui/material";
import React, { useEffect, useState } from "react";


interface TextFieldTypes {
  fieldSpecific: string;
  currentLevel: string;
  goal: string;
  timeCommitment: string;
  learningStyle: string;
  learningPace: string;
  resources: string;
  language: string;
  toolPlatform: string;
}
export default function ReviewPrompt() {
  const [formData, setFormData] = useState<TextFieldTypes | null>(null);

  useEffect(() => {
    const getData1 = localStorage.getItem("formDataPrompt1");
    const getData2 = localStorage.getItem("formDataPrompt2");
    const getData3 = localStorage.getItem("formDataPrompt3");

    if (getData1 && getData2 && getData3) {
      const data1: Partial<TextFieldTypes> = JSON.parse(getData1);
      const data2: Partial<TextFieldTypes> = JSON.parse(getData2);
      const data3: Partial<TextFieldTypes> = JSON.parse(getData3);

      const combinedData = {
        ...data1,
        ...data2,
        ...data3,
      } as TextFieldTypes;

      setFormData(combinedData);
    }
  }, []);
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4">Review Your prompt</Typography>
      <Typography variant="body1">
        Let&#10076;s have a last check on what you want in Ladder.
      </Typography>
      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">1 .</Typography>
          <Typography variant="h4">Field-Specific</Typography>
        </Box>

        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              {formData?.fieldSpecific}
            </Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">2 .</Typography>
          <Typography variant="h4">Goal</Typography>
        </Box>

        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
             {formData?.goal}
            </Typography>
          </ListItem>
  
    
        </List>
      </Box>

      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">3 .</Typography>
          <Typography variant="h4">Current Level:</Typography>
        </Box>

        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              {formData?.currentLevel}
            </Typography>
          </ListItem>
         
        </List>
      </Box>
      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">4 .</Typography>
          <Typography variant="h4">Time Commitment:</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{formData?.timeCommitment
            }</Typography>
          </ListItem>
          
        </List>
      </Box>
      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">5 .</Typography>
          <Typography variant="h4">Preferred Learning Style:</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              {formData?.learningStyle}
            </Typography>
          </ListItem>
          
        </List>
      </Box>
      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">6 .</Typography>
          <Typography variant="h4">Learning Pace</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
             {formData?.learningPace}
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">7 .</Typography>
          <Typography variant="h4">Resources Available</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
              {formData?.resources}
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">8 .</Typography>
          <Typography variant="h4">Language</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">{formData?.language}</Typography>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ mt: 4, pl: 2 }}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h4">9 .</Typography>
          <Typography variant="h4">Preferred Tools and Platforms</Typography>
        </Box>
        <List sx={{ pl: 3, listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <Typography variant="body1">
             {formData?.toolPlatform}
            </Typography>
          </ListItem>
          
        </List>
      </Box>
      <Box sx={{ mt: 4, pl: 2, mb: 12, display: "flex", gap: "1rem" }}>
        <Button
         href="/prompt-1"
          sx={{
            width: "30%",
            background: "white",
            border: "1.5px solid #72796F",
            color: "#72796F",
            "&:hover": {
              background: "#fff",
            },
          }}
        >
          Edit
        </Button>

        <Button variant="contained" sx={{ width: "100%" }} href="/result">
          Create Ladder
        </Button>
      </Box>
    </Box>
  );
}
