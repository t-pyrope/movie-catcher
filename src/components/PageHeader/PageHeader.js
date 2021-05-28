import React from 'react';
import PropTypes from 'prop-types';
import './pageHeader.scss';

const PageHeader = ({ title, additionalComponent }) => {
  return (
    <header className="pageHeader">
      <h2 className="pageHeader__title">{title}</h2>
      {additionalComponent ?? ''}
    </header>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  additionalComponent: PropTypes.func,
};

PageHeader.defaultProps = {
  additionalComponent: null,
};

export default PageHeader;
