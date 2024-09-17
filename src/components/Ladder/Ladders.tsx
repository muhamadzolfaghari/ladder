import React, { useState } from "react";
import { Box, Container, IconButton } from "@mui/material";
import Image from "next/image";
import LadderStatus from "@/components/LadderStatus";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { statusChanged } from "@/store/slices/ladderSlice";
import RoadMap from "./RoadMap";
import WeekSheet from "./WeekSheet";
import States from "./States";
import Header from "./Header";
import LadderCard from "./LadderCard";
import AddLadder from "./AddLadder";

export default function Ladder() {
  const [showLadderSetting, setShowLadderSetting] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.ladder.status);
  const handleClick = (): void => {
    setShowLadderSetting((prev) => !prev);
  };
  const handleNavigation = (
    status: "ladder" | "roadmap" | "states" | "weeksheet"
  ) => {
    dispatch(statusChanged(status));
  };
  const renderComponent = () => {
    switch (status) {
      case "roadmap":
        return <RoadMap />;
      case "weeksheet":
        return <WeekSheet ladder={undefined} />;
      case "states":
        return <States />;
      default:
        return null;
    }
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header title="Ladders" />
      <LadderCard
        onRoadMapClick={() => handleNavigation("roadmap")}
        onWeekSheetClick={() => handleNavigation("weeksheet")}
        onStatesClick={() => handleNavigation("states")}
        onSettingClick={handleClick}
      />
      {showLadderSetting && <LadderStatus />}
      <AddLadder />
      {renderComponent()}
    </Container>
  );
}