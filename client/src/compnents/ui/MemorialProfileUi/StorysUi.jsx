function StorisUi({ storys }) {
    console.log(storys);
    return (
        <div>
            {/* {storys && storys.map((story, index) => {
                return (
                    <div key={index} className="storysContiner">
                        <h1>{story.title}</h1>
                        <p>{story.content}</p>
                    </div>
                )
            })} */}
        </div>
    )
}
export default StorisUi;