import React, { Fragment } from 'react';

import Rating from '../components/UI/Rating';
import { fetchShowDetails } from '../queries/fetchShowDetails';
import styles from '../styles/pages/ShowProfile.module.scss';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const removeHtmlTags = (str: string) => {
    return str.replaceAll(/<.*?>/g, '');
};

const ShowProfile = () => {
    const params = useParams();
    const { data: show } = useQuery(['fetchShowDetails'], () => fetchShowDetails(params.showId as string));

    return (
        <div className={styles.showProfile}>
            <section className={styles.mainDetails}>
                <img src={show?.image?.medium || require('../assets/No-Photo-Available.jpg')} alt='Show' />
                <h1 className={styles.title}>{show?.name}</h1>
                <Rating value={show?.rating.average != null ? show?.rating.average / 2 : 0} />
            </section>
            <section className={styles.summaryContainer}>
                <p>{removeHtmlTags(show?.summary || '')}</p>
                <section className={styles.additionalDetails}>
                    <h3>Language: {show?.language}</h3>
                    <h3>Status: {show?.status}</h3>
                    <h3>
                        Genre:
                        {show?.genres.map((genre: string) => {
                            return <Fragment key={genre}> {genre} </Fragment>;
                        })}
                    </h3>
                    <h3>Type: {show?.type}</h3>
                </section>
            </section>
        </div>
    );
};

export default ShowProfile;
