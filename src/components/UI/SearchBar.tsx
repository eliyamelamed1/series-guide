import { Fragment, useMemo, useState } from 'react';
import { SearchType, searchForShows } from '../../queries/searchForShows';

import Autocomplete from '@mui/material/Autocomplete';
import Button from './Button';
import { CircularProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import { debounce } from 'lodash';
import { routes } from '../../utils/routes';
import styles from '../../styles/components/UI/SearchBar.module.scss';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

export default function SearchBar() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const { data, status, isLoading } = useQuery(['searchForShows', searchValue], () => searchForShows(searchValue));

    const deb = useMemo(
        () =>
            debounce((e) => {
                setSearchValue(e.target.value);
            }, 300),
        []
    );

    const onChange = (e: any) => {
        deb(e);
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (!searchValue.trim().length) return toast.info('Please enter text');
        navigate(routes(searchValue).search, { state: data });
    };

    return (
        <div className={styles.container}>
            <Autocomplete
                freeSolo
                disableClearable={true}
                className={styles.container}
                options={status === 'success' ? data?.map((option: SearchType) => option?.show?.name) : []}
                renderInput={(params) => (
                    <TextField
                        onChange={onChange}
                        onSelect={onChange}
                        {...params}
                        sx={{ fontSize: 15 }}
                        placeholder='Search'
                        InputProps={{
                            ...params.InputProps,
                            sx: { fontSize: 15 },
                            className: styles.optionList,
                            endAdornment: (
                                <Fragment>
                                    {isLoading && <CircularProgress style={{ color: 'black' }} size={20} />}
                                    {/* <button style={{ color: 'black' }}>button that will dispatch the action</button> */}
                                </Fragment>
                            ),
                        }}
                    />
                )}
            />

            <Button onClick={onSubmit}> Submit</Button>
        </div>
    );
}
