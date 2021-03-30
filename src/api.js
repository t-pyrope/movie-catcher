const base_url = "https://api.themoviedb.org/3/";


// MEDIA_TYPE: all, movie, tv, person
// TIME_WINDOW: day, week
export const trendingURL = (media_type, time_window) => `${base_url}trending/${media_type}/${time_window}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

// console.log(process.env.REACT_APP_MOVIE_API_KEY);
export const movieDetailURL = (movie_id) => `${base_url}movie/${movie_id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;


// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
export const searchMovieURL = (movie_name) => `${base_url}search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${movie_name}`;

// https://api.themoviedb.org/3/discover/movie?api_key=0c777731b3095dc39de65810fcaa933f&certification.lte=G&sort_by=popularity.desc
export const kidMovieURL = () => `${base_url}discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&certification.lte=G&sort_by=popularity.desc`;

// /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc
export const adultMovieURL = () => `${base_url}`