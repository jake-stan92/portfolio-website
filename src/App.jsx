import './App.css'
import '../script'
import Header from './Components/Header'
import ProjectCard from './Components/ProjectCard'
import ContactForm from './Components/ContactForm'
// import projectImg from './assets/projectIMG.png'

import stravaPicLarge from './assets/stravajsscreenshotlarge.avif'
import stravaPicSmall from './assets/stravajsscreenshotsmall.avif'

import growITPicLarge from './assets/growitscreenshotlarge.avif'
import growITPicSmall from './assets/growitscreenshotsmall.avif'

import About from './Components/About'
import Intro from './Components/Intro'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Header/>
      <div className="darkBG">
        <Intro/>
      </div>
      <div id='about-section'>
          <About/>
      </div>
      <div id='project-section'>
          <div className="lightBG">
            <div className="container">
              <h2 className=''>PROJECTS</h2>
            </div>
          </div>
      </div>
      <div className="card lightBG">
        <ProjectCard 
          title='StravaJS'
          largeProjectImage= { stravaPicLarge }
          smallProjectImage= { stravaPicSmall }
          // github={ githubLogo }
          githubLink='https://github.com/jake-stan92/StravaJS-FullStack'
          // liveDemo={ playIcon }
          liveDemoLink='https://stravajs.onrender.com/'
          defaultDescription="StravaJS is a full-stack application that uses Strava's API to 
                              collect data on users running entries. Data is then presented in a graph 
                              for ease of viewing. Users can currently track their weekly distance covered (km)."
          projectHead = {[
            {title: 'Description',
            content: `StravaJS is a full-stack application that uses Strava's API to 
                    collect data on users running entries. Data is then presented in a graph 
                    for ease of viewing. Users can currently track their weekly distance covered (km).`},
            {title: 'Tech Used',
            content: `StravaJS uses NodeJS / ExpressJS as the backend framework with pug as a templating language.
                      MongoDB is used as the project database. PassportJS and BcryptJS have been used to provide
                      security and user authentication. ChartJS is used to manipulate the data into a graph.`},
            {title: 'Plans',
            content: `Additional functionality is planned for the app including monthly and yearly totals, as well as
                      a year to date total display. I would also like to add the functionality to allow users to choose
                      to be a part of a multiple 'challenges' allowing tracking across multiple groups. Additional functionality is planned for the app including monthly and yearly totals, as well as
                      a year to date total display. I would also like to add the functionality to allow users to choose
                      to be a part of a multiple 'challenges' allowing tracking across multiple groups.`},
          ]}/>
      </div>
      <div className="card darkBG">
        <ProjectCard 
          title='GrowIT'
          largeProjectImage= { growITPicLarge }
          smallProjectImage= { growITPicSmall }
          // github={ githubLogo }
          githubLink='https://github.com/jake-stan92/grow-it'
          // liveDemo={ playIcon }
          liveDemoLink='https://verdant-sprite-5e95a5.netlify.app/'
          defaultDescription='The owner of GrowIT contacted me to create a landing page for their new business.
                              they had an existing site but it was very slow and poorly optimised. Through consultation
                              we were able to agree on an updated design for the website.'
          projectHead = {[
            {title: 'Description',
            content: `The owner of GrowIT contacted me to create a landing page for their business.
                      They had an existing site but it was very slow and poorly optimised. Through consultation
                      we were able to agree on an updated design for the website.`},
            {title: 'Tech Used',
            content: `Plain HTML, CSS and Javascript were used to complete this website. The site was
                      hosted on netlify via github. The site now achieves 95+ scores across Google Lighthouse's range,
                      a vast improvment on the previous scores of 70-80.`},
            {title: 'Testimonial',
            content: `"Jake was able to update my existing website and increase its speed massively.
                      He understood my wants and needs and produced the work accordingly." `},
          ]}/>
      </div>
      <div id='contact-section'></div>
        <ContactForm/>
        <Footer/>
    </>
  )
}

export default App
