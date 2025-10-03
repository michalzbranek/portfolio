import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// @ts-ignore: Object is possibly 'null'.
function Horizontal({
  // @ts-ignore: Object is possibly 'null'.
  container,
  // @ts-ignore: Object is possibly 'null'.
  mobileOpen,
  // @ts-ignore: Object is possibly 'null'.
  drawerWidth,
  // @ts-ignore: Object is possibly 'null'.
  handleDrawerToggle,
  // @ts-ignore: Object is possibly 'null'.
  scrollToHome,
  // @ts-ignore: Object is possibly 'null'.
  scrollToAbout,
  // @ts-ignore: Object is possibly 'null'.
  scrollToProjects,
  // @ts-ignore: Object is possibly 'null'.
  scrollToContact,
}) {
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "black" }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={scrollToHome}
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
              <Typography fontSize={{ xs: "6vw" }} fontFamily={"Russo One"}>DOMŮ</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={scrollToAbout}
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
              <Typography fontSize={{ xs: "6vw" }} fontFamily={"Russo One"}>O MNĚ</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={scrollToProjects}
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
              <Typography fontSize={{ xs: "6vw" }} fontFamily={"Russo One"}>PROJEKTY</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={scrollToContact}
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
              <Typography fontSize={{ xs: "6vw" }} fontFamily={"Russo One"}>KONTAKT</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "black", py: { xs: 2, sm: 5 } }}
        component="nav"
        position="sticky"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
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
              onClick={scrollToHome}
              sx={{
                color: "#fff",
                mx: 1,

                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              <Typography fontSize={{ sm: 25, md: 30, lg: 35 }} fontFamily={"Russo One"}>
                DOMŮ{" "}
              </Typography>
            </Button>
            <Button
              onClick={scrollToAbout}
              sx={{
                color: "#fff",
                mx: 1,

                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              <Typography fontSize={{ sm: 25, md: 30, lg: 35 }} fontFamily={"Russo One"}>
                O MNĚ{" "}
              </Typography>
            </Button>
            <Button
              onClick={scrollToProjects}
              sx={{
                color: "#fff",
                mx: 1,

                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              <Typography fontSize={{ sm: 25, md: 30, lg: 35 }} fontFamily={"Russo One"}>
                PROJEKTY{" "}
              </Typography>
            </Button>
            <Button
              onClick={scrollToContact}
              sx={{
                color: "#fff",
                mx: 1,
                ":hover": {
                  backgroundColor: "Aquamarine",
                  color: "black",
                },
              }}
            >
              <Typography fontSize={{ sm: 25, md: 30, lg: 35 }} fontFamily={"Russo One"}>
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
    </>
  );
}

export default Horizontal;
