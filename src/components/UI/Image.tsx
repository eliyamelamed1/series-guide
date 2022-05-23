import React from 'react';

interface PropTypes {
    image: string;
    className?: string;
}

export const Image: React.FC<PropTypes> = ({ image, className = '' }) => {
    return <img src={image || require('../../assets/No-Photo-Available.jpg')} alt='Show' />;
};
