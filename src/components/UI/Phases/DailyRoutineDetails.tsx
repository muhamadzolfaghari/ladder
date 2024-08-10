import { Typography, List, ListItem } from "@mui/material";
import { PropsWithChildren } from "react";

interface DailyRoutineDetailsProps {
  title?: string;
  values?: string[];
}

const DailyRoutineDetails = (
  props: PropsWithChildren<DailyRoutineDetailsProps>
) => {
  const { title, values } = props;

  return (
    <>
      <Typography variant="h5">{title}</Typography>
      <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
        {values?.map((value, index) => (
          <ListItem key={index} sx={{ display: "list-item", p: 0 }}>
            {value}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DailyRoutineDetails;
