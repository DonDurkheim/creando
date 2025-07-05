import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Team from './components/Team'


const App = () => {
  return (
    <div className='flex flex-col'> 
      <Navbar />
      <Hero />
      <WhoWeAre />
      <AboutUs />
      <Services />
      <Team />
    </div>
  )
}

export default App
