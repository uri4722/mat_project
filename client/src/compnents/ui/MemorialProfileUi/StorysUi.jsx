import "./css/StorysUi.css"

function StorisUi({ storys }) {
    // console.log(storys);
    return (
        <div className="storysContiner">
            {storys && storys.map((story, index) => {
                return (
                    <div key={index} className="story">
                        <h2>{story.title}</h2>
                        <p>{story.story}</p>
                        <br />
                        <p>{story.gmail}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default StorisUi;