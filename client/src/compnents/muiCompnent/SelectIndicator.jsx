import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function SelectIndicator({ handeleSelect }) {

    return (
        <Select
            placeholder="בחר סוג נפטר"
            sx={{
                width: 160,
                margin: "0 20px",
            }}

            onChange={(event, value) => handeleSelect(value)}
        >
            <Option value="isRabbi">רבנים</Option>
            <Option value="isLonely">גלמודים</Option>
            <Option value="isSoldier">חיילים</Option>
            <Option value="">כולם</Option>
        </Select>
    );
}
