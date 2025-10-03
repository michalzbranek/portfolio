import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box>
      <Typography
        sx={{ pl: "10%", fontSize: { xs: "10vw", sm: "4vw" } }}
        fontFamily={"Russo One"}
        gutterBottom
      >
        O MNĚ
      </Typography>
      <Typography fontFamily={"Russo One"} sx={{ px: "10%", fontSize: { xs: "4vw", sm: "2vw", md: "1.5vw", lg: "1.2vw" } }} gutterBottom>
        Ahoj! Jmenuju se Michal Zbranek. Portfolio jsem si vytvořil z toho
        důvodu, abych mohl ukázat všechny projekty, které jsem vytvářel v
        Reactu. Vystudoval jsem Fakultu Informatiky v Brně a nyní bydlím ve
        Zlíně. Pracuju v Koale42 na pozici Testera a snažím se dostat na pozici
        Developera.
      </Typography>
    </Box>
  );
}

export default About;
