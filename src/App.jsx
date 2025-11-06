import { Toaster } from 'sonner'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import Countdown from './components/Countdown'
import Schedule from './components/Schedule'
import RSVPForm from './components/RSVPForm'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-wedding-dark overflow-x-hidden">
      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          style: {
            fontFamily: 'Montserrat, sans-serif',
          },
          className: 'wedding-toast',
        }}
      />

      <Hero />
      <Invitation />
      <Countdown />
      <Schedule />
      <RSVPForm />
      <Carousel />
      <Footer />
    </div>
  )
}

export default App
