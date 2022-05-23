import React, { Fragment } from 'react';

import { ShowType } from '../../../queries/fetchListOfShows';
import styles from '../../../styles/pages/ShowProfile.module.scss';

const removeHtmlTags = (str: string) => {
    return str.replaceAll(/<.*?>/g, '');
};

const SummarySection: React.FC<{ show: ShowType }> = ({ show }) => {
    return (
        <section className={styles.summaryContainer}>
            <p>{removeHtmlTags(show?.summary || '')}</p>
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
    );
};
export default SummarySection;
