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
      }}
    />
  );
}
