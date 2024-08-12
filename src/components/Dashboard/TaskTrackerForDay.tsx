"use client";
import {
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import React, { Fragment, PropsWithChildren, useCallback } from "react";
import ModalAddTask from "./ModalAddTask";
import { usePhaseAccordion } from "../UI/PhaseAccordion/hooks/usePhaseAccordion";
import PhaseAccordion from "../UI/PhaseAccordion/PhaseAccordion";
import Ladder from "@/types/Ladder";
import { useEffect } from "react";
import useLearningPathWeekdays from "./hooks/useLearningPath";
import { useStoreLearningPathWeekdays } from "./hooks/useStore";

interface Props {
  ladder: Ladder | undefined;
}

const TaskTrackerForDay = ({ ladder }: PropsWithChildren<Props>) => {
  const { expanded, handleExpandedChange } = usePhaseAccordion("panel");
  // const dailyRoutines = ladder?.learningPath?.[0]?.dailyRoutine || undefined;
  const {
    mutate: learningPathWeekdays,
    isPending: learningPathWeekdaysIsPending,
    data: learningPathWeekdaysData,
  } = useLearningPathWeekdays();
  const {
    isPending,
    isSuccess: storeLearningPathWeekdaysIsSuccess,
    mutate: storeLearningPathWeekdays,
  } = useStoreLearningPathWeekdays();

  const handleClick = () => {
    storeLearningPathWeekdays();
  };

  useEffect(() => {
    learningPathWeekdays();
  }, [learningPathWeekdays, storeLearningPathWeekdaysIsSuccess]);

  const handleDailyRoutineCreated = useCallback(() => {
    learningPathWeekdays();
  }, [learningPathWeekdays]);

  return (
    <>
      {(learningPathWeekdaysIsPending || isPending) && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <Typography variant="h6">Loading...</Typography>
        </Box>
      )}

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5">Today&#39;s tasks</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.3rem",
            mt: 2,
          }}
        >
          <PhaseAccordion
            title={`Phase ${learningPathWeekdaysData?.phase}, Week ${learningPathWeekdaysData?.weekNumber}, Day ${learningPathWeekdaysData?.weekDay}`}
            index={0}
            expanded={expanded}
            onExpandedChange={handleExpandedChange}
          >
            <Typography>Day 5 Weekdays &#40;2 hours/day&#41;</Typography>
            {learningPathWeekdaysData?.dailyRoutines?.map(
              (dailyRoutine, index) => (
                <Fragment key={index}>
                  <Typography>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={`${dailyRoutine.time}:${dailyRoutine.task} - ${dailyRoutine.resource}`}
                    />
                  </Typography>
                </Fragment>
              )
            )}
          </PhaseAccordion>
        </Box>
        <ModalAddTask onCreated={handleDailyRoutineCreated} />
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          type="submit"
          sx={{ mb: 1, mt: 4 }}
          onClick={handleClick}
          disabled={isPending}
        >
          {isPending ? "is sending..." : "Next Day"}
        </Button>
      </Box>
    </>
  );
};

export default TaskTrackerForDay;
