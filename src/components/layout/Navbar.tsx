import * as React from 'react';

import NavLink from '../UI/NavLink';
import ToggleTheme from './ToggleTheme';
import styles from '../../styles/components/layout/Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <NavLink>Home</NavLink>
            <ToggleTheme />
        </div>
    );
};
export default Navbar;
