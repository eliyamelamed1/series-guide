import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Error from '../components/Error';
import LoaderContainer from '../components/UI/LoaderContainer';
import MainSection from '../components/shows/profile/MainSection';
import { ShowType } from '../queries/fetchListOfShows';
import SummarySection from '../components/shows/profile/SummarySection';
import { fetchShowDetails } from '../queries/fetchShowDetails';
import { isEmpty } from 'lodash';
import styles from '../styles/pages/Profile.module.scss';
import { useQuery } from 'react-query';

const ShowProfile = () => {
    const location = useLocation();
    const [shouldFetch, setShouldFetch] = useState(false);
    const [mutualState, setMutualState] = useState({});
    const showData = location.state as ShowType;

    useEffect(() => {
        if (isEmpty(showData)) return setShouldFetch(true);
    }, [showData]);

    const params = useParams();
    const { data: fetchedData, status } = useQuery(
        ['fetchShowDetails'],
        () => fetchShowDetails(params.showId as string),
        {
            enabled: shouldFetch,
        }
    );

    useEffect(() => {
        if (shouldFetch && status === 'success') setMutualState(fetchedData);
        else setMutualState(showData as ShowType);
    }, [status, shouldFetch, fetchedData, showData]);

    if (status === 'loading') return <LoaderContainer />;
    if (status === 'error') return <Error />;

    return (
        <div className={styles.showProfile}>
            {!isEmpty(mutualState) && <MainSection show={mutualState as ShowType} />}
            {!isEmpty(mutualState) && <SummarySection show={mutualState as ShowType} />}
        </div>
    );
};

export default ShowProfile;
