import { FETCH_MOVIES, LOADING_MOVIES } from '../../actions/actionTypes';
import moviesReducer from '../moviesReducer';

describe('movies reducer', () => {
  it('has proper state when loading', () => {
    const initState = {
      trending: [],
      trendingTotal: 0,
      kids: [],
      kidsTotal: 0,
      genreMovies: [],
      adults: [],
      adultsTotal: 0,
      isLoading: false,
      totalPages: 0,
      id: null,
      isFailed: true,
      sortType: 'popularity.desc',
    };

    const action = {
      type: LOADING_MOVIES,
    };

    expect(moviesReducer(initState, action)).toEqual({
      ...initState,
      isLoading: true,
      isFailed: false,
    });
  });
  it('has proper state when fetching movies for main page', () => {
    const initState = {
      trending: [],
      trendingTotal: 0,
      kids: [],
      kidsTotal: 0,
      genreMovies: [],
      adults: [],
      adultsTotal: 0,
      isLoading: true,
      totalPages: 0,
      id: null,
      isFailed: false,
      sortType: 'popularity.desc',
    };

    const trending = [{ name: 'Some trending movie' }];
    const kids = [{ name: 'Some kids movie' }];
    const adults = [{ name: 'Some adults movie' }];

    const action = {
      type: FETCH_MOVIES,
      payload: { trending, kids, adults },
    };

    expect(moviesReducer(initState, action)).toEqual({
      ...initState,
      trending,
      kids,
      adults,
      isLoading: false,
    });
  });
});
