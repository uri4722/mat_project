import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import Stack from '@mui/joy/Stack';
import Autocomplete from '@mui/joy/Autocomplete';

export default function SearchInput({ names, handleSearch }) {

    return (
        <Stack spacing={2} sx={{ width: 160, margin: "0 10px", }}>

            <FormControl >
                <Autocomplete
                    placeholder="חיפוש נפטר"
                    type="search"
                    freeSolo
                    disableClearable
                    options={names}
                    onChange={(event, value) => console.log(value)}
                    onInputChange={(event, value) => handleSearch(value)}
                />
            </FormControl>
        </Stack>
    );
}

