const baseUrl = 'https://api.themoviedb.org/3/';

// MEDIA_TYPE: all, movie, tv, person
// TIME_WINDOW: day, week
export const trendingURL = (mediaType, timeWindow, sortType, page) => `${baseUrl}trending/${mediaType}/${timeWindow}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&sort_by=${sortType}&page=${page}`;
export const kidMovieURL = (sortType, page) => `${baseUrl}discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=10751&sort_by=${sortType}&vote_count.gte=500&page=${page}`;
export const adultMovieURL = (sortType, page) => `${baseUrl}discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&certification_country=US&certification=R&sort_by=${sortType}&vote_count.gte=500&page=${page}`;

// OTHER MOVIES AND PEOPLE PAGES
export const genreMoviesURL = (genreId, page, sortType) => `${baseUrl}discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=${genreId}&sort_by=${sortType}&vote_count.gte=500&page=${page}`;
export const yearMoviesURL = (year, page, sortType) => `${baseUrl}discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&primary_release_year=${year}&sort_by=${sortType}&vote_count.gte=6000&page=${page}`;
export const peopleURL = (page) => `${baseUrl}person/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}`;

// DETAILS MOVIE AND PERSON
export const movieDetailURL = (movieId) => `${baseUrl}movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;
export const personDetailURL = (personId) => `${baseUrl}person/${personId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;
export const personMoviesURL = (personId) => `${baseUrl}discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_cast=${personId}&sort_by=vote_average.desc&language=en-US`;

// SEARCH
export const searchMovieURL = (movieName, page) => `${baseUrl}search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${movieName}&page=${page}`;
export const searchPersonURL = (personName, page) => `${baseUrl}search/person?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${personName}&page=${page}`;

// LIST OF GENRES
export const genresListURL = () => `${baseUrl}genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;

export const liveSearchURL = (value) => `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${value}`;
