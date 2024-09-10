import React from "react";
import { Box, Card, CardContent, Typography, Tabs, Tab } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

export default function Card1({ value, handleChange }) {
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "background.paper",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
        position: "relative",
        mb: 2,
      }}
    >
      {/* Icon Container */}
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100% - 20px)",
        }}
      >
        <HelpOutlineIcon sx={{ color: "#b2b2b2" }} />
        <ViewModuleIcon sx={{ color: "#b2b2b2", mt: "auto", mb: "15vh" }} />
      </Box>

      {/* Floating Header */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 50,
          right: 50,
          backgroundColor: "#0c0c0c",
          borderRadius: "15px",
          zIndex: 1,
          display: "flex",
          boxShadow: "0 20px 30px rgba(0, 0, 0, 0.8)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          sx={{
            width: "100%",
            "& .MuiTabs-flexContainer": {
              justifyContent: "space-between",
              p: "3px",
            },
            "& .MuiTab-root": {
              borderRadius: "12px",
              "&::before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "100%",
                width: "0%",
                background: "#7f7f7f",
                transition: "width 0.3s ease",
                zIndex: -1,
              },
              "&:hover::before": {
                width: "100%",
              },
            },
            "& .Mui-selected": {
              backgroundColor: "#323232",
              borderRadius: "12px",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab sx={{ width: "32%" }} label="About Me" />
          <Tab sx={{ width: "32%" }} label="Experiences" />
          <Tab sx={{ width: "32%" }} label="Recommended" />
        </Tabs>
      </Box>

      {/* Card Content */}
      <Box
        sx={{
          marginTop: "80px",
          marginRight: "30px",
          marginLeft: "60px",
          overflowY: "auto",
          height: "calc(100% - 90px)",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#4c4c4c",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#777",
            borderRadius: "8px",
            height: "20px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#777",
          },
        }}
      >
        <CardContent>
          {value === 0 && (
            <Typography>
              Hello! I'm a dedicated professional with a passion for technology and innovation...
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, magnam at.
              Velit quod ea explicabo! Voluptatum excepturi necessitatibus rem deserunt labore
              beatae consectetur atque esse porro fuga eius, deleniti ullam commodi sapiente
              explicabo reprehenderit doloribus quasi culpa dolore, itaque ab recusandae quia
              ipsa voluptates! Reprehenderit deleniti tempora, animi ipsam iusto, adipisci odio
              nulla labore ex qui pariatur, sint quos reiciendis est vitae quibusdam nesciunt?
              Assumenda eveniet omnis unde porro maiores, tempora commodi odio mollitia quas, hic
              aliquam nesciunt minus impedit.
            </Typography>
          )}
          {value === 1 && (
            <Typography>This is the content for the Experiences tab...</Typography>
          )}
          {value === 2 && (
            <Typography>
              This is the content for the Recommended tab...
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem assumenda dolor,
              rem, porro numquam, minus excepturi adipisci doloribus velit explicabo
              exercitationem culpa fugiat harum sit doloremque. Sequi, et tempora at temporibus,
              ipsum saepe, quaerat animi quia consectetur porro dolor cumque ratione? Quibusdam
              veritatis cumque quos corrupti porro adipisci fugiat tempora.
            </Typography>
          )}
        </CardContent>
      </Box>
    </Card>
  );
}
