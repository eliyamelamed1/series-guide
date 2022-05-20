import { PopularShowsType } from '../utils/endpoints';
import React from 'react';

const MoviesCard: React.FC<{ data: PopularShowsType }> = ({ data }) => {
    return (
        <div>
            {/* <img /> */}
            <h1>{data.name}</h1>
            <h1>{data.rating.average}</h1>
        </div>
    );
};

export default MoviesCard;
