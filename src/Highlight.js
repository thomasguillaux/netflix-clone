import moviepicture from './assets/movie-picture.webp'
import movietitle from './assets/movie-title.webp'

const Highlight = () => {
    return (
        <div className="highlight">
            <img className="bg-picture" src={moviepicture} alt="bg"/>
            <img className="title-picture" src={movietitle} alt="title"/>
        </div>
    )
}

export default Highlight;
