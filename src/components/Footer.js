import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyled>
      API from TMDB
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Footer;
