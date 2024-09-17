import React from "react";
import { Typography } from "@mui/material";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Typography variant="h4" mt={2}>
      {title}
    </Typography>
  );
};

export default Header;
