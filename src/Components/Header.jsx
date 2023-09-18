// import logo from '../assets/logo.avif'
import { useState } from 'react';
import { useEffect } from 'react';
import logoBlack from '../assets/JS Logo Black 1.png'
import logoWhite from '../assets/JS Logo White 1.png'

const Header = () => {

    // let [logo, setLogo] = useState({
    //     src: "",
    //     alt: "",
    // });

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

    const [isScrolled, setIsScrolled] = useState(false);

    const listenScrollEvent = (e) => setIsScrolled(window.scrollY > 0);

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    })

    // const changeLogo = (e) => {
    //     if (window.scrollY > 0) {
    //         setLogo({
    //             src: { logoBlack },
    //             alt: "Company Logo",
    //         });
    //     } else {
    //         setLogo({
    //             src: { logoWhite },
    //             alt: "Company Logo",
    //         })
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", changeLogo);
    // }, []);

    return (
        <div className="header darkBG">
            <div className="container">
                <div className="logo">
                    {/* <img id="header-logo" src={`${logo.src}`} alt={ logo.alt } /> */}
                    <img onClick={() => scrollTo('home-section')} id="header-logo"
                            src={isScrolled ? logoBlack: logoWhite}
                            alt="Compant Logo"
                        />
                </div>
                <div className="nav-links">
                    <ul className='links'>
                        <li onClick={() => scrollTo('about-section')} ><h5>ABOUT</h5></li>
                        <li onClick={() => scrollTo('project-section')} ><h5>PROJECT</h5></li>
                        <li onClick={() => scrollTo('contact-section')} ><h5>CONTACT</h5></li>
                    </ul>
                </div>
            </div>
        </div>        
    )
}

export default Header;