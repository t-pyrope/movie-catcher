import React from 'react';
import {ButtonGroup, Button} from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';


const PrevNextBtnGroup = ({maxPages, setPage, page}) => {
    const previousPageHandler = () => {
        if (page > 1){setPage(page - 1)}
    }

    const downloadMoreHandler = () => {
        if(page < maxPages){setPage(page + 1)}
    }

    return(
        <ButtonGroup>
            <Button onClick={previousPageHandler} className={page < 2 ? "disabled" : ""}><FontAwesomeIcon icon={faAngleLeft} size="2x" /></Button>
            <Button onClick={downloadMoreHandler} className={page === maxPages ? "disabled" : ""}><FontAwesomeIcon icon={faAngleRight} size="2x" /></Button>
        </ButtonGroup>
    )
}

export default PrevNextBtnGroup;