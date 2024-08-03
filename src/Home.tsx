import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box sx={{height: "100vh"}}>
      <Typography sx={{pl:"10%", pt:"10%"}} fontFamily={"Russo One"} variant="h1" gutterBottom>
        Michal Zbranek
      </Typography>
      <Typography sx={{pl: "10%"}} fontFamily={"Russo One"} variant="h2" gutterBottom>
        Programátor
      </Typography>
    </Box>
  );
}

export default Home;
