import React, { useEffect } from 'react';
import {useLocation, Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
import styled from 'styled-components';
import star from '../img/star.png';
import noPoster from '../img/no-poster.png';


const MovieDetail = () => {
    const location = useLocation();
    const history = useHistory();
    const arr = location.pathname.split("/");
    const id = arr[arr.length - 1];

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(loadDetail(id))
    }, [dispatch, id])

    const {detail, isLoading} = useSelector(state => state.detail);

    const getPosterHandler = () => {
        return `https://image.tmdb.org/t/p/w780${detail.poster_path}`;
    }

    const addDefaultSrcHandler = (e) => {
        e.target.src = noPoster
    }

    return(
        <>
        {!isLoading &&
        <Detail>
            <ButtonLikeLink onClick={() => history.goBack()}>Back</ButtonLikeLink>
            <Info>
                <div className="info-desc">
                    <div className="basic-info">
                        <h2>{detail.title}</h2>
                        <p className="country">{detail.production_countries.map((country) => (
                        <span key={country.name}>{country.name}</span>
                            ))}</p>
                        <p>{detail.genres.map(genre => 
                            <Link to={`/genres/${genre.id}`} key={genre.id}>
                                <span className="genre">{genre.name}</span>
                            </Link>
                            )}</p>
                        <p><img src={star} alt="rating" /> {detail.vote_average}</p>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>{detail.overview}</p>
                    </div>
                </div>
                <img src={getPosterHandler()} onError={(e)=>addDefaultSrcHandler(e)} className="poster" alt={detail.title} />
            </Info>
        </Detail>
}
        </>
    )
}

const Detail = styled.div`
    width: 70%;
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
        height: 70vh;
        flex: 1;
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
    }
`

const ButtonLikeLink = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    font-size: 1rem;
    margin-bottom: 1rem;
    text-decoration: underline;

    &:focus {
        outline: none;
        color: #dddddd;
    }
`

export default MovieDetail;