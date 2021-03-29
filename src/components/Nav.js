import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    return(
        <NavStyled>
            <h1><Link to="/">Movie catcher</Link></h1>
        </NavStyled>
    )
}

const NavStyled = styled.nav`

`

export default Nav;