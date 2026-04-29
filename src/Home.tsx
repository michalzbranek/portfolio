import React from "react";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Typography
        sx={{
          pl: "10%",
          pt: "10%",
          fontSize: { xs: "8vw", sm: "5vw" },
          fontFamily: "Russo One",
        }}
        gutterBottom
      >
        Michal Zbranek
      </Typography>
      <Typography
        sx={{
          pl: "10%",
          fontSize: { xs: "6vw", sm: "4vw" },
          fontFamily: "Russo One",
        }}
        gutterBottom
      >
        Programátor
      </Typography>
    </Box>
  );
}

export default Home;
