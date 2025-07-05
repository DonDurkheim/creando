import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='flex flex-col'> 
      <Navbar />
      <Hero />
      <WhoWeAre />
      <AboutUs />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
