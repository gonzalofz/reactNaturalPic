import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DataContext } from "../../../context/provider";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardPhoto({ value }) {
  const [expanded, setExpanded] = React.useState(false);

  const { photos, setPhotos } = React.useContext(DataContext);

  const handlerFavoritePhoto = (currentValue) => {
    const findIndexPhoto = photos.photos.findIndex(
      (photo) => photo.id === currentValue.id
    );

    const updatePhotosFavorites = { ...photos };

    updatePhotosFavorites.photos[findIndexPhoto] = {
      ...updatePhotosFavorites.photos[findIndexPhoto],
      liked: !currentValue.liked,
    };

    setPhotos(updatePhotosFavorites);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={value.src.original}
        alt={value.alt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {value.alt}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => handlerFavoritePhoto(value)}
        >
          <FavoriteIcon sx={{ color: value.liked ? "#ff0000" : "#808080" }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
