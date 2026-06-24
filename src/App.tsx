import { Approach } from './components/Approach'
import { Criteria } from './components/Criteria'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { Principal } from './components/Principal'
import { PropertyGallery } from './components/PropertyGallery'

function App() {
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
