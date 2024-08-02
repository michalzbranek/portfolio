import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import {
  AppBar,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";

const drawerWidth = 240;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "black" : "black",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

function Navbar(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "black" }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            // onClick={scrollToHome}
            sx={{
              textAlign: "center",
              color: "white",
              ":hover": {
                backgroundColor: "Aquamarine",
                color: "black",
              },
            }}
          >
            <ListItemText>
              <Typography fontFamily={"Russo One"}>DOMŮ</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            // onClick={scrollToResult}
            sx={{
              textAlign: "center",
              color: "white",
              ":hover": {
                backgroundColor: "Aquamarine",
                color: "black",
              },
            }}
          >
            <ListItemText>
              <Typography fontFamily={"Russo One"}>O MNĚ</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            // onClick={scrollToGallery}
            sx={{
              textAlign: "center",
              color: "white",
              ":hover": {
                backgroundColor: "Aquamarine",
                color: "black",
              },
            }}
          >
            <ListItemText>
              <Typography fontFamily={"Russo One"}>PROJEKTY</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            // onClick={scrollToTable}
            sx={{
              textAlign: "center",
              color: "white",
              ":hover": {
                backgroundColor: "Aquamarine",
                color: "black",
              },
            }}
          >
            <ListItemText>
              <Typography fontFamily={"Russo One"}>KONTAKT</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid xs={12}>
          <Item>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: "black", py: 2 }} component="nav">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    mr: 3,
                    pl: 3,
                    display: { sm: "none" },
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", sm: "block" },
                  }}
                ></Typography>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  <Button
                    // onClick={scrollToHome}
                    sx={{
                      color: "#fff",
                      ":hover": {
                        backgroundColor: "Aquamarine",
                        color: "black",
                      },
                    }}
                  >
                    <Typography fontSize={25} fontFamily={"Russo One"}>
                      DOMŮ{" "}
                    </Typography>
                  </Button>
                  <Button
                    // onClick={scrollToResult}
                    sx={{
                      color: "#fff",
                      ":hover": {
                        backgroundColor: "Aquamarine",
                        color: "black",
                      },
                    }}
                  >
                    <Typography fontSize={25} fontFamily={"Russo One"}>
                      O MNĚ{" "}
                    </Typography>
                  </Button>
                  <Button
                    // onClick={scrollToGallery}
                    sx={{
                      color: "#fff",
                      ":hover": {
                        backgroundColor: "Aquamarine",
                        color: "black",
                      },
                    }}
                  >
                    <Typography fontSize={25} fontFamily={"Russo One"}>
                      PROJEKTY{" "}
                    </Typography>
                  </Button>
                  <Button
                    // onClick={scrollToTable}
                    sx={{
                      color: "#fff",
                      ":hover": {
                        backgroundColor: "Aquamarine",
                        color: "black",
                      },
                    }}
                  >
                    <Typography fontSize={25} fontFamily={"Russo One"}>
                      KONTAKT
                    </Typography>
                  </Button>
                </Box>
              </Toolbar>
            </AppBar>
            <nav>
              <Drawer
                PaperProps={{
                  sx: {
                    backgroundColor: "black",
                    color: "red",
                  },
                }}
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </nav>
            {/* <div ref={homeRef}></div> */}
          </Item>
        </Grid>
        <Grid xs={2} sx={{ color: "white", backgroundColor: "white" }}>
          <Item sx={{ color: "white", backgroundColor: "white" }}>
            <InstagramIcon style={{ color: "white", backgroundColor: "white" }} />
          </Item>
        </Grid>
        <Grid xs={10}>
          <Item>xs=10</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Navbar;

/* <nav class="navbar navbar-expand-lg p-4 fw-bold fixed-top navbar-dark">
    <div class="container-fluid">
      <button class="border-0 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-grip-lines fa-2x text-white"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-2" style="text-align: right;">
          <li class="nav-item px-lg-4">
            <a class="nav-link" href="#">domů</a>
          </li>
          <li class="nav-item px-lg-4">
            <a class="nav-link" href="#about">o mně</a>
          </li>
          <li class="nav-item px-lg-4">
            <a class="nav-link" href="#portfolio">projekty</a>
          </li>
          <li class="nav-item px-lg-4">
            <a class="nav-link" href="#footer">kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="float-start fixed-top d-none d-lg-block" style="height: 100vh; width: 80px;">
      <div class="border-end border-white" style="height: 20vh; position: absolute; top: 12.5%; left: 10.5vh;"></div>
      <div class="iconbox">
          <div class="mb-2">
              <a class="text-white" href="https://www.instagram.com/michal.zbranek/" target="_blank"><i class="bi bi-instagram icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://www.facebook.com/BliXer/" target="_blank"><i class="bi bi-facebook icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://www.linkedin.com/in/michal-zbranek-8a5421124/" target="_blank"><i class="bi bi-linkedin icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://twitter.com/BliXer27" target="_blank"><i class="bi bi-twitter icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://michalzbranekblog.herokuapp.com/" target="_blank"><i class="bi bi-pen-fill icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://photos.app.goo.gl/FhVVwwoVSkEYyYtU6" target="_blank"><i class="bi bi-image-fill icon"></i></a>
          </div>
      </div>
      <div class="border-end border-white" style="height: 25%; bottom: 5%; position: absolute; left: 10.5vh;"></div>
  </div>

  <div class="iconbox2 position-absolute d-lg-none">
          <div class="mb-2">
              <a class="text-white" href="https://www.instagram.com/michal.zbranek/" target="_blank"><i class="bi bi-instagram icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://www.facebook.com/BliXer/" target="_blank"><i class="bi bi-facebook icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://www.linkedin.com/in/michal-zbranek-8a5421124/" target="_blank"><i class="bi bi-linkedin icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://twitter.com/BliXer27" target="_blank"><i class="bi bi-twitter icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://michalzbranekblog.herokuapp.com/" target="_blank"><i class="bi bi-pen-fill icon"></i></a>
          </div>
          <div class="mb-2">
              <a class="text-white" href="https://photos.app.goo.gl/FhVVwwoVSkEYyYtU6" target="_blank"><i class="bi bi-image-fill icon"></i></a>
          </div>
  </div> */
