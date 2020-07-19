import React, { Component } from "react";
import { Container, Header, Segment, Button } from "semantic-ui-react";
import axios from "axios/index";
import config from "../Config";
import List from "./List";
class Home extends Component {
  state = {
    isLoading: true,
    resultsMovies: null,
    resultSeries: null,
    resultsFamily: null,
    resultsDocumentary: null,
    pageMovie: 0,
    totalMoviePages: 1,
    pageSeries: 0,
    totalSeriesPages: 1,
    pageFamily: 0,
    totalFamilyPages: 1,
    pageDocumentary: 0,
    totalDocumentaryPages: 1,
    morePopular: [],
  };

  componentDidMount() {
    this.getPopularMovies();
    this.getPopularSeries();
    this.getFamilyFilms();
    this.getDocumentaryFilms();
  }

  getPopularMovies = () => {
    axios
      .get(config.apiUrl.popularMovies, {
        params: {
          api_key: config.apiKey,
          language: config.language,
        },
      })
      .then((response) => {
        this.setState({
          resultsMovies: response.data.results,
          isLoading: false,
          pageMovies: response.data.page,
          totalMoviePages: response.data.total_pages,
        });
      });
  };
  getPopularSeries = () => {
    axios
      .get(config.apiUrl.popularSeries, {
        params: {
          api_key: config.apiKey,
          language: config.language,
        },
      })
      .then((response) => {
        this.setState({
          resultSeries: response.data.results,
          isLoading: false,
          pageSeries: response.data.page,
          totalSeriesPages: response.data.total_pages,
        });
      });
  };
  getFamilyFilms = () => {
    axios
      .get(config.apiUrl.family, {
        params: {
          api_key: config.apiKey,
          language: config.language,
        },
      })
      .then((response) => {
        this.setState({
          resultsFamily: response.data.results,
          isLoading: false,
          pageFamily: response.data.page,
          totalFamilyPages: response.data.total_pages,
        });
      });
  };

  getDocumentaryFilms = () => {
    axios
      .get(config.apiUrl.documentary, {
        params: {
          api_key: config.apiKey,
          language: config.language,
        },
      })
      .then((response) => {
        this.setState({
          resultsDocumentary: response.data.results,
          isLoading: false,
          pageDocumentary: response.data.page,
          totalDocumentaryPages: response.data.total_pages,
        });
      });
  };

  getMorePopularMovies = () => {
    if (this.state.pageMovie < this.state.totalMoviePages) {
      axios
        .get(config.apiUrl.popularMovies, {
          params: {
            api_key: config.apiKey,
            language: config.language,
            page: this.state.pageMovie + 1,
          },
        })
        .then((response) => {
          let results = this.state.resultsMovies.concat(response.data.results);
          this.setState({
            resultsMovies: results,
            pageMovie: response.data.page,
            totalMoviePages: response.data.total_pages,
          });
        });
    }
  };
  getMorePopularSeries = () => {
    if (this.state.pageSeries < this.state.totalSeriesPages) {
      axios
        .get(config.apiUrl.popularSeries, {
          params: {
            api_key: config.apiKey,
            language: config.language,
            page: this.state.pageSeries + 1,
          },
        })
        .then((response) => {
          let results = this.state.resultSeries.concat(response.data.results);
          this.setState({
            resultSeries: results,
            pageSeries: response.data.page,
            totalSeriesPages: response.data.total_pages,
          });
        });
    }
  };
  getMoreFamilies = () => {
    if (this.state.pageFamily < this.state.totalFamilyPages) {
      axios
        .get(config.apiUrl.family, {
          params: {
            api_key: config.apiKey,
            language: config.language,
            page: this.state.pageFamily + 1,
          },
        })
        .then((response) => {
          let results = this.state.resultsFamily.concat(response.data.results);
          this.setState({
            resultsFamily: results,
            pageFamily: response.data.page,
            totalFamilyPages: response.data.total_pages,
          });
        });
    }
  };
  getMoreDocumentary = () => {
    if (this.state.pageDocumentary < this.state.totalDocumentaryPages) {
      axios
        .get(config.apiUrl.documentary, {
          params: {
            api_key: config.apiKey,
            language: config.language,
            page: this.state.pageSeries + 1,
          },
        })
        .then((response) => {
          let results = this.state.resultsDocumentary.concat(
            response.data.results
          );
          this.setState({
            resultsDocumentary: results,
            pageDocumentary: response.data.page,
            totalDocumentaryPages: response.data.total_pages,
          });
        });
    }
  };

  render() {
    return (
      <>
        <Container fluid>
          <Segment basic loading={this.state.isLoading}>
            <Header as="h1" color="blue">
              Popular movies
            </Header>
            <List results={this.state.resultsMovies} />
          </Segment>
          <div>
            <Button
              className="ui primary button"
              color="blue"
              onClick={this.getMorePopularMovies}
            >
              Get More
            </Button>

            <Button
              className="ui secondary button"
              color="orange"
              onClick={this.getPopularMovies}
            >
              Get Less
            </Button>
          </div>

          <Segment basic loading={this.state.isLoading}>
            <Header as="h1" color="blue">
              Popular series
            </Header>
            <List results={this.state.resultSeries} />
          </Segment>
          <div>
            <Button
              className="ui primary button"
              color="blue"
              onClick={this.getMorePopularSeries}
            >
              Get More
            </Button>

            <Button
              className="ui secondary button"
              color="orange"
              onClick={this.getPopularSeries}
            >
              Get Less
            </Button>
          </div>

          <Segment basic loading={this.state.isLoading}>
            <Header as="h1" color="blue">
              Family
            </Header>
            <List results={this.state.resultsFamily} />
          </Segment>
          <div>
            <Button
              className="ui primary button"
              color="blue"
              onClick={this.getMoreFamilies}
            >
              Get More
            </Button>

            <Button
              className="ui secondary button"
              color="orange"
              onClick={this.getFamilyFilms}
            >
              Get Less
            </Button>
          </div>

          <Segment basic loading={this.state.isLoading}>
            <Header as="h1" color="blue">
              Documentary
            </Header>
            <List results={this.state.resultsDocumentary} />
          </Segment>
          <div>
            <Button
              className="ui primary button"
              color="blue"
              onClick={this.getMoreDocumentary}
            >
              Get More
            </Button>

            <Button
              className="ui secondary button"
              color="orange"
              onClick={this.getDocumentaryFilms}
            >
              Get Less
            </Button>
          </div>
        </Container>
      </>
    );
  }
}

export default Home;
