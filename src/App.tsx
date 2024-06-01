
import Header from '@/components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ServiceArea from './components/ServiceArea'
import Industries from './components/Insdrustries'
import Solutions from './components/Solutions'
import Career from './components/Career'
import Guest from './components/Guest'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* <div className='min-h-screen'> */}
        <Header />
        <Hero />
      {/* </div> */}
        <Services />
        <ServiceArea />
        <Industries />
        <Solutions />
        <Career />
        <Guest />
        <Footer />
    </>
  )
}

export default App