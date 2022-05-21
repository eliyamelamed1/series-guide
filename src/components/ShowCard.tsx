import { ListOfShowsType } from '../utils/endpoints';
import React from 'react';
import styles from '../styles/components/ShowCard.module.scss';

const ShowCard: React.FC<{ show: ListOfShowsType }> = ({ show }) => {
    return (
        <div className={styles.container}>
            <img src={show?.image?.medium} alt='Show' />
            <h2>{show?.name}</h2>
            <h2>{show?.rating?.average || 'No Rating'}</h2>
        </div>
    );
};

export default ShowCard;
