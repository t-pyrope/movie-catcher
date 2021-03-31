import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {loadPeople} from '../actions/peopleAction';
import Actor from '../components/Actor';
import {Movies, MovieHeader, ButtonGroup, Button} from '../styles';
import ScrollTop from '../components/ScrollTop';

const PeoplePage = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(loadPeople(page))
    }, [dispatch, page])
    const {people, peoplePages} = useSelector(state => state.people)
    
    const previousPageHandler = () => {
        if (page > 1){setPage(page - 1)}
    }

    const downloadMoreHandler = () => {
        if(page < peoplePages){setPage(page + 1)}
    }

    return (
        <>
        {people.length &&
            <div>
            <MovieHeader>
                <h2>People</h2>
            </MovieHeader>
            <ButtonGroup>
                <Button onClick={previousPageHandler} className={page < 2 ? "disabled" : ""}>Previous</Button>
                <Button onClick={downloadMoreHandler}className={page === peoplePages ? "disabled" : ""}>More</Button>
            </ButtonGroup>
            <Movies>
                {people.map((famous) => 
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