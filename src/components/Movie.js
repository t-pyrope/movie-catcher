import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import noPoster from '../img/no-poster.png';

import star from '../img/star.png';

const Movie = ({title, poster_path, rating, id}) => {

    const addDefaultSrcHandler = (e) => {
        e.target.src = noPoster
    }

    const titleHandler = () => {
        const titleArr = title.split(" ");
        let newTitleArr;
        if (titleArr.length > 4){
            newTitleArr = titleArr.slice(0,4)
            newTitleArr.push("...")
        } else {
            newTitleArr = [...titleArr];
        }
        const newTitle = newTitleArr.join(" ");
        let secondCheckTitleArr;
        let secondCheckTitle;
        if (newTitle.length > 20) {
            secondCheckTitleArr = newTitle.split(" ").slice(0,3);
            secondCheckTitleArr.push("...");
            secondCheckTitle = secondCheckTitleArr.join(" ")
        }

        let thirdCheckTitleArr;
        let thirdCheckTitle;
        if (secondCheckTitleArr && secondCheckTitle.length > 20){
            thirdCheckTitleArr = secondCheckTitle.split(" ").slice(0,2);
            thirdCheckTitleArr.push("...");
            thirdCheckTitle = thirdCheckTitleArr.join(" ");
        }

        return thirdCheckTitle || secondCheckTitle || newTitle;
        
    }


    return(
        <Link to={`/movie/${id}`}>
        <Card>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} onError={(e) => {addDefaultSrcHandler(e)}} alt="poster" className="poster" />
            <div className="desc">
                <h4>{titleHandler()}</h4>
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
    position: relative;
    margin-right: 1rem;
    width: auto;
    img {
        object-position: center;
        object-fit: cover;
        display: block;
    }

    .poster {
        width: 100%;
        height: 100%;
        background-color: grey;
    }

    .desc {
        position: absolute;
        bottom: 0;
        background-color: rgba(34,34,34,0.6);
        width: 100%;
        height: 37%;
        color: white;
        padding: 1rem 1rem;
        opacity: 0;
        transition: all 0.5s ease;

        h4 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }
        .rating {
            display: flex;
            font-size: 0.8rem;
            img {
                width: 1rem;
                height: 1rem;
                margin-right: 0.3rem;
            }
        }
    }

    &:hover {
        .desc {
            opacity: 1;
        }
    }
`

export default Movie;