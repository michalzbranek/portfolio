import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import blog from "/blog.png";
import fcmalenovice from "/fcmalenovice.png";
import todolist from "/todolist.png";

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
  {
    img: todolist,
    title: "Todolist",
    href: "https://michalzbranek.github.io/todolist/",
  },
];

function Projects() {
  return (
    <Box sx={{ pt: 10, pl: "10%" }}>
      <Typography fontFamily={"Russo One"} variant="h2" gutterBottom>
        PROJEKTY
      </Typography>
      <ImageList sx={{ pr: "10%" }} cols={2}>
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
                  <Typography fontFamily={"Russo One"} variant="h5">
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
