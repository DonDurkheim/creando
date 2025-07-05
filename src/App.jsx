import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import AboutUs from './components/AboutUs'


const App = () => {
  return (
    <div className='flex flex-col'> 
      <Navbar />
      <Hero />
      <WhoWeAre />
      <AboutUs />
    </div>
  )
}

export default App
