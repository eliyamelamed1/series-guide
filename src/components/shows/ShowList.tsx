import React, { useEffect, useState } from 'react';
import { ShowType, fetchListOfShows } from '../../queries/fetchListOfShows';

import Error from '../Error';
import LoaderContainer from '../UI/LoaderContainer';
import ShowCard from './ShowCard';
import { animations } from '../../utils/animations';
import { motion } from 'framer-motion';
import { sortByRating } from '../../utils/sortByRating';
import styles from '../../styles/components/shows/ShowList.module.scss';
import { useQuery } from 'react-query';

const ShowsContainer = () => {
    const { data, status } = useQuery(['fetchListOfShows'], fetchListOfShows);
    const [cardsToDisplay, setCardsToDisplay] = useState(30);

    useEffect(() => {
        window.onscroll = function () {
            if (window.innerHeight + window.scrollY < document.body.offsetHeight) return;
            setCardsToDisplay((prevState: number) => prevState + 7);
        };
    }, []);

    if (status === 'loading') return <LoaderContainer />;
    if (status === 'error') return <Error />;
    if (status === 'success') data?.sort(sortByRating);

    return (
        <motion.section className={styles.showList} variants={animations.container} initial='hidden' animate='visible'>
            {status === 'success' &&
                data?.map((show: ShowType, idx: number) => {
                    if (idx > cardsToDisplay) return null;
                    return (
                        <motion.div variants={animations.item} key={show.id}>
                            <ShowCard show={show} />
                        </motion.div>
                    );
                })}
        </motion.section>
    );
};

export default ShowsContainer;
