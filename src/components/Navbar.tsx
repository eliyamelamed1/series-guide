import * as React from 'react';

import NavLink from './NavLink';
import ToggleTheme from './ToggleTheme';
import styles from '../styles/components/Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <NavLink>Home</NavLink>
            <ToggleTheme />
        </div>
    );
};
export default Navbar;
