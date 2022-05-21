import 'swiper/css';
import 'swiper/css/pagination';

import { ListOfShowsType, endpoints } from '../utils/endpoints';

import React from 'react';
import SearchBar from '../components/SearchBar';
import ShowCard from '../components/ShowCard';
import { axiosInstance } from '../utils/axiosInstance';
import styles from '../styles/pages/Home.module.scss';
import { useQuery } from 'react-query';

const fetchHighestRatedShows = async () => {
    const res = await axiosInstance.get(endpoints().listOfShows);
    return res.data;
};

const Home = () => {
    const { data, status } = useQuery('fetchHighestRatedShows', fetchHighestRatedShows);
    console.log(data);
    return (
        <div className={styles.container}>
            <SearchBar />

            <section className={styles.showList}>
                {status === 'success' &&
                    data.map((show: ListOfShowsType) => {
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
            </section>
        </div>
    );
};

export default Home;
