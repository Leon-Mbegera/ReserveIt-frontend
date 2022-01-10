import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../css/Style.css';

const Sidebar = ({ navigationLinks }) => {
  const [currentRoute, setCurrentRoute] = useState('Home');

  return (
    <nav>
      <ul>
        {navigationLinks.map((element) => (
          <li key={element.type}>
            <button
              type="submit"
              className={classNames([
                styles.navItem,
                currentRoute === element && styles.navItemActive,
                'group',
              ])}
              onClick={() => setCurrentRoute(element)}
            >
              <Link to={`/${element}`}>{element}</Link>
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
