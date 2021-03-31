import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {loadPeople} from '../actions/peopleAction';
import Actor from '../components/Actor';
import {Movies, MovieHeader} from '../styles';
import ScrollTop from '../components/ScrollTop';

const PeoplePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPeople())
    }, [dispatch])
    const {people} = useSelector(state => state.people)
    // console.log(people)
    // const Movie = ({title, poster_path, rating, id})
    return (
        <>
        {people.length &&
            <div>
            <MovieHeader>
                <h2>People</h2>
            </MovieHeader>
            <Movies>
                {people.slice(0,10).map((famous) => 
                    <Actor actorName={famous.name} poster_path={famous.profile_path} key={famous.id} id={famous.id} />
                )}
            </Movies>
            <ScrollTop />
            </div>
        }    
        </>
    )   
}

export default PeoplePage;