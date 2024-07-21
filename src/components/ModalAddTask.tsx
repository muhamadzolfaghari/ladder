import { Box, Button, Modal, Typography, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const ModalAddTask = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
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
