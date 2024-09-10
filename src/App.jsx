import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box, Grid, Typography } from "@mui/material";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";

// Create a dark theme with a black background
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#323232",
      paper: "#4c4c4c",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

export default function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          width: "90vw",
          backgroundColor: "background.default",
          margin: "5vh 5vw",
          borderRadius: "16px",
          display: "flex",
          overflow: "auto",
          flexDirection: { xs: "column", lg: "row" }, 
        }}
      >
        {/* Left Side Container */}
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                flex: "1",
                display: "flex",
                marginBottom: { xs: "200px", lg: 0 }, 
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#4c4c4c",
                border: "2px solid lightblue",
                borderRadius: "16px",
                marginRight: { lg: "20px", xs: 0 }, 
                height: { xs: "100%", lg: "90vh" }, 
                maxWidth: "100%", 
              }}
            >
              <Typography variant="h3" color="white">
                Welcome
              </Typography>
            </Box>
          </Grid>

          {/* Right Side Container */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                flex: "1", 
                display: "flex",
                marginTop: { xs: "25px", lg: 0 },
                flexDirection: "column",
                justifyContent: "space-between",
                height: { xs: "50%", lg: "90vh" },
                padding: { lg: "0 20px", xs: "0" }, 
                maxWidth: "100%", 
              }}
            >
              {/* Render Card1 and Card2 */}
              <Card1 value={value} handleChange={handleChange} />

              {/* Divider */}
              <Box
                sx={{
                  width: "80%",
                  height: "4px",
                  backgroundColor: "#191919",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
                  margin: "0 auto",
                  mb: 2,
                }}
              />

              <Card2 />

              <Box
                sx={{
                  width: "80%",
                  height: "4px",
                  backgroundColor: "#191919",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
                  margin: "0 auto",
                  mb: 2,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
