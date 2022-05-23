import React from 'react';
import { SearchType } from '../queries/searchForShows';
import ShowCard from '../components/shows/ShowCard';
import { motion } from 'framer-motion';
import styles from '../styles/components/shows/ShowList.module.scss';
import { useLocation } from 'react-router-dom';

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

const Search = () => {
    const location = useLocation();
    const data: any = location.state || [];

    if (!data.length) return <div>No results Try Again</div>;

    return (
        <motion.section className={styles.showList} variants={container} initial='hidden' animate='visible'>
            {data.map((obj: SearchType) => {
                const show = obj?.show;
                return (
                    <motion.div key={show.id} variants={singleShow}>
                        <ShowCard show={show} />
                    </motion.div>
                );
            })}
        </motion.section>
    );
};

export default Search;
