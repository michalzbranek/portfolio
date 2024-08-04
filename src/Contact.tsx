import { Box, Typography } from "@mui/material";

function Contact() {
  return (
    <Box sx={{ py: 10 }}>
      <Typography
        sx={{ pl: "10%", fontSize: { xs: "10vw", sm: "4vw" } }}
        fontFamily={"Russo One"}
        gutterBottom
      >
        KONTAKT
      </Typography>
      <Typography fontFamily={"Russo One"} sx={{ px: "10%" }} gutterBottom>
        +420 731 840 268
      </Typography>
      <Typography fontFamily={"Russo One"} sx={{ px: "10%" }} gutterBottom>
        michal.zbranek.1@gmail.com
      </Typography>
      <Typography fontFamily={"Russo One"} sx={{ px: "10%" }} gutterBottom>
        © 2024 All rights reserved
      </Typography>
    </Box>
  );
}

export default Contact;
