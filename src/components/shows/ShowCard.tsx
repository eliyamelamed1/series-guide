import Rating from '@mui/material/Rating';
import React from 'react';
import { ShowsType } from '../../utils/endpoints';
import { motion } from 'framer-motion';
import { routes } from '../../utils/routes';
import styles from '../../styles/components/shows/ShowCard.module.scss';
import { useNavigate } from 'react-router-dom';

const ShowCard: React.FC<{ show: ShowsType }> = ({ show }) => {
    const rating = show?.rating?.average;
    const navigate = useNavigate();

    return (
        <motion.button
            className={styles.container}
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate(routes(show.id).showProfile)}
        >
            <img
                src={show?.image?.medium || require('../../assets/No-Photo-Available.jpg')}
                alt='Show'
                className={styles.image}
            />
            <div className={styles.middle}>
                <h1>{show?.name}</h1>
                <Rating value={(rating && rating / 2) || null} readOnly className={styles.rating} precision={0.5} />
            </div>
        </motion.button>
    );
};

export default ShowCard;
