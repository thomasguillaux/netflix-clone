import movies from './movies.json'

const Section = () => {

    return (
        <div className="thumbnails-list">
            {movies.map((elem, index) => {

                const images = elem.images

                return (  


                    <div className="category">
                <h1>{elem.category}</h1>
      

                   <div className="thumbnails">
                       {images.map((elem, index) => {
                           return (
                            <img src={elem} alt=""/>
                           )
                       })}
                   </div>
                   </div>
                )
            })}
        </div>
    )
}

export default Section;

/* <div className="movie-section">
    <div className="movie-category">

    {movies.map((elem, index) => {
    return (
        <div className="section-components">
            <h1>{ elem.category }</h1>

                <div className="movie-thumbnail">
                    {movies.images.map((elem, index) => {
                        return (
<img src= { elem.images[index] } alt="movie-preview"/>
                        )
                    })}

                    
                </div>  
        </div>

              )
              })}
            </div>         
        </div> */