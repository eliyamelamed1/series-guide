import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import styles from '../../styles/components/layout/ToggleTheme.module.scss';
import { useTheme } from 'next-themes';

const Toggle = () => {
    const { theme, setTheme } = useTheme();

    const toggle = () => {
        if (theme === 'light') return setTheme('dark');
        setTheme('light');
    };

    if (theme === 'light') return <DarkModeIcon onClick={toggle} className={styles.themeIcon} />;

    return <WbSunnyIcon onClick={toggle} className={styles.themeIcon} />;
};

export default Toggle;
