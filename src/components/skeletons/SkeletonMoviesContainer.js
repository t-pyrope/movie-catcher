import React from 'react';
import './skeleton.scss';

const SkeletonMoviesContainer = () => {
  const skeletonElement = Array.from(
    { length: 20 },
    (_, i) => <div key={i} className="skeleton__card" />,
  );

  return (
    <>
      {skeletonElement}
    </>
  );
};

export default SkeletonMoviesContainer;
