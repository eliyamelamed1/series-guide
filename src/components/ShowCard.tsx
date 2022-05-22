import { ListOfShowsType } from '../utils/endpoints';
import Rating from '@mui/material/Rating';
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/components/ShowCard.module.scss';

const ShowCard: React.FC<{ show: ListOfShowsType }> = ({ show }) => {
    const rating = show?.rating?.average;
    return (
        <motion.div className={styles.container} whileHover={{ scale: 1.1 }}>
            <img src={show?.image?.medium} alt='Show' className={styles.image} />
            <div className={styles.middle}>
                <h1>{show?.name}</h1>
                <Rating value={(rating && rating / 2) || null} readOnly className={styles.rating} precision={0.5} />
            </div>
        </motion.div>
    );
};

export default ShowCard;
