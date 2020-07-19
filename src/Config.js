const config = {
  apiUrl: {
    search: `https://api.themoviedb.org/3/search/movie?`,
    movie: `https://api.themoviedb.org/3/movie`,
    popularMovies: `https://api.themoviedb.org/3/movie/popular`,
    popularSeries: `https://api.themoviedb.org/3/tv/popular`,
    family: `https://api.themoviedb.org/3/discover/movie?&with_genres=10751`,
    documentary: `https://api.themoviedb.org/3/discover/movie?&with_genres=99`,
  },
  apiKey: "3cc67be6b2c6fe7624a4c364b9a76118",
  language: "en",
};

export default config;
