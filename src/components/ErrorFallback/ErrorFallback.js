import React from 'react';
import PropTypes from 'prop-types';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.string.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
