import { ClockLoader } from 'react-spinners';
import React from 'react';
import styles from '../../styles/components/UI/LoaderContainer.module.scss';

const LoaderContainer = () => {
    return (
        <div className={styles.loaderContainer}>
            <ClockLoader size={110} css={'loader'} />
        </div>
    );
};
export default LoaderContainer;
