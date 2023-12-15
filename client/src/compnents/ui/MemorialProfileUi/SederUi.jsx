import { useState } from "react";
import Checkbox from '@mui/joy/Checkbox';

function SederUi({ seder, name }) {
    return <>
        <h2 >{name} </h2>
        {seder.map((masechet, index) => {
            return (
                <div className="masechet" key={masechet.name}>
                    <Checkbox
                        color="success"
                        label={masechet.name}
                        size="md"
                        variant="plain"
                        disabled={masechet.learn}
                    />
                </div>
            )
        })}
    </>

}
export default SederUi;