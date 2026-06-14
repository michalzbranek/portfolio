// Named barrel imports required under vite 8 (rolldown) — per-path default imports break CJS interop
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  X as XIcon,
  Book as BookIcon,
  PhotoLibrary as PhotoLibraryIcon,
} from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

function Vertical() {
  return (
    <>
      <Box
        position={"fixed"}
        sx={{
          pl: { xs: "0%", sm: "2%" },
          bottom: 0,
          pb: { xs: 4, sm: 6 },
        }}
      >
        <AppBar
          sx={{
            backgroundColor: "black",
          }}
          component="nav"
          position="sticky"
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <IconButton
              target="_blank"
              href="https://www.instagram.com/michal.zbranek/"
              sx={{
                color: "#fff",
                mx: 1,
                my: 1,
                "& .MuiSvgIcon-root": {
                  fontSize: { xs: 20, sm: 24, md: 28, lg: 32 },
                },
                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.facebook.com/BliXer/"
              sx={{
                color: "#fff",
                mx: 1,
                my: 1,
                "& .MuiSvgIcon-root": {
                  fontSize: { xs: 20, sm: 24, md: 28, lg: 32 },
                },
                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/in/michal-zbranek-8a5421124/"
              sx={{
                color: "#fff",
                mx: 1,
                my: 1,
                "& .MuiSvgIcon-root": {
                  fontSize: { xs: 20, sm: 24, md: 28, lg: 32 },
                },
                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://x.com/BliXer27"
              sx={{
                color: "#fff",
                mx: 1,
                my: 1,
                "& .MuiSvgIcon-root": {
                  fontSize: { xs: 20, sm: 24, md: 28, lg: 32 },
                },
                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              <XIcon />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://michalzbranek.github.io/blog/"
              sx={{
                color: "#fff",
                mx: 1,
                my: 1,
                "& .MuiSvgIcon-root": {
                  fontSize: { xs: 20, sm: 24, md: 28, lg: 32 },
                },
                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              <BookIcon />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://photos.app.goo.gl/FhVVwwoVSkEYyYtU6"
              sx={{
                color: "#fff",
                mx: 1,
                my: 1,
                "& .MuiSvgIcon-root": {
                  fontSize: { xs: 20, sm: 24, md: 28, lg: 32 },
                },
                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              <PhotoLibraryIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Vertical;
