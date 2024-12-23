import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function SelectIndicator({ handleSelect, op, opValues, placeholder }) {

    return (
        <Select
            placeholder={placeholder}
            sx={{
                width: 160,
                margin: "0 10px",
            }}
            onChange={(event, value) => handleSelect(value)}
            // onClose	={(event, value) => handleSelect(value)}
        >
            {op.map((option, index) => (
                <Option key={option} value={opValues[index]}>
                    {option}
                </Option>
            ))}
        </Select>
    );
}
