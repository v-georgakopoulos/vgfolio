import { ThemeProvider } from "./context/ThemeContext"
import { useEffect, useState } from "react"

import Navigation from "./components/Navigation/Navigation"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import Loader from "./components/Loader/Loader"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ThemeProvider>
        {isLoading ? (<Loader onFinish={() =>setIsLoading(false)} />) : (
          <>   
            <Navigation />
            <Home />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
            <ScrollToTop />
          </>
        )}
      </ThemeProvider>
    </div>
  )
}

export default App
