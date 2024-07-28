import React from "react";
import { Grid, Button } from "@mui/material";
import PauseIcon from '@mui/icons-material/Pause';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function LadderStatus() {
  return (
    <Grid container spacing={1} sx={{ width: '100%' }}>
      <Grid item xs={7}>
        <Button
          fullWidth
          color="secondary"
          variant="outlined"
          startIcon={<PauseIcon />}
        >
          Deactivate
        </Button>
      </Grid>
      <Grid item xs={5}>
        <Button
          fullWidth
           color="secondary"
          variant="outlined"
          startIcon={<DeleteOutlineOutlinedIcon />}
          sx={{ color: 'red' }}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}
