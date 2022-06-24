import { LOADING_DETAIL } from '../../actions/actionTypes';
import detailReducer from '../detailReducer';

describe('detail reducer', () => {
  it('processes detail correctly', () => {
    const initState = {
      detail: {},
      isLoading: false,
      isMovieFailed: false,
    };

    const action = {
      type: LOADING_DETAIL,
    };

    expect(detailReducer(initState, action)).toEqual({
      ...initState,
      isLoading: true,
    });
  });
});
