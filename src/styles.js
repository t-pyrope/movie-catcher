import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 80%;
    margin: 1rem auto;
`;

export const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    margin: auto;
`;