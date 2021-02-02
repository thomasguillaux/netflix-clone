import netflix from './assets/netflix-logo.png'

const Header = () => {
    return (
        <div className="navBar">
            <div className="logo">
                <img src={netflix} alt="logo"/>
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>Popular</li>
                    <li>My List</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;