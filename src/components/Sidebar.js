import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../index.css';

const Sidebar = ({ navigationLinks }) => {
  const [currentRoute, setCurrentRoute] = useState('Home');

  return (
    <nav className="fixed left-2 top-0 bottom-0 z-50 w-40 pt-20 flex flex-col h-screen items-center border-r-2 border-light-grey">
      <ul className="list-none">
        {navigationLinks.map((element) => (
          <li
            key={element.type}
            className={classNames([
              'text-dark-grey p-2',
              currentRoute === element && 'text-white bg-green px-2',
            ])}
          >
            <button
              type="submit"
              onClick={() => setCurrentRoute(element)}
            >
              <Link
                to={`/${element}`}
                className="font-bold"
              >
                {element.toUpperCase()}
              </Link>
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
