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
// Named barrel import required under vite 8 (rolldown) — per-path default imports break CJS interop
import { Menu as MenuIcon } from "@mui/icons-material";

interface HorizontalProps {
  container?: () => HTMLElement;
  mobileOpen: boolean;
  drawerWidth: number;
  handleDrawerToggle: () => void;
  scrollToHome: () => void;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

function Horizontal({
  container,
  mobileOpen,
  drawerWidth,
  handleDrawerToggle,
  scrollToHome,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
}: HorizontalProps) {
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
              <Typography sx={{ fontSize: { xs: "5vw" }, fontFamily: "Russo One" }}>DOMŮ</Typography>
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
              <Typography sx={{ fontSize: { xs: "5vw" }, fontFamily: "Russo One" }}>O MNĚ</Typography>
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
              <Typography sx={{ fontSize: { xs: "5vw" }, fontFamily: "Russo One" }}>PROJEKTY</Typography>
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
              <Typography sx={{ fontSize: { xs: "5vw" }, fontFamily: "Russo One" }}>KONTAKT</Typography>
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
              <Typography sx={{ fontSize: { sm: 18, md: 22, lg: 25 }, fontFamily: "Russo One" }}>
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
              <Typography sx={{ fontSize: { sm: 18, md: 22, lg: 25 }, fontFamily: "Russo One" }}>
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
              <Typography sx={{ fontSize: { sm: 18, md: 22, lg: 25 }, fontFamily: "Russo One" }}>
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
              <Typography sx={{ fontSize: { sm: 18, md: 22, lg: 25 }, fontFamily: "Russo One" }}>
                KONTAKT
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
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
          slotProps={{
            paper: {
              sx: {
                backgroundColor: "black",
                color: "red",
              },
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default Horizontal;
