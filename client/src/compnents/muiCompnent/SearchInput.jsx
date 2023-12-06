import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import Stack from '@mui/joy/Stack';
import Autocomplete from '@mui/joy/Autocomplete';

export default function SearchInput({ names, handeleSearch }) {
    console.log(handeleSearch);
    return (
        <Stack spacing={2} sx={{ width: 300 }}>

            <FormControl >
                <Autocomplete
                    placeholder="Search anything"
                    type="search"
                    freeSolo
                    disableClearable
                    options={names}
                    onChange={(event, value) => console.log(value)}
                    onInputChange={(event, value) => handeleSearch(value)}
                />
            </FormControl>
        </Stack>
    );
}

