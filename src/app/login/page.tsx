import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  colors,
  Grid,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logoImage from "../../../public/Images/Logo.svg"

export default function Page() {
  return (
    <Container maxWidth="sm">
      <Box
        flexDirection="column"
        alignItems="center"
        height="100vh"
        sx={{ mt: 4, display: { xs: "flex", md: "none" } }}
      >
        <Image
          width={177}
          height={47}
          style={{ margin: "1rem" }}
          src={logoImage.src}
          alt="Wait screen illustration"
        />
        <Typography variant="h6" gutterBottom>
          Hey! Great to see you :)
        </Typography>
        <Box width="100%" mt={3} component="form">
          <Typography variant="h4" mb={2}>
            Login to your account{" "}
          </Typography>
          <TextField
            label="Email"
            InputLabelProps={{ shrink: true }}
            placeholder="youremail@gmail.com"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="********"
              InputLabelProps={{ shrink: true }}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Link
                      href="/forgot-password"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      forget?
                    </Link>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mb: 6 }}
          >
            Login
          </Button>

          <Typography variant="h4" mb={1}>
            Or Login With Google
          </Typography>
          <Button fullWidth variant="outlined" sx={{ mb: 3 }}>
            <Image
              width={18}
              height={18}
              src="/ICONS/google-icon.svg"
              alt="G-MAIL"
              style={{ marginRight: "0.5rem" }}
            />{" "}
            Google
          </Button>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="body1">Don&#39;t have an account?</Typography>
            <Link
              href="/sign-up"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" color="primary">
                {" "}
                Sign Up
              </Typography>
              <ArrowForwardIcon color="primary" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
