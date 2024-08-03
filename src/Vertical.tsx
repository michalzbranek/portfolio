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
      <Box position={"fixed"} pt={45} sx={{ pl: "2%" }}>
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
              // onClick={scrollToResult}
              sx={{
                color: "#fff",
                mx: 1,
                my: 1,
                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              {" "}
              <InstagramIcon />
            </IconButton>
            <IconButton
              // onClick={scrollToResult}
              sx={{
                color: "#fff",
                mx: 1,
                my: 1,
                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              // onClick={scrollToResult}
              sx={{
                color: "#fff",
                mx: 1,
                my: 1,
                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              {" "}
              <LinkedInIcon />
            </IconButton>
            <IconButton
              // onClick={scrollToResult}
              sx={{
                color: "#fff",
                mx: 1,
                my: 1,
                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              {" "}
              <XIcon />
            </IconButton>
            <IconButton
              // onClick={scrollToResult}
              sx={{
                color: "#fff",
                mx: 1,
                my: 1,
                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              {" "}
              <BookIcon />
            </IconButton>
            <IconButton
              // onClick={scrollToResult}
              sx={{
                color: "#fff",
                mx: 1,
                my: 1,
                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              {" "}
              <PhotoLibraryIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Vertical;
