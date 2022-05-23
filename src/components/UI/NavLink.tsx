import { NavLink } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/components/UI/NavLink.module.scss';

type Children = { children: React.ReactNode };

const UINavBtn: React.FC<Children> = ({ children }) => {
    return (
        <motion.div whileHover={{ scale: 1.2 }} className={styles.navLink}>
            <NavLink to='/'>{children}</NavLink>
        </motion.div>
    );
};

export default UINavBtn;
