import { LearningPath, LearningTask } from "@/types/Ladder";
import { Typography, List, ListItem } from "@mui/material";
import { title } from "process";
import { PropsWithChildren } from "react";

interface Props {
  title: string;
  itemEl: LearningTask[];
}

const ListSectionAccordian = (props: PropsWithChildren<Props>) => {
  const { title, itemEl } = props;
  return (
    <>
      <Typography variant="h5">{title}</Typography>
      <List sx={{ pl: 4, listStyleType: "disc", color: "#424940" }}>
        {itemEl.map((item, index) => (
          <>
            <ListItem key={index} sx={{ display: "list-item", p: 0 }}>
              {title === "Weekly Schedule:"
                ? item.task
                : title === "Key Topics:"
                  ? item.time
                  : title === "Resources:"
                    ? item.resource
                    : ""}
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
};

export default ListSectionAccordian;
