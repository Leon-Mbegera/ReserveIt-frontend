import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../index.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import '../App.css';

const Sidebar = ({ navigationLinks }) => {
  const [currentRoute, setCurrentRoute] = useState('Home');
  const [sideBar, setSidebar] = useState(false);

  return (
    <>
      {!sideBar && (
      <div className="navbar">
        <FaBars
          className="menu-bars"
          onClick={() => setSidebar(!sideBar)}
        />
      </div>
      )}
      <nav className={sideBar ? 'left-2 top-0 bottom-0 w-40 flex flex-col h-screen items-center border-r-2 border-light-grey nav-menu active' : 'nav-menu deactive'}>
        <div className="navbar-toggler">
          <AiOutlineClose
            className="menu-close"
            onClick={() => setSidebar(!sideBar)}
          />
        </div>
        <ul className="list-none pt-20">
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
    </>
  );
};

Sidebar.propTypes = {
  navigationLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sidebar;
