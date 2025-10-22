import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/Home"

import { DarkModeProvider } from "./context/DarkModeContext"
import AppLayout from "./components/AppLayout"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  )
}

export default App
