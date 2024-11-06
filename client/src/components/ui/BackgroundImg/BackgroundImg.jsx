import './backgroundImg.css'
function BackgroundImg({src}) {

    return ( 
        <div className="bg-img-contianer">
            <img className="bg-img-content" src={src}/>
        </div>

     );
}

export default BackgroundImg;