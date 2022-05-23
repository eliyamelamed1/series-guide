import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import MainSection from '../components/shows/profile/MainSection';
import { ShowType } from '../queries/fetchListOfShows';
import SummarySection from '../components/shows/profile/SummarySection';
import { fetchShowDetails } from '../queries/fetchShowDetails';
import { isEmpty } from 'lodash';
import styles from '../styles/pages/ShowProfile.module.scss';
import { useQuery } from 'react-query';

const ShowProfile = () => {
    const location = useLocation();
    const [shouldFetch, setShouldFetch] = useState(false);
    const [mutualState, setMutualState] = useState({});
    const show = useMemo(() => location.state as ShowType, [location.state]);

    useEffect(() => {
        if (isEmpty(show)) return setShouldFetch(true);
    }, [show]);

    const params = useParams();
    const { data, status } = useQuery(['fetchShowDetails'], () => fetchShowDetails(params.showId as string), {
        enabled: shouldFetch,
    });

    useEffect(() => {
        if (shouldFetch && status === 'success') setMutualState(data);
        else setMutualState(show as ShowType);
    }, [status, shouldFetch, data, show]);

    return (
        <div className={styles.showProfile}>
            {!isEmpty(mutualState) && <MainSection show={mutualState as ShowType} />}
            {!isEmpty(mutualState) && <SummarySection show={mutualState as ShowType} />}
        </div>
    );
};

export default ShowProfile;
