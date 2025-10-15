import { useDarkMode } from "../context/DarkModeContext"
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

function DarkModeToggle() {
    const {isDarkMode, toggleDarkMode} = useDarkMode()
    return (
        <button onClick={toggleDarkMode}>{!isDarkMode ? <MdDarkMode className="text-2xl" />: <MdOutlineDarkMode className="text-2xl" color="white"/>}</button>

    )
}

export default DarkModeToggle
