import avatar from '../assets/avatar.png'

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
                    <h5>Hi! Im Jake, a <h1>Web Developer</h1> from the UK. I take great pride in producing
                    high performing web applications.</h5> 
                      <button id='contactBtn' onClick={() => scrollTo('contact-section')}>Contact Me</button>   
                </div>
                <div className="intro-img">
                    <img src={ avatar }></img>
                </div>
            </div>       
        </div>
    </div>
)
}

export default Intro;