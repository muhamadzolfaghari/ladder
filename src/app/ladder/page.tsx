import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
  Divider,
} from "@mui/material";
import { Timeline, Assignment, BarChart } from "@mui/icons-material";
import BottomNav from "@/components/BottomNav";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import addicon from "../../../public/icons/addicon.svg";
import Path from "../../../public/icons/Path.svg";
import Speedometer from "../../../public/icons/Speedometer.svg";
import Ruler  from "../../../public/icons/Ruler.svg";
import Image from "next/image";

export default function Page() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Typography variant="h4" mt={2}>
        Ladders
      </Typography>
      <Card sx={{  bgcolor: "#4caf50", color: "white",justifyContent:'space-around'}}>
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
            my={3}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              Full-Stack Web Development
            </Typography>

            <IconButton>
              <TuneOutlinedIcon
                sx={{ color: "white", transform: "rotate(90deg)" }}
              />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
          <Image src={Path.src} alt="Add Icon" width={24} height={24} />
          <Typography variant="body1" sx={{ color: "white" }}>
                Road Map
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: "white" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
          <Image src={Speedometer.src} alt="Add Icon" width={24} height={24} />
          <Typography variant="body1" sx={{ color: "white" }}>
                Week Sheet
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: "white" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
          <Image src={Ruler.src} alt="Add Icon" width={24} height={24} />
          <Typography variant="body1" sx={{ color: "white" }}>
                Stats
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Box   sx={{
        marginTop: '0px !important',
        marginBottom: '0px !important'}}
        textAlign="center"
        display="flex"
        flexDirection="column"
        flexGrow={1}
        alignItems="center"
        justifyContent="center">
        <IconButton>
          <Image src={addicon.src} alt="Add Icon" width={56} height={56} />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          bottom: 0,
          left: 0,
          right: 0,
          flexDirection: "column",
        }}
      >
        <BottomNav />
      </Box>
    </Container>
  );
}