import styled from 'styled-components';
import {motion} from 'framer-motion'

export const Wrapper = styled.div`
    width: 80%;
    margin: 1rem auto;
`;

export const Movies = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-column-gap: 0.5rem;
    grid-row-gap: 1rem;
    margin: auto;
`;

export const MovieHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: flex-start;
`;

export const ButtonLikeLink = styled.button`
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
`;

export const ButtonGroup = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;

    .disabled {
        color: #2b2b2b;
    }
`

export const Button = styled.button`
    border: none;
    background-color: transparent;
    transition: all 0.4s ease;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1rem 3rem;
    margin-bottom: 0.5rem;

    &:hover {
        background-color: #3b3b3b;
    }

    &:focus {
        outline: none;
    }

    &:disabled:hover {
        background-color: #353535;
    }
`