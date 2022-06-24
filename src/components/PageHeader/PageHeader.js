import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import BackButton from '../ui/buttons/BackButton';

import './pageHeader.scss';

const PageHeader = ({ title, additionalComponent }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <header className={`${pathname === '/' && 'pageHeader_main'} pageHeader`}>
      {pathname !== '/' && (
        <BackButton label="Home" onClick={() => history.push('/')} />
      )}

      <h2 className="pageHeader__title">{title}</h2>
      {additionalComponent ?? <div />}
    </header>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  additionalComponent: PropTypes.element,
};

PageHeader.defaultProps = {
  additionalComponent: null,
};

export default PageHeader;
