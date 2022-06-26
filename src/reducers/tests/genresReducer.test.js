import { LOAD_GENRES, LOADING_GENRES } from '../../actions/actionTypes';
import genresReducer from '../genresReducer';

describe('genres reducer', () => {
  it('has proper state when loading genres', () => {
    const initState = {
      genres: [],
      isLoading: false,
    };

    const action = {
      type: LOADING_GENRES,
    };

    expect(genresReducer(initState, action)).toEqual({
      ...initState,
      isLoading: true,
    });
  });
  it('has proper state when genres loaded', () => {
    const initState = {
      genres: [],
      isLoading: true,
    };

    const genres = [
      {
        id: 12,
        name: 'Adventure',
      },
    ];

    const action = {
      type: LOAD_GENRES,
      payload: { genres },
    };

    expect(genresReducer(initState, action)).toEqual({
      ...initState,
      isLoading: false,
      genres,
    });
  });
});
