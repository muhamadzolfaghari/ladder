import { Box, Button, Modal, Typography, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDailyRoutinCreate } from "./hooks/useDailyRoutin";
import { isPending } from "@reduxjs/toolkit";
const ModalAddTask = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { isPending, mutate: DailyRoutinCreate } = useDailyRoutinCreate();


  const handleClick = () => {
    DailyRoutinCreate();
  };
  
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={handleClick}
          disabled={isPending}
        >
        {isPending ? "is sending...":"Add a Task"}
        </Button>
      </Box>
      <Modal
        open={open}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: 4,
        }}
      >
        <Box
          sx={{
            background: "white",
            width: "400px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem 1rem 1.5rem 1rem",
            gap: "1rem",
            position: "relative",
          }}
        >
          <Box
            onClick={handleClose}
            sx={{
              color: "#72796F",
              position: "absolute",
              right: "1rem",
              cursor: "pointer",
            }}
          >
            <CloseIcon />
          </Box>
          <Typography id="modal-modal-title" variant="h5" sx={{ pt: "2rem" }}>
            Create New tasks{" "}
          </Typography>
          <TextField
            label="Describe the task"
            InputLabelProps={{ shrink: true }}
            multiline
            placeholder="Share my test code on Github"
            fullWidth
          />
          <Button
            sx={{
              padding: "0.5rem",
              minWidth: "0px",
              gap: "0",
              color: "#424940",
              backgroundColor: "#D5E8CF",
            }}
          >
            <AddIcon />
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "100%",
            }}
          >
            Create Task
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddTask;
