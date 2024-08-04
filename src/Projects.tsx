import { Box, Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import blog from "/blog.png";
import fcmalenovice from "/fcmalenovice.png";
import todolist from "/todolist.png";

function Projects() {
  return (
    <Box sx={{ py: 10, pl: "10%" }}>
      <Typography fontFamily={"Russo One"} variant="h2" gutterBottom>
        PROJEKTY
      </Typography>
      <Grid2 container>
        <Grid2 xs={6}></Grid2>
        <Grid2 xs={6}>
          <Box component="img" width="inherit" src={todolist} />
        </Grid2>
        <Grid2 xs={6}>
          <Box component="img" width="inherit" src={blog} />
        </Grid2>
        <Grid2 xs={6}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              ":hover": { backgroundColor: "aquamarine", color: "black" },
            }}
          >
            <Typography fontFamily={"Russo One"} variant="h5">
              TODOLIST
            </Typography>
          </Button>
        </Grid2>
        <Grid2 xs={6}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              ":hover": { backgroundColor: "aquamarine", color: "black" },
            }}
          >
            <Typography fontFamily={"Russo One"} variant="h5">
              BLOG
            </Typography>
          </Button>
        </Grid2>
        <Grid2 xs={6}>
          <Box component="img" width="inherit" src={fcmalenovice} />
        </Grid2>
        <Grid2 xs={6}></Grid2>
        <Grid2 xs={6}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              ":hover": { backgroundColor: "aquamarine", color: "black" },
            }}
          >
            <Typography fontFamily={"Russo One"} variant="h5">
              FC MALENOVICE
            </Typography>
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Projects;
