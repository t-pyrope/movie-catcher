import React from 'react';
import notFound from '../../assets/images/error-404.png';
import './page404.scss';

const Page404 = () => {
  return (
    <div className="page404">
      <h2>There is nothing here</h2>
      <img src={notFound} alt="page not found" className="page404__img" />
    </div>
  );
};

export default Page404;
