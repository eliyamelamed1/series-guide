import React, { ReactNode } from 'react';

import { motion } from 'framer-motion';
import styles from '../styles/components/Button.module.scss';

interface PropsType {
    children: ReactNode;
    onClick?: () => {};
}

const Button: React.FC<PropsType> = ({ children, onClick }) => {
    return (
        <motion.button
            whileHover={{
                scale: 1.2,
            }}
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default Button;
