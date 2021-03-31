import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {loadPersonDetail} from '../actions/personDetailAction';
import star from '../img/star.png';
import noPoster from '../img/no-poster.png';
import styled from 'styled-components';
import {ButtonLikeLink} from '../styles';


const ActorDetail = () => {
    const history = useHistory();
    const personId = history.location.pathname.split("/")[2];
    const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(loadPersonDetail(personId))
    }, [dispatch, personId])

    const {person, personMovies, isLoading} = useSelector(state => state.person);

    const getPosterHandler = () => {
        return `https://image.tmdb.org/t/p/w780${person.profile_path}`;
    }

    const addDefaultSrcHandler = (e) => {
        e.target.src = noPoster
    }

    const openHandler = (e) => {
        if(e.target.classList.contains("biography")){
            e.target.classList.toggle("active");
        }
    }

    return(
        <>
        {!isLoading &&
        <Detail>
            <ButtonLikeLink onClick={() => history.goBack()}>Back</ButtonLikeLink>
            <Info>
                <div className="info-desc">
                    <div className="basic-info">
                        <h2>{person.name}</h2>
                        <p className="country">From {person.place_of_birth}</p>
                    </div>
                    <div className="biography" onClick={(e) => openHandler(e)}>
                        <h3>Biography</h3>
                        <p>{person.biography}</p>
                    </div>
                    <div className="">
                        <h3>Filmography</h3>
                        <ul>
                        {personMovies.map(movie => (
                            <Link to={`/movie/${movie.id}`} key={movie.id}>
                                <li>{movie.title}</li>
                            </Link>
                        ))}
                        </ul>
                    </div>
                </div>
                <img src={getPosterHandler()} onError={(e)=>addDefaultSrcHandler(e)} className="poster" alt={person.name} />
            </Info>
        </Detail>
}
        </>
    )
}

const Detail = styled.div`
    width: 90%;
    margin: 2rem auto;
    @media (max-width: 1024px){
        width: 90%;
    }
`;

const Info = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;

    .info-desc {
        margin-bottom: 2rem;
        width: 50%;
        img {
            width: 1rem;
            height: 1rem;
        }
        .basic-info {
            margin-bottom: 2rem;
        }
    }

    .poster {
        margin-right: 3rem;
        border-radius: 0.5rem;
        width: 30%;
        height: 100vh;
        flex: 1;
        object-fit: cover;
    }

    h2, h3 {
        margin-bottom: 0.5rem;
    }

    p {
        margin-bottom: 0.5rem;
    }

    .country {
        color: #636262;
        font-size: 0.9rem;
        
        span {
            margin-right: 1rem;
        }
    }

    .biography {
        max-height: 30vh;
        overflow: hidden;
        transition: all 0.5s ease;
        margin-bottom: 2rem;

        h3 {
            pointer-events: none;
        }

        p {
            pointer-events: none;
        }
    }

    .biography.active {
        max-height: 100%;
    }

    .genre {
        background-color: #eebd61;
        color: white;
        padding: 0.2rem 0.3rem;
        border-radius: 0.2rem;
        margin-right: 0.3rem;
        width: 100%;
        height: 100%;
        line-height: 1.5rem;
    }

    @media (max-width: 1024px){
        display: block;

        .poster {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0;
        }
        .info-desc {
            width: 100%;
        }
    }
`

export default ActorDetail;