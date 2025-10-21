import DarkModeToggle from "./DarkModeToggle";
import { IoMenu } from "react-icons/io5";
import NavMobile from "./NavMobile";
import { useState } from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";


function MainNav() {
       const [isVisible, setIsVisible] = useState(false)
    return (
<header className="flex  justify-around md:justify-between items-center text-center bg-slate-200 md:px-10 max-h-24 dark:bg-slate-800  ">
    <div className="flex items-center space-x-20 text-2xl my-10 mr-5" onClick={(e) => {
        e.preventDefault();
        const target = e.target;
        const id = target.getAttribute("href")?.replace("#", "");
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }}>
        <p className=" text-slate-800 dark:text-slate-50"><NavLink to="/">KSDev.</NavLink></p>
    </div>
    <div className="flex items-center lg:space-x-20 text-xl my-10 space-x-4  transition-all duration-1300 ease-in-out  justify-end" onClick={(e) => {
        e.preventDefault();
        const target = e.target;
        const id = target.getAttribute("href")?.replace("#", "");
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }}>
        <p className=" text-slate-800 dark:text-slate-50 hidden font-sans font-semibold md:block"><NavLink to="/resume">RESUME</NavLink></p>
        <span className={` pt-2  ${isVisible ? 'hidden' : 'block'  }`}><DarkModeToggle/></span>
        <div className="flex space-x-2 z-[99999]">
 <motion.button
                className="block md:hidden text-3xl text-slate-800 dark:text-slate-50 justify-end items-end"
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 0 }}
            >
                <div>
                {isVisible ? "": <IoMenu/>}
                </div>
            </motion.button>
            <NavMobile isVisible={isVisible} setIsVisible={setIsVisible}/>
        </div>
        
    </div>
</header>
    )
}

export default MainNav
