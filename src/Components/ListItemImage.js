import React from "react";
import { Image } from "semantic-ui-react";
const ListItemImage = (props) => {
  const url = "https://image.tmdb.org/t/p/w500";
  const dummy = "https://dummyimage.com/500x730/0fffff/000000&text=No+Image";
  return <Image src={props.poster_path ? url + props.poster_path : dummy} />;
};

export default ListItemImage;
