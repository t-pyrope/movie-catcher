import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import noPhoto from '../img/no-photo.png';

const Actor = ({actorName, poster_path, id}) => {

    const addDefaultSrcHandler = (e) => {
        e.target.src = noPhoto
    }


    return(
        <Link to={`/people/${id}`}>
        <Card>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} onError={(e) => {addDefaultSrcHandler(e)}} alt="poster" className="poster" />
            <div className="desc">
                <h4>{actorName}</h4>
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
        height: 25%;
        color: white;
        padding: 1rem 1rem;
        opacity: 0;
        transition: all 0.5s ease;

        h4 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }
    }

    &:hover {
        .desc {
            opacity: 1;
        }
    }
`

export default Actor;