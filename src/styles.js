import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

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
    padding: 1.5rem 0rem;
    h2 {
        margin-right: 1rem;
    }
`;

export const ButtonLikeLink = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    font-size: 1rem;
    margin-bottom: 1rem;
    text-decoration: underline;

    &:focus {
        color: #dddddd;
    }
`;

export const ButtonGroup = styled.div`
    margin: 0.5rem auto;
    display: flex;
    justify-content:center;
    align-items: center;
    width: 60%;

    .disabled {
        color: #2b2b2b;
        background-color: #353535;
        &:hover {
            background-color: #353535;
        }
    }

    @media (max-width: 500px){
        width: 80%;
    }
`;

export const Button = styled.button`
    border: none;
    background-color: #303030;
    transition: all 0.4s ease;
    text-transform: uppercase;
    font-weight: bold;
    width: 15rem;
    height: 3rem;
    margin-bottom: 0.5rem;
    color: #cacaca;
    margin-right: 1rem;

    &:hover {
        background-color: #2c2c2c;
    }

    &:last-child {
        margin-right: 0rem;
    }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 0.2rem solid #d3d3d3;
  border-top-color: #979797;
  border-radius: 50%;
  margin: auto;
  animation: ${spin} 1s linear infinite;
`;
