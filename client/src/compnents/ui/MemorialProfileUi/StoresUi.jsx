import Switch from "@mui/joy/Switch";
import "./css/StoresUi.css"
import { useState } from "react";
import { Input, Textarea } from '@mui/joy';



function StorisUi({ stores, handleChangeStores, newStory }) {
    const [display, setDisplay] = useState(false);
    return (
        <div className="storesContiner">
            {stores && stores.map((story, index) => {
                return (
                    <div key={index} className="story">
                        <h2>{story.title}</h2>
                        <p>{story.story}</p>
                        <br />
                        <p>{story.gmail}</p>
                    </div>
                )
            })}
            <h4>{display ? 'לסגירה' : 'להוספת סיפור'}</h4>
            <Switch
                color={display ? "success" : "neutral"}
                checked={display}
                onChange={() => setDisplay(!display)}
                sx={{ marginLeft: "10px", marginTop: "5px" }}
            />
            {display && <div className="form">
                <Input
                    color="success"
                    placeholder="כתורת"
                    size="sm"
                    variant="plain"
                    sx={{ marginTop: "10px" }}
                    name="title"
                    value={newStory.title}
                    onChange={handleChangeStores}
                />
                <Textarea
                    color="success"
                    minRows={2}
                    variant="plain"
                    placeholder="כתוב פה מעשה טוב או סיפור  "
                    sx={{ marginTop: "10px" }}
                    name="story"
                    value={newStory.story}
                    onChange={handleChangeStores}

                />
            </div>}
        </div>
    )
}
export default StorisUi;