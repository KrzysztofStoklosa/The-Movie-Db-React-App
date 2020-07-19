import React from "react";
import {
  Flag,
  Header,
  Icon,
  Label,
  List,
  Segment,
  Statistic,
} from "semantic-ui-react";
const MovieDetails = (props) => {
  console.log(props);

  return (
    <Segment.Group>
      <Segment>
        <Header as="h2" color="blue">
          <Icon name="film" color="blue" />
          <Header.Content>{props.details.title}</Header.Content>
        </Header>
      </Segment>

      <Segment>
        <Header as="h3">Description</Header>
        {props.details.overview || <i>No description</i>}
      </Segment>
      <Segment>
        <Header as="h3">Productions countries</Header>
        <List horizontal divided>
          {props.details.production_countries ? (
            props.details.production_countries.map((country) => (
              <List.Item key={country.iso_3166_1}>
                <List.Content>
                  <Flag name={country.iso_3166_1.toLowerCase()} />{" "}
                  {country.name}
                </List.Content>
              </List.Item>
            ))
          ) : (
            <i>No info</i>
          )}
        </List>
      </Segment>

      <Segment>
        <Header as="h3">Genres</Header>
        {props.details.genres ? (
          props.details.genres.map((genre) => (
            <Label key={genre.id} color="blue">
              {" "}
              {genre.name}{" "}
            </Label>
          ))
        ) : (
          <i>No info</i>
        )}
      </Segment>

      <Segment>
        <Header as="h3">Production Companies</Header>
        <List horizontal divided>
          {props.details.production_companies ? (
            props.details.production_companies.map((company) => (
              <List.Item key={company.id}>{company.name}</List.Item>
            ))
          ) : (
            <i>No info</i>
          )}
        </List>
      </Segment>
      <Segment.Group horizontal style={{ backgroundColor: "white" }}>
        <Segment textAlign={"center"}>
          <Statistic size="tiny" color="red">
            <Statistic.Value>{props.details.vote_average}</Statistic.Value>
            <Statistic.Label>Rating</Statistic.Label>
          </Statistic>
        </Segment>
        <Segment textAlign={"center"}>
          <Statistic size="tiny" color="orange">
            <Statistic.Value>{props.details.vote_count}</Statistic.Value>
            <Statistic.Label>Votes</Statistic.Label>
          </Statistic>
        </Segment>
        <Segment textAlign={"center"}>
          <Statistic size="tiny" color="yellow">
            <Statistic.Value>
              {Number(props.details.popularity).toFixed(2)}
            </Statistic.Value>
            <Statistic.Label>Popularity</Statistic.Label>
          </Statistic>
        </Segment>
        <Segment textAlign={"center"}>
          <Statistic size="tiny" color="olive">
            <Statistic.Value>{props.details.release_date}</Statistic.Value>
            <Statistic.Label>Date of publication</Statistic.Label>
          </Statistic>
        </Segment>
      </Segment.Group>
      <Segment>
        <Header as="h3">Watch On Internet Movie Database</Header>
        {props.details.imdb_id ? (
          <Label
            as="a"
            color="blue"
            href={"http://www.imdb.com/title/" + props.details.imdb_id}
          >
            IMDb
          </Label>
        ) : (
          <div>No Info</div>
        )}
      </Segment>
    </Segment.Group>
  );
};

export default MovieDetails;
