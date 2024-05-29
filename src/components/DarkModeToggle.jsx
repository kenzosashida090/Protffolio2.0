import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5"
import { useDarkMode } from "../context/DarkModeContext"

function DarkModeToggle() {
    const {isDarkMode, toggleDarkMode} = useDarkMode()
    return (
        <button onClick={toggleDarkMode}>{!isDarkMode ? <IoMoonOutline className="vibrate"/> : <IoSunnyOutline className="vibrate" color="white"/>}</button>

    )
}

export default DarkModeToggle
