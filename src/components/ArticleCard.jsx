import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
});

export default function ArticleCard({ article }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={article.coverImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
          <Avatar src={article.authorImage} />
          <Box ml={2}>
            <Typography variant="subtitle2" component="p">
              {article.authorName}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              {article.publishedAt}
            </Typography>
          </Box>
        </Box>
        <Box>
          <BookmarkBorderIcon />
        </Box>
      </CardActions>
    </Card>
  );
}
