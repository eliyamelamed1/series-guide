import React, { useEffect, useMemo, useState } from 'react';
import { SearchType, searchForShows } from '../queries/searchForShows';
import { useLocation, useParams } from 'react-router-dom';

import Error from '../components/Error';
import LoaderContainer from '../components/UI/LoaderContainer';
import ShowCard from '../components/shows/ShowCard';
import { motion } from 'framer-motion';
import styles from '../styles/components/shows/ShowList.module.scss';
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

const Search = () => {
    const location = useLocation();
    const data = useMemo(() => location.state || [], [location.state]) as SearchType[] | [];
    const [shouldFetch, setShouldFetch] = useState(false);
    const [mutualData, setMutualData] = useState([]);

    useEffect(() => {
        if (!data.length) setShouldFetch(true);
        else setShouldFetch(false);
    }, [data]);

    const params = useParams();
    const { data: fetchedData, status } = useQuery(['searchForShows'], () => searchForShows(params.q as string), {
        enabled: shouldFetch,
    });

    useEffect(() => {
        if (shouldFetch && status === 'success') setMutualData(fetchedData as any);
        else setMutualData(data as any);
    }, [status, shouldFetch, fetchedData, data]);

    if (status === 'loading') return <LoaderContainer />;
    if (status === 'error') return <Error />;

    return (
        <motion.section className={styles.showList} variants={container} initial='hidden' animate='visible'>
            {mutualData.map((obj: SearchType) => {
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
