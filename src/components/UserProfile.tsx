import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  SvgIcon,
  Typography,
  TextField,
} from "@mui/material";

const UserProfile = () => {
  const [user, setUser] = useState({ name: "nova", avatar: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Write a Java function that takes a path as an input and creates a file storing the current system date. Consider edge cases.");

  const capitalizeFirstLetter = (str: string): string => {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    axios
      .get("api/user/profile")
      .then((response) => {
        setUser({
          name: response.data.name,
          avatar: response.data.avatar,
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    // Implement the search functionality based on the new text
    console.log("Searching for:", text);
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Box display="flex" alignItems="center" marginTop={2}>
          <Avatar src={user.avatar} alt={user.name} />
          <Typography variant="h5" sx={{ marginLeft: 2 }}>
            {capitalizeFirstLetter(user.name)}
          </Typography>
        </Box>
        <IconButton onClick={handleEditClick}>
          <SvgIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3113 6.87846L17.1216 2.68971C16.9823 2.55038 16.8169 2.43986 16.6349 2.36446C16.4529 2.28905 16.2578 2.25024 16.0608 2.25024C15.8638 2.25024 15.6687 2.28905 15.4867 2.36446C15.3047 2.43986 15.1393 2.55038 15 2.68971L3.43969 14.25C3.2998 14.3888 3.18889 14.554 3.11341 14.736C3.03792 14.9181 2.99938 15.1133 3.00001 15.3103V19.5C3.00001 19.8978 3.15804 20.2794 3.43935 20.5607C3.72065 20.842 4.10218 21 4.50001 21H20.25C20.4489 21 20.6397 20.921 20.7803 20.7803C20.921 20.6397 21 20.4489 21 20.25C21 20.0511 20.921 19.8603 20.7803 19.7197C20.6397 19.579 20.4489 19.5 20.25 19.5H10.8113L21.3113 9.00002C21.4506 8.86073 21.5611 8.69535 21.6365 8.51334C21.7119 8.33133 21.7507 8.13625 21.7507 7.93924C21.7507 7.74222 21.7119 7.54714 21.6365 7.36513C21.5611 7.18312 21.4506 7.01775 21.3113 6.87846ZM8.68969 19.5H4.50001V15.3103L12.75 7.06033L16.9397 11.25L8.68969 19.5ZM18 10.1897L13.8113 6.00002L16.0613 3.75002L20.25 7.93971L18 10.1897Z"
                fill="#424940"
              />
            </svg>
          </SvgIcon>
        </IconButton>
      </Box>

      {isEditing ? (
        <TextField
          variant="outlined"
          multiline
          fullWidth
          value={text}
          onChange={handleTextChange}
          onBlur={() => { handleEditClick(); handleSearch(); }}
          sx={{ marginBottom: 2, marginTop: 2 }}
        />
      ) : (
        <Typography variant="body1" mb={2} onClick={handleEditClick}>
          {text}
        </Typography>
      )}
      <Divider color="secondary" />
    </Box>
  );
};

export default UserProfile;
