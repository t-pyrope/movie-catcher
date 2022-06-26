import {
  FETCH_DETAIL,
  LOAD_MOVIE_FAILED,
  LOADING_DETAIL,
} from '../../actions/actionTypes';
import detailReducer from '../detailReducer';

describe('detail reducer', () => {
  it('has proper state when loading movie', () => {
    const initState = {
      detail: { id: '123' },
      isLoading: false,
      isMovieFailed: true,
    };

    const action = {
      type: LOADING_DETAIL,
    };

    expect(detailReducer(initState, action)).toEqual({
      ...initState,
      isLoading: true,
      detail: null,
      isMovieFailed: false,
    });
  });
  it('has proper state when movie loaded', () => {
    const initState = {
      detail: null,
      isLoading: true,
      isMovieFailed: false,
    };

    const detail = {
      adult: false,
      backdrop_path: '/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg',
      belongs_to_collection: {
        id: 720879,
        name: 'Sonic the Hedgehog Collection',
        poster_path: '/rEC1pkQ1UbX7USRkVIrt2Nk7hlC.jpg',
        backdrop_path: '/8jfHKno4tRZ621Uzw4heEaJPgRM.jpg',
      },
      budget: 110000000,
      genres: [
        { id: 28, name: 'Action' },
        { id: 12, name: 'Adventure' },
        { id: 10751, name: 'Family' },
        { id: 35, name: 'Comedy' },
      ],
      homepage: 'https://www.sonicthehedgehogmovie.com',
      id: 675353,
      imdb_id: 'tt12412888',
      original_language: 'en',
      original_title: 'Sonic the Hedgehog 2',
      overview:
        'After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.',
      popularity: 2678.769,
      poster_path: '/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
      production_companies: [
        {
          id: 333,
          logo_path: '/5xUJfzPZ8jWJUDzYtIeuPO4qPIa.png',
          name: 'Original Film',
          origin_country: 'US',
        },
        {
          id: 10644,
          logo_path: '/ocLZIdYJBppuCt1rhYEb2jbpt5F.png',
          name: 'Blur Studio',
          origin_country: 'US',
        },
        {
          id: 77884,
          logo_path: '/dP2lxVNctD5Cried0IWVqgrO2o9.png',
          name: 'Marza Animation Planet',
          origin_country: 'JP',
        },
        {
          id: 4,
          logo_path: '/gz66EfNoYPqHTYI4q9UEN4CbHRc.png',
          name: 'Paramount',
          origin_country: 'US',
        },
      ],
      production_countries: [
        { iso_3166_1: 'JP', name: 'Japan' },
        { iso_3166_1: 'US', name: 'United States of America' },
      ],
      release_date: '2022-03-30',
      revenue: 393000000,
      runtime: 122,
      spoken_languages: [
        { english_name: 'English', iso_639_1: 'en', name: 'English' },
      ],
      status: 'Released',
      tagline: 'Welcome to the next level.',
      title: 'Sonic the Hedgehog 2',
      video: false,
      vote_average: 7.7,
      vote_count: 2160,
    };

    const action = {
      type: FETCH_DETAIL,
      payload: { detail },
    };

    expect(detailReducer(initState, action)).toEqual({
      ...initState,
      isLoading: false,
      detail,
      isMovieFailed: false,
    });
  });
  it('has proper state when loading movie error', () => {
    const initState = {
      detail: null,
      isLoading: true,
      isMovieFailed: false,
    };

    const action = {
      type: LOAD_MOVIE_FAILED,
    };

    expect(detailReducer(initState, action)).toEqual({
      ...initState,
      isLoading: false,
      isMovieFailed: true,
    });
  });
});
