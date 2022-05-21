import 'swiper/css';
import 'swiper/css/pagination';

import { ListOfShowsType, endpoints } from '../utils/endpoints';
import React, { Fragment, useEffect, useRef, useState } from 'react';

import SearchBar from '../components/SearchBar';
import ShowCard from '../components/ShowCard';
import { axiosInstance } from '../utils/axiosInstance';
import styles from '../styles/pages/Home.module.scss';
import { useInfiniteQuery } from 'react-query';

const fetchListOfShows = async (page: string | number) => {
    return await axiosInstance.get(endpoints(page).listOfShows);
};

const Home = () => {
    const [page, setPage] = useState(1);
    const { data, status, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(
        ['fetchListOfShows', page],
        () => fetchListOfShows(page),
        {
            getNextPageParam: (_lastPage, pages) => {
                return pages.length + 1;
            },
        }
    );
    useEffect(() => {
        const onScroll = function () {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                fetchNextPage();
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

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
                                        <button
                                            onClick={() => {
                                                console.log('132123');
                                            }}
                                        >
                                            <ShowCard show={show} key={show.id} />
                                        </button>
                                    );
                                })}
                            </Fragment>
                        );
                    })}
            </section>

            {isFetching && !isFetchingNextPage ? 'Fetching...' : null}
        </div>
    );
};

export default Home;
