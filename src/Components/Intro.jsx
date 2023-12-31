import avatarLarge from '../assets/avatarlarge.avif'
import avatarSmall from '../assets/avatarsmall.avif'


const Intro = () => {

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
    <div className="darkBG">
        <div className="container">
            <div className="intro-content">
                <div className="intro-text">
                    <h4>Hi! Im Jake, a </h4>
                    <h1>WEB DEVELOPER</h1>
                    <h5>from the UK. I specialise in high performing, optimised and
                        accessible web applications.</h5> 
                    <button id='contactBtn' onClick={() => scrollTo('contact-section')}>Contact Me</button>   
                </div>
                <div className="intro-img">
                    {/* <img
                        alt='Profile Picture'
                        src={ avatarLarge }
                        srcSet={`
                        ${ avatarLarge } 2x,
                        ${ avatarSmall } 1x
                    `}/> */}
                    <picture>
                        <source media='(max-width: 475px)' srcSet={ avatarSmall } />
                        <source media='(min-width: 476px)' srcSet={ avatarLarge } />
                        <img src={ avatarSmall } alt='profile picture' />
                    </picture>
                </div>
            </div>       
        </div>
    </div>
)
}

// need to user diff pics for diff screen sizes... currently passing desktop not mobile in lighthouse

export default Intro;