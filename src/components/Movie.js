import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import star from '../img/star.png';

const Movie = ({title, poster_path, rating, id}) => {
    
    const getPosterHandler = () => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`;
    }


    return(
        <Link to={`./movie/${id}`}>
        <Card>
            <img src={getPosterHandler()} alt="poster" />
            <div className="desc">
                <h4>{title}</h4>
                <div className="rating">
                <img src={star} alt="rating" /><p>{rating}</p>
                </div>
            </div>
        </Card>
        </Link>
    )

}

const Card = styled.div`
    overflow: hidden;
    border-radius: 0.5rem;
    /* height: 80%; */
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
    }

    .desc {
        position: absolute;
        bottom: 0;
        background-color: rgba(34,34,34,0.6);
        width: 100%;
        height: 25%;
        color: white;
        padding: 1.5rem 1rem;

        h4 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
        }
        .rating {
            display: flex;
            font-size: 1.2rem;
            img {
                width: 1rem;
                height: 1rem;
                margin-right: 0.3rem;
            }
        }
    }
`

export default Movie;