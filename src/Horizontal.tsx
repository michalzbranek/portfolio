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
function Horizontal({container, mobileOpen, drawerWidth, handleDrawerToggle}) {

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

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "black", py: 5 }}
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
                mx: 1,

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
                mx: 1,

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
                mx: 1,

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
                mx: 1,
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
    </>
  );
}

export default Horizontal;
