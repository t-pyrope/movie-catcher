import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { loadMovies } from '../actions/moviesAction';

import styled from 'styled-components';
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import Movie from '../components/Movie';

const Home = () => {
    const dispatch = useDispatch();
    const [trendPeriod, setTrendPeriod] = useState("day");
    useEffect(() => {
        dispatch(loadMovies("all", trendPeriod))
    }, [dispatch, trendPeriod])
    const {trending} = useSelector(state => state.movies);
    
    // handlers
    const setTrendPeriodHandler = (e) => {
        setTrendPeriod(e.target.value);
    }

    const setElementNumberHandler = () => {
        const width = window.window.innerWidth;
        if (width > 1000){
            return 5
        } else if (width > 768) {
            return 3
        } else  if (width > 600) {
            return 2
        } else {
            return 1
        }
    }
    
    return(
        <div>
            <MovieList>
                <div className="title">
                    <h2>Trending</h2>
                    <select value={trendPeriod} onChange={setTrendPeriodHandler}>
                        <option value="day">This day</option>
                        <option value="week">This week</option>
                    </select>
                </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={100}
                        totalSlides={10}
                        visibleSlides={setElementNumberHandler()}
                        step={setElementNumberHandler()}>
                            <Slider>
                            <Movies>
                    {trending.slice(0,10).map((movie, index) => 
                        <Slide index={index} key={movie.id}>
                            <Movie title={movie.title ? movie.title : movie.name} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id} />
                        </Slide>
                    )}
                    </Movies>
                    </Slider>
                    <div className="controls">
                        <ButtonBack className="button-back"><FontAwesomeIcon icon={faAngleLeft} size="2x" /></ButtonBack>
                        <ButtonNext className="button-next"><FontAwesomeIcon icon={faAngleRight} size="2x" /></ButtonNext>
                    </div>
                    </CarouselProvider>
            </MovieList>
        </div>
    )
}

const MovieList = styled.div`
    margin: 1rem 3rem;
    .title {
        padding: 1.5rem 0rem;
        display: flex;
        justify-content: flex-start;

        h2 {
            margin-right: 1rem;
        }

        select {
            line-height: 1.3;
            padding: 0.2rem 1.5rem 0.2rem 0.4rem;
            border: 1px solid #c2c2c2;
            border-radius: 0.2rem;
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
            background-color: #fff;
            background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
            background-repeat: no-repeat;
            background-position: right 10% top 50%, 0 0;
            background-size: 0.6rem auto, 100%;

            &:focus {
                outline: none;
            }
        }
    }

    position: relative;

    .controls {
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: center;;

        button {
            width: 40%;
            border: none;
            padding: 0.5rem 2rem;
            background-color: none;
            transition: all 0.4s ease;

            &:hover {
                background-color: #e2e1e1;
            }

            &:focus {
                outline: none;
            }

            &:active {
                background-color: #d3d3d3;
            }

            &:disabled:hover {
                background-color: white;
            }
        }
    }
`

const Movies = styled.div`
    min-height: 60vh;
    display: flex;

    @media (max-width: 1300px){
        width: 90%;
    }

    @media (max-width: 600px){
        width: 65%;
    }

`

export default Home