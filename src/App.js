import React from "react";
import { Box } from "@mui/material";

export default function BackgroundBox() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url(/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src="/bee.png"
        alt="Floating Bee"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "480px",
          animation: "floatBee 3s ease-in-out infinite",
          filter: "drop-shadow(0 8px 12px rgba(0, 0, 0, 0.3))",
        }}
      />

      <style>
        {`
          @keyframes floatBee {
            0%   { transform: translate(-50%, -50%) translateY(0); }
            50%  { transform: translate(-50%, -50%) translateY(-30px); }
            100% { transform: translate(-50%, -50%) translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}
