import { Box, IconButton } from "@mui/material";

import Image from "next/image";
import React from "react";
const AddLadder = () => {
    return ( 
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <IconButton
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Image src="/icons/addicon.svg" alt="Add Icon" width={56} height={56} />
        </IconButton>
      </Box>
     );
}
 
export default AddLadder;