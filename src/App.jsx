import {BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero,Hobby, Navbar, Tech, Works, StarsCanvas} from './components';

const App = () => {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />

        

      </div>

       {/* Les différentes sections du eportfolio */}
      <About />
      <Experience />
      <Tech />
      <Works />
      <Hobby />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      {/* 3D stars object */}

      </div>

    </div>
    </BrowserRouter>
  )
   
}

export default App
