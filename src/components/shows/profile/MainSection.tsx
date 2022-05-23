import Rating from '../../UI/Rating';
import React from 'react';
import { ShowType } from '../../../queries/fetchListOfShows';
import styles from '../../../styles/pages/ShowProfile.module.scss';

const MainSection: React.FC<{ show: ShowType }> = ({ show }) => {
    const image = show?.image?.medium || require('../../../assets/No-Photo-Available.jpg');
    return (
        <section className={styles.mainDetails}>
            <img src={image} alt='Show' />
            <h1 className={styles.title}>{show?.name}</h1>
            <Rating value={show?.rating.average != null ? show?.rating.average / 2 : 0} />
        </section>
    );
};

export default MainSection;
