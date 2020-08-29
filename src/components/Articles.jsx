import React from "react";
import {
  Container,
  Card,
  Typography,
  makeStyles,
  Grid,
  Box,
} from "@material-ui/core";
import ArticleCard from "./ArticleCard";
import articlesArray from "../articlesArray";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    paddingTop: theme.spacing(3),
  },
  articlesTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Articles() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.blogContainer}>
      <Typography variant="h4" className={classes.articlesTitle}>
        Articles
      </Typography>
      <Grid container spacing={3}>
        {articlesArray.map((article) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <ArticleCard article={article}></ArticleCard>
            </Grid>
          );
        })}
      </Grid>
      <Box my={4} className={classes.paginationContainer}>
        <Pagination count={10} />
      </Box>
    </Container>
  );
}

export default Articles;
