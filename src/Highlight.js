import moviepicture from './assets/movie-picture.webp'
import movietitle from './assets/movie-title.webp'
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const Highlight = () => {
    return (
        <div className="highlight">
            <div className="bgPicture">
            <img src={moviepicture} alt="bg"/>
                <div className="titlePicture">
                <img src={movietitle} alt="title"/>
                <p>A brutal rape and a violent revenge, told in reverse. This time, there's no escaping the worst of human nature</p>
                <div className="button">
                    <button className="play"><span><FaPlay/></span> <span>Play</span> </button>
                    <button className="info"><span><FaInfoCircle/></span> <span>More info</span> </button>
                </div>
                </div>
            </div>
            
           
        </div>
    )
}

export default Highlight;
