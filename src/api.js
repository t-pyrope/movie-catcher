const base_url = "https://api.themoviedb.org/3/";


// MEDIA_TYPE: all, movie, tv, person
// TIME_WINDOW: day, week
export const trendingURL = (media_type, time_window) => `${base_url}trending/${media_type}/${time_window}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

// console.log(process.env.REACT_APP_MOVIE_API_KEY);
export const movieDetailURL = (movie_id) => `${base_url}movie/${movie_id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;