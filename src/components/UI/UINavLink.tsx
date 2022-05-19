import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles/components/UI/UINavLink.module.scss';

type Children = { children: React.ReactNode };

const UINavBtn: React.FC<Children> = ({ children }) => {
    return (
        <motion.div
            className={styles.button}
            whileHover={{
                scale: 1.2,
            }}
        >
            {children}
        </motion.div>
    );
};

export default UINavBtn;
