"use client";
import { createTheme } from "@mui/material/styles";
import "@fontsource/alumni-sans/500.css";
import "@fontsource/alumni-sans/600.css";
import "@fontsource/alumni-sans/700.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/700.css";

const theme = createTheme({
  typography: {
    fontFamily: "Alumni Sans, Rubik",
    h1: {
      fontFamily: "Alumni Sans",
      fontSize: "7rem",
      fontWeight: 600,
      color: "#181D17",
    },
    h2: {
      fontFamily: "Alumni Sans",
      fontWeight: 600,
      fontSize: "4rem",
      color: "#2D322C",
    },
    h3: {
      fontFamily: "Alumni Sans",
      fontWeight: 600,
      fontSize: "2.8rem",
      color: "#2D322C",
    },
    h4: {
      fontFamily: "Alumni Sans",
      fontWeight: 600,
      fontSize: "2.2rem",
      color: "#2D322C",
    },
    h5: {
      fontFamily: "Alumni Sans",
      fontWeight: 600,
      fontSize: "1.8rem",
      color: "#2D322C",
    },
    body1: {
      fontFamily: "Rubik",
      fontWeight: 400,
      fontSize: "16px",
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
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          display: "flex",
          flexGrow: 1,
          margin: "0.5rem 0",
          "&.Mui-expanded": {
            margin: "0.5rem 0",
          },
        },

        root: {
          backgroundColor: "#22983C",
          borderRadius: "9px",
          flexDirection: "row-reverse",
          boxShadow: "none",
          border:"none",

          "& .MuiTypography-root": {
            color: "white",
            fontFamily: "Alumni Sans",
            fontSize: "1.8rem",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          textAlign: "left",
        },
      },
    },
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
          fontFamily: "Rubik",
          fontWeight: 500,
          "&.Mui-completed": {
            color: "rgb(34, 152, 60)",
          },
          "&.Mui-active": {
            color: "#424940",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "9px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#72796F",
            borderWidth: "2px",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.1rem",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: "Rubik",
          fontSize: "0.9rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontFamily: "Rubik",
          borderRadius: "10px",
          padding: " 0.7rem 1rem",
          fontSize: "1.1rem",
          fontWeight: "500",
          "&:hover": {
            background: "transparnet",
          },
          text: {
            background: "#F7FBF2",
            color: "#22983C",
          },
        },
      },
    },
    MuiCard:{
      styleOverrides: {
        root: {
          border: '1px solid #72796F',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
        }}
    },
    MuiPaper:{
      styleOverrides: {
        root: {
            border: '1px solid #72796F',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: 'none',
            }}
    },
    MuiBottomNavigation:{
      styleOverrides: {
        root: {
          borderTop: "1px solid #72796F",
          backgroundColor: "#ffffff",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        label: {
          fontFamily: "Rubik",
          fontSize: "0.9rem",
        },
        root: {},
      },
    },
    MuiSlider: {
      styleOverrides: {
        rail: {
          height: "1rem",
          background: "#C2C9BD",
        },
        track: {
          color: "#4caf50",
          height: "1rem",
          border: "none",
          borderRadius: "none",
          borderTopLeftRadius: "9px",
          borderTopRightRadius: "0px",
          borderBottomLeftRadius: "9px",
          borderBottomRightRadius: "0px",
        },

        valueLabel: {
          fontSize: "1.2rem",
          fontFamily: "Rubik",
          borderRadius: "50px",
          fontWeight: "400",
          background: "#424940",
          padding: "6px 15px",
          "&::before": {
            display: "none",
          },
        },
        thumb: {
          width: "4px",
          color: "#424940",
          height: "40px",
          marginLeft: "0.4rem",
          borderRadius: "10px",
          "&.Mui-active": {
            boxShadow: "none",
          },
        },
        root: {},
      },
    },
  },
});


export default theme;