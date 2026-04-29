import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import blog from "/blog.png";
import fcmalenovice from "/fcmalenovice.png";

const itemData = [
  {
    img: blog,
    title: "Blog",
    href: "https://michalzbranek.github.io/blog/",
  },
  {
    img: fcmalenovice,
    title: "FC Malenovice",
    href: "https://michalzbranek.github.io/fcmalenovice/",
  },
];

function Projects() {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box sx={{ pt: 10, pl: "10%" }}>
      <Typography
        sx={{ fontSize: { xs: "8vw", sm: "3vw" }, fontFamily: "Russo One" }}
        gutterBottom
      >
        PROJEKTY
      </Typography>
      <ImageList
        cols={matches ? 2 : 1}
        sx={{
          pr: "10%",
          gridTemplateColumns: { xs: "1", sm: "3" },
        }}
      >
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <Button
                  target="_blank"
                  href={item.href}
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    ":hover": { backgroundColor: "aquamarine", color: "black" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "2.5vw", sm: "0.8vw" },
                      fontFamily: "Russo One",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Button>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default Projects;
