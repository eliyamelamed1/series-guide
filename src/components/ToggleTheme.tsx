import React, { useEffect, useState } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { motion } from 'framer-motion';
import styles from '../styles/components/ToggleTheme.module.scss';
import { useTheme } from 'next-themes';

const Toggle = () => {
    const { theme, setTheme } = useTheme();
    const [slide, setSlide] = useState('0%');

    useEffect(() => {
        if (theme === 'light') return setSlide('0%');
        setSlide('100%');
    }, [theme]);

    const toggle = () => {
        if (theme === 'light') return setTheme('dark');
        setTheme('light');
    };
    return (
        <motion.div
            className={styles.toggle}
            onClick={toggle}
            whileHover={{
                scale: 1.2,
            }}
        >
            <DarkModeIcon />
            <WbSunnyIcon />
            <motion.div className={styles.dot} animate={{ x: slide }}></motion.div>
        </motion.div>
    );
};

export default Toggle;
