import Image from "next/image";
import { Typography, Box, Container } from "@mui/material";
<<<<<<< HEAD
import logoImage from "../../public/images/Logo.svg";
=======
import logoImage from "/public/images/logo.svg";
>>>>>>> 6c18058 (sfsdfs)

const HeaderSignUp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: "4rem",
        mb: "4.5rem",
      }}
    >
      <Image
        width={177}
        height={47}
        style={{ margin: "1rem" }}
        src={logoImage.src}
        alt="ladder logo"
      />
      <Typography variant="h6" gutterBottom sx={{ fontFamily: "Rubik" }}>
        Your AI Learning Assistance :&#41;
      </Typography>
    </Box>
  );
};

export default HeaderSignUp;
