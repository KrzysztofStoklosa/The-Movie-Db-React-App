import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import ListItem from "./ListItem";
class List extends Component {
  state = {};
  handleClick = () => {};
  render() {
    return (
      <>
        <Segment>
          <Grid doubling columns={4}>
            {this.props.results && this.props.results.length > 0
              ? this.props.results.map((result) => (
                  <ListItem key={result.id} info={result} />
                ))
              : null}
          </Grid>
        </Segment>
      </>
    );
  }
}

export default List;
