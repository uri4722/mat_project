import Checkbox from '@mui/joy/Checkbox';

function SederUi({ seder, name, handleChangeMasechtot }) {
    return <>
        <h2>{name}</h2>
        {seder.map((masechet, index) => {
            return (
                <div className="masechet" key={masechet.name}>
                    <Checkbox
                        color="success"
                        label={masechet.name}
                        name={masechet.name}
                        size="md"
                        variant="plain"
                        disabled={masechet.alreadyTaken}
                        onChange={handleChangeMasechtot}
                        checked={masechet.alreadyTaken ? true : masechtot.includes(masechet.name)}
                    />
                </div>
            )
        })}
    </>

}
export default SederUi;