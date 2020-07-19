import React from "react";
import { Image } from "semantic-ui-react";
const MovieImage = (props) => {
  const url = "https://image.tmdb.org/t/p/w500";
  const dummy = "https://dummyimage.com/500x730/0fffff/000000&text=No+Image";
  console.log(props);
  return (
    <Image
      centered
      fluid
      src={props.poster_path ? url + props.poster_path : dummy}
    />
  );
};

export default MovieImage;
