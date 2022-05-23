import { Image } from '../UI/Image';
import Rating from '../UI/Rating';
import React from 'react';
import { ShowType } from '../../queries/fetchListOfShows';
import { motion } from 'framer-motion';
import { routes } from '../../utils/routes';
import styles from '../../styles/components/shows/ShowCard.module.scss';
import { useNavigate } from 'react-router-dom';

const ShowCard: React.FC<{ show: ShowType }> = ({ show }) => {
    const rating = show?.rating?.average;
    const navigate = useNavigate();

    const Content = () => {
        return (
            <div className={styles.middle}>
                <h1>{show?.name}</h1>
                <Rating value={(rating && rating / 2) || 0} />
            </div>
        );
    };
    return (
        <motion.button
            className={styles.container}
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate(routes(show.id).showProfile, { state: show })}
        >
            <Image image={show?.image?.medium} className={styles.image} />
            <Content />
        </motion.button>
    );
};

export default ShowCard;
