import React from 'react';
import { Rating as Stars } from '@mui/material';
import styles from '../../styles/components/UI/Rating.module.scss';

interface PropTypes {
    value: number;
}

const Rating: React.FC<PropTypes> = ({ value }) => {
    return <Stars value={value} readOnly precision={0.5} className={styles.rating} />;
};

export default Rating;
