import 'swiper/css';
import 'swiper/css/pagination';

import { ListOfShowsType, endpoints } from '../utils/endpoints';
import React, { Fragment, useEffect, useState } from 'react';

import SearchBar from '../components/SearchBar';
import ShowCard from '../components/ShowCard';
import { axiosInstance } from '../utils/axiosInstance';
import { onBottomScreenScroll } from '../utils/onBottomScreenScroll';
import styles from '../styles/pages/Home.module.scss';
import { useInfiniteQuery } from 'react-query';

const fetchListOfShows = async ({ pageParam = 1 }) => {
    return await axiosInstance.get(endpoints(pageParam).listOfShows);
};

const Home = () => {
    const { data, status, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(
        ['fetchListOfShows'],
        fetchListOfShows,
        {
            getNextPageParam: (_lastPage, pages) => {
                return pages.length + 1;
            },
        }
    );

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
            <button onClick={() => fetchNextPage}> Load more </button>
            {isFetching && !isFetchingNextPage ? 'Fetching...' : null}
        </div>
    );
};

export default Home;
