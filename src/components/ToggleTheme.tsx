import React, { useEffect, useState } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { motion } from 'framer-motion';
import styles from '../styles/components/ToggleTheme.module.scss';
import { useTheme } from 'next-themes';

const Toggle = () => {
    const { theme, setTheme } = useTheme();

    const toggle = () => {
        if (theme === 'light') return setTheme('dark');
        setTheme('light');
    };
    return (
        <motion.div className={styles.toggle} onClick={toggle}>
            <DarkModeIcon />
            <WbSunnyIcon />
            <motion.div className={styles.dot} />
        </motion.div>
    );
};

export default Toggle;
