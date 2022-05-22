import React from 'react';
import { SearchType } from '../queries/searchForShows';
import ShowCard from '../components/ShowCard';
import styles from '../styles/pages/Home.module.scss';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const location = useLocation();
    const data: any = location.state || [];

    return (
        <section className={styles.showList}>
            {data.map((obj: SearchType) => {
                const show = obj?.show;
                return (
                    <button onClick={() => {}} key={show.id}>
                        <ShowCard show={show} />
                    </button>
                );
            })}
        </section>
    );
};

export default Search;
