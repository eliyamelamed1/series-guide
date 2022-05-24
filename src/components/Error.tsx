import React from 'react';

const Error = () => {
    return (
        <h1
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                fontSize: '2rem',
            }}
        >
            Something Went wrong please try again later
        </h1>
    );
};

export default Error;
