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
          className="menu-bars text-green"
          onClick={() => setSidebar(!sideBar)}
        />
      </div>
      )}
      <nav className={sideBar ? 'left-2 top-0 bottom-0 flex flex-col h-screen items-center border-r-2 border-light-grey nav-menu active  bg-slate-50' : 'nav-menu deactive'}>
        <div className="navbar-toggler">
          <AiOutlineClose
            className="menu-close text-green font-bold"
            onClick={() => setSidebar(!sideBar)}
          />
        </div>
        <div className="mt-3 company -rotate-12">
          <h1 className="text-3xl font-extrabold underline tracking-wide">Vrooomm</h1>
        </div>
        <ul className="list-none mt-14">
          {navigationLinks.map((element) => (
            <li
              key={element.type}
              className={classNames([
                'text-dark-grey p-2',
                currentRoute === element && 'text-slate-50 bg-green p-2',
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
