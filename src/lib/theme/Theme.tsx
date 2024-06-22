"use client";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Alumni_Sans } from "next/font/google";
import { Rubik } from "next/font/google";

const alumniSans = Alumni_Sans({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const rubik = Rubik({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: `${alumniSans.style.fontFamily}, ${rubik.style.fontFamily}`,
    h1: {
      fontFamily: alumniSans.style.fontFamily,
      fontSize: "7rem",
      fontWeight: 600,
      color: "#181D17",
    },
    h2: {
      fontFamily: alumniSans.style.fontFamily,
      fontWeight: 600,
      fontSize: "4rem",
      color: "#2D322C",
    },
    h3: {
      fontFamily: alumniSans.style.fontFamily,
      fontWeight: 600,
      fontSize: "2.8rem",
      color: "#2D322C",
    },
    h4: {
      fontFamily: alumniSans.style.fontFamily,
      fontWeight: 600,
      fontSize: "2.2rem",
      color: "#2D322C",
    },
    body1: {
      fontFamily: rubik.style.fontFamily,
      fontWeight: 400,
      fontSize: "1.1rem",
      color: "#424940",
    },
  },
  palette: {
    primary: {
      main: "#22983C",
      contrastText: "#fff",
    },
    secondary: {
      main: "#424940",
    },
    error: {
      main: "#B81F1E",
    },
    success: {
      main: "#22983C",
      light: "#526350",
      dark: "#181D17",
    },
    grey: {
      100: "#C2C9BD",
      400: "#1D1B201F",
    },
    background: {
      paper: "#BAF0B6",
    },
  },
  components: {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: "#C2C9BD",
          borderWidth: "3px",
          borderRadius: "10px",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        labelContainer: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        label: {
          fontFamily: rubik.style.fontFamily,
          fontWeight: 500,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          background: "#22983C",
          color: "#F7FBF2",
          textTransform: "capitalize",
          fontFamily: rubik.style.fontFamily,
          borderRadius: "8px",
          "&:hover": {
            background: "#22983C",
          },
        },
      },
    },
  },
});

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
