import { Fragment, useMemo, useState } from 'react';
import { SearchType, searchForShows } from '../queries/searchForShows';

import Autocomplete from '@mui/material/Autocomplete';
import Button from './Button';
import { CircularProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import { debounce } from 'lodash';
import styles from '../styles/components/SearchBar.module.scss';
import { useQuery } from 'react-query';

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const { data, status, isLoading } = useQuery(['fetchListOfShows', searchValue], () =>
        searchForShows({ q: searchValue })
    );

    const deb = useMemo(
        () =>
            debounce((e: any) => {
                setSearchValue(e.target.value);
            }, 300),
        []
    );

    const onChange = (e: any) => {
        deb(e);
    };

    return (
        <div className={styles.container}>
            <Autocomplete
                freeSolo
                disableClearable={true}
                className={styles.container}
                options={status === 'success' ? data.map((option: SearchType) => option?.show?.name) : []}
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

            <Button> Submit</Button>
        </div>
    );
}
