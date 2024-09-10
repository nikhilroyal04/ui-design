import React, { useState, useRef } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sampleImages = [
  "https://via.placeholder.com/150/0000FF/808080?text=Image+1",
  "https://via.placeholder.com/150/FF0000/FFFFFF?text=Image+2",
  "https://via.placeholder.com/150/00FF00/000000?text=Image+3",
  "https://via.placeholder.com/150/FFFF00/000000?text=Image+4",
  "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Image+5",
  "https://via.placeholder.com/150/00FFFF/000000?text=Image+6",
];

const Card2 = () => {
  const [images, setImages] = useState(sampleImages);
  const sliderRef = useRef(null);

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([reader.result, ...images]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "background.paper",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
        position: "relative",
        mb: 2,
        overflow: "hidden",
      }}
    >
      {/* Transparent Header */}
      <Box
        sx={{
          position: "absolute",
          borderRadius: "16px 16px 0 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          top: 10,
          left: 40,
          right: 40,
          zIndex: 1,
        }}
      >
        {/* Gallery Button */}
        <Box
          sx={{
            backgroundColor: "#000",
            borderRadius: "10px",
            padding: "6px 15px",
            color: "#fff",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          Gallery
        </Box>

        {/* Add Image Button and Arrow Buttons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Add Image Button */}
          <label htmlFor="image-upload">
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <Box
              sx={{
                backgroundColor: "#666666",
                borderRadius: "50px",
                padding: "6px 12px",
                color: "#fff",
                cursor: "pointer",
                mr: "10px",
                display: "flex",
                alignItems: "center",
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.07)",
                },
                boxShadow:
                  "4px 4px 8px rgba(0, 0, 0, 0.6), -4px -4px 8px rgba(255, 255, 255, 0.2)",
              }}
            >
              <Typography variant="body2" color="inherit">
                Add Image
              </Typography>
            </Box>
          </label>

          {/* Arrow Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {/* Left Arrow */}
            <Box
              onClick={() => sliderRef.current.slickPrev()}
              sx={{
                width: "24px",
                height: "24px",
                backgroundColor: "#323232",
                color: "#b2b2b2",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 0 12px rgba(255, 255, 255, 0.8)",
                fontWeight: "bold",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 0 12px rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              <ArrowLeftIcon />
            </Box>
            {/* Right Arrow */}
            <Box
              onClick={() => sliderRef.current.slickNext()}
              sx={{
                width: "24px",
                height: "24px",
                backgroundColor: "#323232",
                color: "#b2b2b2",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 0 12px rgba(255, 255, 255, 0.8)",
                fontWeight: "bold",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 0 12px rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              <ArrowRightIcon />
            </Box>
          </Box>
        </Box>
      </Box>

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

      {/* Card Content */}
      <CardContent
        sx={{
          marginTop: "60px",
          marginRight: "30px",
          marginLeft: "40px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Slider Component */}
        <Slider ref={sliderRef} {...sliderSettings}>
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                padding: "10px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  paddingBottom: "100%", 
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                  cursor: "pointer",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  transition: "transform 0.5s ease, filter 0.5s ease",
                  "&:hover": {
                    transform: "rotate(-2deg) scale(1.15)", 
                  },
                }}
              >
                <img
                  src={image}
                  alt={`Uploaded ${index}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                    transition: "transform 0.5s ease",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </CardContent>
    </Card>
  );
};

export default Card2;
