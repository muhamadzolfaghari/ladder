import { Container } from "@mui/material";
import NavigationBottom from "../NavigationBottom";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <Container sx={{ pt: 2 }}>
    {children}
    <NavigationBottom />
  </Container>
);

export default Layout;
