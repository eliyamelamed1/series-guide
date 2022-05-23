import { ClockLoader } from 'react-spinners';
import React from 'react';
import styles from '../styles/components/LoaderContainer.module.scss';

interface PropTypes {
    isLoading: boolean;
}
const LoaderContainer = ({ isLoading }: PropTypes) => {
    return (
        <div className={styles.loaderContainer}>
            <ClockLoader size={110} loading={isLoading} css={'loader'} />
        </div>
    );
};
export default LoaderContainer;
