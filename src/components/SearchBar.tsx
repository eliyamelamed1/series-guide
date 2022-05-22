import { SearchType, searchForShows } from '../queries/searchForShows';
import { useEffect, useMemo, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import Button from './Button';
import TextField from '@mui/material/TextField';
import { debounce } from 'lodash';
import styles from '../styles/components/SearchBar.module.scss';
import { useQuery } from 'react-query';

export default function SearchBar() {
    const [options, setOptions] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const { data, status } = useQuery(['fetchListOfShows', searchValue], () => searchForShows({ q: searchValue }));
    useEffect(() => {
        if (status === 'success') {
            setOptions(data);
        }
    }, [status, data]);

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
                options={options.map((option: SearchType) => option?.show?.name)}
                renderInput={(params) => (
                    <TextField
                        onChange={onChange}
                        onSelect={onChange}
                        {...params}
                        label='Search input'
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />

            <Button> Submit</Button>
        </div>
    );
}
