import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'

const App = () => {
  return (
    <div className='flex flex-col'> 
      <Navbar />
      <Hero />
      <AboutUs />
    </div>
  )
}

export default App
