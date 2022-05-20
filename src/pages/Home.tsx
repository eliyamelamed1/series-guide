import { PopularShowsType, endpoints } from '../utils/endpoints';

import MoviesCard from '../components/MoviesCard';
import React from 'react';
import SearchBar from '../components/SearchBar';
import { axiosInstance } from '../utils/axiosInstance';
import styles from '../styles/pages/Home.module.scss';
import { useQuery } from 'react-query';

const fetchShows = async () => {
    const res = await axiosInstance.get(endpoints().popularShows);
    return res;
};
const displayShows = (data: { data: PopularShowsType[] }) => {
    console.log(data.data[0]);
    return data.data.map((show: PopularShowsType) => {
        return <MoviesCard data={show} />;
    });
};

const Home = () => {
    const { data, status } = useQuery('shows', fetchShows);

    return (
        <div className={styles.container}>
            <SearchBar />

            {status === 'success' && displayShows(data)}
        </div>
    );
};

export default Home;
