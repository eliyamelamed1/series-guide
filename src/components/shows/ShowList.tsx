import React, { useEffect, useState } from 'react';
import { ShowType, fetchListOfShows } from '../../queries/fetchListOfShows';

import Error from '../Error';
import LoaderContainer from '../UI/LoaderContainer';
import ShowCard from './ShowCard';
import { motion } from 'framer-motion';
import styles from '../../styles/components/shows/ShowList.module.scss';
import { useQuery } from 'react-query';

const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const singleShow = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    },
};
const ShowsContainer = () => {
    const { data, status } = useQuery(['fetchListOfShows'], fetchListOfShows);
    const [cardsToDisplay, setCardsToDisplay] = useState(15);

    useEffect(() => {
        window.onscroll = function () {
            if (window.innerHeight + window.scrollY < document.body.offsetHeight) return;
            setCardsToDisplay((prevState: number) => prevState + 7);
        };
    }, []);

    if (status === 'loading') return <LoaderContainer />;
    if (status === 'error') return <Error />;
    return (
        <motion.section className={styles.showList} variants={container} initial='hidden' animate='visible'>
            {status === 'success' &&
                data?.map((show: ShowType, idx: number) => {
                    if (idx > cardsToDisplay) return null;
                    return (
                        <motion.div variants={singleShow} key={show.id}>
                            <ShowCard show={show} />
                        </motion.div>
                    );
                })}
        </motion.section>
    );
};

export default ShowsContainer;
