import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../index.css';

const Sidebar = ({ navigationLinks }) => {
  const [currentRoute, setCurrentRoute] = useState('Home');

  return (
    <nav className="fixed left-0 top-0 bottom-0 z-50 w-40 bg-grey flex flex-col h-screen justify-between items-center py-6 border-2 border-black">
      <ul className="list-none">
        {navigationLinks.map((element) => (
          <li key={element.type}>
            <button
              type="submit"
              className={classNames([
                '',
                currentRoute === element,
              ])}
              onClick={() => setCurrentRoute(element)}
            >
              <Link to={`/${element}`}>{element.toUpperCase()}</Link>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Sidebar.propTypes = {
  navigationLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sidebar;
