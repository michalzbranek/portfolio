import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Typography
        sx={{ pl: "10%", pt: "10%", fontSize: { xs: "10vw", sm: "6vw" } }}
        fontFamily={"Russo One"}
        gutterBottom
      >
        Michal Zbranek
      </Typography>
      <Typography
        sx={{ pl: "10%", fontSize: { xs: "7vw", sm: "5vw" } }}
        fontFamily={"Russo One"}
        gutterBottom
      >
        Programátor
      </Typography>
    </Box>
  );
}

export default Home;
