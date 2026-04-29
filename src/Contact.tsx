import React from "react";
import { Box, Typography } from "@mui/material";

function Contact() {
  return (
    <Box sx={{ py: 10 }}>
      <Typography
        sx={{
          pl: "10%",
          fontSize: { xs: "8vw", sm: "3vw" },
          fontFamily: "Russo One",
        }}
        gutterBottom
      >
        KONTAKT
      </Typography>
      <Typography
        sx={{
          px: "10%",
          fontSize: { xs: "4vw", sm: "2vw", md: "1.5vw", lg: "1.2vw" },
          fontFamily: "Russo One",
        }}
        gutterBottom
      >
        +420 731 840 268
      </Typography>
      <Typography
        sx={{
          px: "10%",
          fontSize: { xs: "4vw", sm: "2vw", md: "1.5vw", lg: "1.2vw" },
          fontFamily: "Russo One",
        }}
        gutterBottom
      >
        michal.zbranek.1@gmail.com
      </Typography>
      <Typography
        sx={{
          px: "10%",
          fontSize: { xs: "4vw", sm: "2vw", md: "1.5vw", lg: "1.2vw" },
          fontFamily: "Russo One",
        }}
        gutterBottom
      >
        © 2024 All rights reserved
      </Typography>
    </Box>
  );
}

export default Contact;
