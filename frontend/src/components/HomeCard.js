import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import RecommendIcon from "@mui/icons-material/Recommend";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

export default function HomeCard({ img, src, title }) {
  return (
    <Box>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe" src={src}></Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
        />
        <CardMedia
          component="img"
          height={"20%"}
          image={img}
          alt="filter coffee"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            A cappuccino is an espresso-based coffee drink that originated in
            Italy and is traditionally prepared with steamed milk foam.
            Variations of the drink involve the use of cream instead of milk,
            using non-dairy milk substitutes and flavoring with cinnamon or
            chocolate powder.
          </Typography>
        </CardContent>

        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton aria-label="like">
              <Checkbox
                icon={<ThumbUpOffAltIcon />}
                checkedIcon={<RecommendIcon sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
          </Box>

          <IconButton aria-label="share">
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon sx={{ color: "red" }} />}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
