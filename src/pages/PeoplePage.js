import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {loadPeople} from '../actions/peopleAction';
import Actor from '../components/Actor';
import {Movies, MovieHeader} from '../styles';
import ScrollTop from '../components/ScrollTop';
import PrevNextBtnGroup from '../components/PrevNextBtnGroup';

const PeoplePage = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(loadPeople(page))
    }, [dispatch, page])
    const {people, peoplePages} = useSelector(state => state.people);

    return (
        <>
        {people.length &&
            <div>
            <MovieHeader>
                <h2>People</h2>
            </MovieHeader>
            <PrevNextBtnGroup maxPages={peoplePages} setPage={setPage} page={page} />
            <Movies>
                {people.map((famous) => 
                    <Actor actorName={famous.name} poster_path={famous.profile_path} key={famous.id} id={famous.id} />
                )}
            </Movies>
            <PrevNextBtnGroup maxPages={peoplePages} setPage={setPage} page={page} />
            <ScrollTop />
            </div>
        }    
        </>
    )   
}

export default PeoplePage;