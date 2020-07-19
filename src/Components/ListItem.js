import React from "react";
import { Card, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ListItemImage from "./ListItemImage";

const ListItem = (props) => {
  return (
    <Link to={`/movie/:${props.info.id}`}>
      <Grid.Column>
        <Card color="blue">
          <ListItemImage poster_path={props.info.poster_path} />
        </Card>
      </Grid.Column>
    </Link>
  );
};

export default ListItem;
