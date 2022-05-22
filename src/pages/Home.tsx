import React from 'react';
import SearchBar from '../components/SearchBar';
import ShowList from '../components/ShowList';
import styles from '../styles/pages/Home.module.scss';

const Home = () => {
    return (
        <div className={styles.container}>
            <SearchBar />
            <ShowList />
        </div>
    );
};

export default Home;
