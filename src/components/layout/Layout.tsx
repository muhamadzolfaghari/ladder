import { Container } from "@mui/material";
import { PropsWithChildren } from "react";
import HeaderHomePage from "../HeaderHomePage";
import NavigationBottom from "../NavigationBottom";

const Layout = ({ children }: PropsWithChildren) => (
  <Container sx={{ pt: 2 }}>
    <HeaderHomePage />
    {children}
    <NavigationBottom />
  </Container>
);

export default Layout;
