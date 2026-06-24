import Ambient from './components/Ambient'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Ambient />
      <Navbar />
      <main id="top">
        <div className="wrap">
          <Hero />
          <Profile />
          <Skills />
          <Experience />
          <Credentials />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
