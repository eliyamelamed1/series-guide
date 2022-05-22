import 'swiper/css';
import 'swiper/css/pagination';

import React, { Fragment, useEffect } from 'react';

import { ListOfShowsType } from '../utils/endpoints';
import SearchBar from '../components/SearchBar';
import ShowCard from '../components/ShowCard';
import { fetchListOfShows } from '../queries/fetchListOfShows';
import { onBottomScreenScroll } from '../utils/onBottomScreenScroll';
import styles from '../styles/pages/Home.module.scss';
import { useInfiniteQuery } from 'react-query';

const Home = () => {
    const { data, status, hasNextPage, fetchNextPage } = useInfiniteQuery(['fetchListOfShows'], fetchListOfShows, {
        getNextPageParam: (_lastPage, pages) => {
            return pages.length + 1;
        },
    });

    useEffect(() => {
        onBottomScreenScroll({ fetchNextPage, hasNextPage });
    }, [fetchNextPage, hasNextPage]);

    return (
        <div className={styles.container}>
            <SearchBar />

            <section className={styles.showList}>
                {status === 'success' &&
                    data?.pages.map((group, idx) => {
                        return (
                            <Fragment key={idx}>
                                {group.data.map((show: ListOfShowsType) => {
                                    return (
                                        <button onClick={() => {}} key={show.id}>
                                            <ShowCard show={show} />
                                        </button>
                                    );
                                })}
                            </Fragment>
                        );
                    })}
            </section>
        </div>
    );
};

export default Home;
