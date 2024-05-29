import Contact from "./components/Contact"
import Home from "./components/Home"
import MainNav from "./components/MainNav"
import Projects from "./components/Projects"
import { DarkModeProvider } from "./context/DarkModeContext"


function App() {
  return (
    <DarkModeProvider>
      <main className="overflow-y-hidden">
        <MainNav/>
        <Home/>
        <Projects/>
        <Contact/>
      </main>
    </DarkModeProvider>
  )
}

export default App
