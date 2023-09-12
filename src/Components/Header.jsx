import logo from '../assets/logo2.avif'

const Header = () => {

    const getHeaderHeight = () => {
        const height = document.querySelector('.header').offsetHeight;
        return height
    }

    const scrollTo = (section) => {
        const element = document.querySelector(`#${section}`);
        const offset = getHeaderHeight();
        const elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }

    return (
        <div className="header darkBG">
            <div className="container">
                <div className="logo">
                    <img id="header-logo" src={ logo } alt='logo'></img>
                </div>
                <div className="nav-links">
                    <ul className='links'>
                        <li onClick={() => scrollTo('about-section')} ><h5>About</h5></li>
                        <li onClick={() => scrollTo('project-section')} ><h5>Projects</h5></li>
                        <li onClick={() => scrollTo('contact-section')} ><h5>Contact</h5></li>
                    </ul>
                </div>
            </div>
        </div>        
    )
}

export default Header;