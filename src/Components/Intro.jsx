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
                    <h1>Web Developer</h1>
                    <h5>from the UK. I take great pride in producing
                    high performing web applications.</h5> 
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
                    <img
                        src={ avatarLarge }
                        srcSet={`${ avatarSmall } 250w, ${ avatarLarge } 700w`}
                        sizes="(max-width: 475px) 250w, 700px"
                    />
                </div>
            </div>       
        </div>
    </div>
)
}

// need to user diff pics for diff screen sizes... currently passing desktop not mobile in lighthouse

export default Intro;