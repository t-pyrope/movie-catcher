import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="mainFooter">
      API from
      {' '}
      <a
        title="The Movie Database"
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        TMDB
      </a>
    </footer>
  );
};

export default Footer;
