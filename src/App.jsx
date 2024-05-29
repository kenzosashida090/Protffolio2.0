import Contact from "./components/Contact"
import Home from "./components/Home"
import MainNav from "./components/MainNav"
import Projects from "./components/Projects"


function App() {


  return (
    <main className="overflow-y-hidden">
    <MainNav/>
      <Home/>
      <Projects/>
      <Contact/>
    
    </main>
  )
}

export default App
