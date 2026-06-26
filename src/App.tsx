import { Approach } from './components/Approach'
import { Criteria } from './components/Criteria'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MaintenancePage } from './components/MaintenancePage'
import { Partners } from './components/Partners'
import { Principal } from './components/Principal'
import { PropertyGallery } from './components/PropertyGallery'

function App() {
  if (import.meta.env.VITE_MAINTENANCE_MODE === 'true') {
    return <MaintenancePage />
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Approach />
        <PropertyGallery />
        <Criteria />
        <Partners />
        <Principal />
      </main>
      <Footer />
    </>
  )
}

export default App
