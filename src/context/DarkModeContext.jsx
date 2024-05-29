/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const DarkModeContext = createContext()
function DarkModeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useLocalStorage(window.matchMedia("(prefers-color-scheme: dark)").matches, "isDarkMode")
    useEffect(()=>{
        if(isDarkMode) {
            document.documentElement.classList.add("dark")
            document.documentElement.classList.remove("light")
        }else {
            document.documentElement.classList.add("light")
            document.documentElement.classList.remove("dark")
        }
    },[isDarkMode])
    function toggleDarkMode() {
        setIsDarkMode((isDarkMode) =>!isDarkMode)
    }

    return (
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

function useDarkMode () {
    const context = useContext(DarkModeContext)
    if(context === undefined) throw new Error ("DarkMode context was used outside of the darkmode provider")
    return context
}
export {DarkModeProvider, useDarkMode}
