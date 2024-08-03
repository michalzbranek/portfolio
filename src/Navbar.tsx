import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { CssBaseline } from "@mui/material";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { useState } from "react";

const drawerWidth = 240;

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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "black" }}>
      <CssBaseline />
      <Horizontal
        container={container}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
        handleDrawerToggle={() => handleDrawerToggle()}
      />
      <Box sx={{ color: "white" }}>
        <Grid container>
          <Grid xs={2}>
            <Vertical />
          </Grid>
          <Grid xs={10}>
            <Home />
            <About />
            <Projects />
            <Contact />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default Navbar;
