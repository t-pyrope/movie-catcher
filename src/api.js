const base_url = "https://api.themoviedb.org/3/";


// MEDIA_TYPE: all, movie, tv, person
// TIME_WINDOW: day, week
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
export const trendingURL = (media_type, time_window) => `${base_url}trending/${media_type}/${time_window}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

// console.log(process.env.REACT_APP_MOVIE_API_KEY);