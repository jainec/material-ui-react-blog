import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url" +
      "('https://images.unsplash.com/photo-1585055462747-0bbcbd0e2167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')",
    height: "400px",
    background: "red",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
      fontSize: "3rem",
    },
  },
}));

function Jumbotron() {
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Box>React Blog</Box>
    </Box>
  );
}

export default Jumbotron;
