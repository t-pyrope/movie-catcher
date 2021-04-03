const base_url = "https://api.themoviedb.org/3/";


// MEDIA_TYPE: all, movie, tv, person
// TIME_WINDOW: day, week
export const trendingURL = (media_type, time_window, sort_type, page) => `${base_url}trending/${media_type}/${time_window}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&sort_by=${sort_type}&page=${page}`;
export const kidMovieURL = (sort_type, page) => `${base_url}discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=10751&sort_by=${sort_type}&vote_count.gte=500&page=${page}`;
export const adultMovieURL = (sort_type, page) => `${base_url}discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&certification_country=US&certification=R&sort_by=${sort_type}&vote_count.gte=500&page=${page}`;


// OTHER MOVIES AND PEOPLE PAGES
export const genreMoviesURL = (genre_id, page, sort_type) => `${base_url}discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_genres=${genre_id}&sort_by=${sort_type}&vote_count.gte=500&page=${page}`;
export const yearMoviesURL = (year, page, sort_type) => `${base_url}discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&primary_release_year=${year}&sort_by=${sort_type}&vote_count.gte=6000&page=${page}`;
export const peopleURL = (page) => `${base_url}person/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}`;


//DETAILS MOVIE AND PERSON
export const movieDetailURL = (movie_id) => `${base_url}movie/${movie_id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;
export const personDetailURL = (person_id) => `${base_url}person/${person_id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
export const personMoviesURL = (person_id) => `${base_url}discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&with_cast=${person_id}&sort_by=vote_average.desc&language=en-US`


// SEARCH
export const searchMovieURL = (movie_name, page) => `${base_url}search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${movie_name}&page=${page}`;
export const searchPersonURL = (person_name, page) => `${base_url}search/person?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${person_name}&page=${page}`;


// LIST OF GENRES
export const genresListURL = () => `${base_url}genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
