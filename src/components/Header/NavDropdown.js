import React from 'react';
import PropTypes, { string } from 'prop-types';

const NavDropdown = ({ list, onClick, name }) => {
  return (
    <div className="list dropdown">
      { list.map((item) => (
        <p key={item.id} className="list-item">
          <button
            name={name}
            className="mainNav__button mainNav__button_navItem"
            type="button"
            id={item.name}
            onClick={onClick}
          >
            {item.name}
          </button>
        </p>
      ))}
    </div>
  );
};

export default NavDropdown;

NavDropdown.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  name: string.isRequired,
};
