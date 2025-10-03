import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import BookIcon from "@mui/icons-material/Book";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

function Vertical() {
  return (
    <>
      <Box
        position={"fixed"}
        sx={{ pl: { xs: "0%", sm: "2%" }, pt: { xs: 28, sm: 40 } }}
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
                  fontSize: { xs: 24, sm: 30, md: 35, lg: 40 }
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
                  fontSize: { xs: 24, sm: 30, md: 35, lg: 40 }
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
                  fontSize: { xs: 24, sm: 30, md: 35, lg: 40 }
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
                  fontSize: { xs: 24, sm: 30, md: 35, lg: 40 }
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
                  fontSize: { xs: 24, sm: 30, md: 35, lg: 40 }
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
                  fontSize: { xs: 24, sm: 30, md: 35, lg: 40 }
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
