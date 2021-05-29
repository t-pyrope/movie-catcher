import React from 'react';
import PropTypes from 'prop-types';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';
import './carousel.scss';
import Movie from '../Movie/Movie';

const Carousel = ({ movies, title }) => {
  const setElementNumberHandler = () => {
    const width = window.window.innerWidth;
    if (width > 1200) {
      return 5;
    } if (width > 1000) {
      return 4;
    } if (width > 900) {
      return 3;
    }
    return 2;
  };

  const setElementStepHandler = () => {
    const width = window.window.innerWidth;
    if (width > 1200) {
      return 2;
    }
    return 1;
  };

  return (
    <div
      className="carousel"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={19}
        visibleSlides={setElementNumberHandler()}
        step={setElementStepHandler()}
        interval={5000}
        isPlaying
      >
        <div className="carousel__wrapper">
          <Slider className="carousel__slider">
            <motion.div className="carousel__inner">
              {movies.map((movie, index) => (
                <Slide index={index} key={movie.id}>
                  <Movie
                    title={movie.title ? movie.title : movie.name}
                    posterPath={movie.poster_path}
                    rating={movie.vote_average}
                    key={movie.id}
                    id={movie.id}
                  />
                </Slide>
              ))}
            </motion.div>
          </Slider>
          <div className="carousel__controls">
            <ButtonBack className="button-back carousel__button"><FontAwesomeIcon icon={faAngleLeft} size="2x" /></ButtonBack>
            <Link to={`/${title}`} className="carousel__button carousel__button_submit">
              View All
            </Link>
            <ButtonNext className="button-next carousel__button"><FontAwesomeIcon icon={faAngleRight} size="2x" /></ButtonNext>
          </div>
        </div>
      </CarouselProvider>
    </div>
  );
};

Carousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default Carousel;
