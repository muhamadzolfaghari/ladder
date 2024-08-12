import { Container } from "@mui/material";
import BottomNav from "../BottomNav";
import StoreProvider from "@/app/StoreProvider";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <Container maxWidth="sm">
    <StoreProvider>
      {children}
      <BottomNav />
    </StoreProvider>
  </Container>
);

export default Layout;
