import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { CssBaseline } from "@mui/material";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { useRef, useState } from "react";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

function App(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToHome = () =>
    // @ts-ignore: Object is possibly 'null'.
    homeRef.current.scrollIntoView({ behavior: "smooth" });

  const scrollToAbout = () =>
    // @ts-ignore: Object is possibly 'null'.
    aboutRef.current.scrollIntoView({ behavior: "smooth" });

  const scrollToProjects = () =>
    // @ts-ignore: Object is possibly 'null'.
    projectsRef.current.scrollIntoView({ behavior: "smooth" });

  const scrollToContact = () =>
    // @ts-ignore: Object is possibly 'null'.
    contactRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "black" }}>
      <div ref={homeRef}></div>
      <CssBaseline />
      <Horizontal
        container={container}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
        handleDrawerToggle={() => handleDrawerToggle()}
        scrollToHome={() => scrollToHome()}
        scrollToAbout={() => scrollToAbout()}
        scrollToProjects={() => scrollToProjects()}
        scrollToContact={() => scrollToContact()}
      />
      <Box sx={{ color: "white" }}>
        <Grid container>
          <Grid xs={2}>
            <Vertical />
          </Grid>
          <Grid xs={10}>
            <Home />
            <div ref={aboutRef}></div>
            <About />
            <div ref={projectsRef}></div>
            <Projects />
            <div ref={contactRef}></div>
            <Contact />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
