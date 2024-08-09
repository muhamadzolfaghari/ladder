import StoreProvider from "@/app/StoreProvider";
import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

const PromptsLayout = ({ children }: PropsWithChildren) => (
  <Container sx={{ mt: 4, px: "1rem" }}>
    <StoreProvider>{children}</StoreProvider>
  </Container>
);

export default PromptsLayout;
