import React, { Component } from "react";
import axios from "axios";
import config from "../Config";
import MovieImage from "./MovieImage";
import MovieDetails from "./MovieDetails";
import { Container, Grid, Segment } from "semantic-ui-react";
class Movie extends Component {
  state = {
    id: this.props.match.params.id,
    isLoading: true,
    details: [],
  };
  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    const id = this.state.id.slice(1);
    axios
      .get(`${config.apiUrl.movie}/${id}`, {
        params: {
          api_key: config.apiKey,
          language: config.language,
        },
      })
      .then((response) => {
        this.setState({
          details: response.data,
          isLoading: false,
        });
      });
  };
  render() {
    return (
      <Container>
        <Segment basic loading={this.state.isLoading}>
          <Grid columns="equal" padded>
            <Grid.Row>
              <Grid.Column>
                <MovieDetails details={this.state.details} />
              </Grid.Column>
              <Grid.Column
                mobile={16}
                tablet={5}
                computer={5}
                largeScreen={5}
                widescreen={4}
              >
                <MovieImage poster_path={this.state.details.poster_path} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default Movie;
