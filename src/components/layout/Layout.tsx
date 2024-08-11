import { Container } from "@mui/material";
import NavigationBottom from "../NavigationBottom";
import BottomNav from "../BottomNav";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <Container sx={{ pt: 2 }}>
    {children}
    <BottomNav />
  </Container>
);

export default Layout;
