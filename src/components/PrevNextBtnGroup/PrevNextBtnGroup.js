import React from 'react';
import '../Container/container.scss';
import PropTypes from 'prop-types';
import ButtonPrevNext from '../ui/buttons/ButtonPrevNext';

const PrevNextBtnGroup = ({ maxPages, setPage, page }) => {
  const previousPageHandler = () => {
    if (page > 1) { setPage(page - 1); }
  };

  const downloadMoreHandler = () => {
    if (page < maxPages) { setPage(page + 1); }
  };

  return (
    <div className="container_buttonGroup">
      <ButtonPrevNext callback={previousPageHandler} direction="previous" page={page} />
      <ButtonPrevNext callback={downloadMoreHandler} direction="next" page={page} maxPages={maxPages} />
    </div>
  );
};

PrevNextBtnGroup.propTypes = {
  maxPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default PrevNextBtnGroup;
