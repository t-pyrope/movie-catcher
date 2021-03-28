import React from 'react';
import styled from 'styled-components';

const Movie = ({title, poster_path, rating}) => {
    const getPosterHandler = () => {
        return `https://image.tmdb.org/t/p/w300${poster_path}`;
    }

    return(
        <div>
            <img src={getPosterHandler()} alt="poster" />
            <p>{title}</p>
            <p>{rating}</p>
        </div>
    )

}

export default Movie;