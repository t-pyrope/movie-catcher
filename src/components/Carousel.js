import React from 'react';
import styled from 'styled-components';
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

import Movie from './Movie';

const Carousel = ({movies, title}) => {
    const setElementNumberHandler = () => {
        const width = window.window.innerWidth;
        if (width > 1200){
            return 5
        } else if (width > 1000) {
            return 4
        } else if (width > 900) {
            return 3
        } else {
            return 2
        }
    }

    const setElementStepHandler = () => {
        const width = window.window.innerWidth;
        if (width > 1200){
            return 2
        } else {
            return 1
        }
    }

    return(
        <CarouselStyled variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={10}
            visibleSlides={setElementNumberHandler()}
            step={setElementStepHandler()}
            interval={5000}
            isPlaying={true}>
                <Slider>
                <CarouselMovies>
                    {movies.slice(0,10).map((movie, index) => 
                        <Slide index={index} key={movie.id}>
                            <Movie title={movie.title ? movie.title : movie.name} poster_path={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id} />
                        </Slide>
                    )}
                </CarouselMovies>
            </Slider>
            <div className="controls">
                <ButtonBack className="button-back"><FontAwesomeIcon icon={faAngleLeft} size="2x" /></ButtonBack>
                <Link to={`/${title}`}>
                    <button type="submit" className="submit-btn">View All</button>
                </Link>
                <ButtonNext className="button-next"><FontAwesomeIcon icon={faAngleRight} size="2x" /></ButtonNext>
            </div>
        </CarouselProvider>
        </CarouselStyled>
    )
}

const CarouselStyled = styled(motion.div)`
    .controls {
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: center;;

        button {
            width: 20%;
            border: none;
            padding: 0.5rem 2rem;
            background-color: transparent;
            transition: all 0.4s ease;

            &:hover {
                background-color: #3b3b3b;
            }

            &:focus {
                outline: none;
            }

            &:active {
                /* background-color: #424242; */
            }

            &:disabled:hover {
                background-color: #353535;
            }
        }
        .submit-btn {
            text-transform: uppercase;
            /* color: white; */
            font-weight: bold;
            width: 100%;
            height: 100%;
            flex: 1;
            padding: 1rem 3rem;
        }

        @media (max-width: 768px){
            width: 90%;
        }
    }
`

const CarouselMovies = styled(motion.div)`
    min-height: 50vh;
    display: flex;
    
    @media (max-width: 900px){
        width: 65%;
    }

    @media (max-width: 790px){
        width: 70%;
    }

    @media (max-width: 745px){
        width: 80%;
    }

    @media (max-width: 600px){
        width: 100%;
    }

`

export default Carousel;