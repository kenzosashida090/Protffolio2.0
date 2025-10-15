import DarkModeToggle from "./DarkModeToggle";
import { IoMenu } from "react-icons/io5";


function MainNav() {
    return (
<header className="flex  justify-between md:justify-around bg-slate-200 px-10 max-h-24 dark:bg-slate-800  ">
    <div className="flex items-center space-x-20 text-2xl my-10 mr-5" onClick={(e) => {
        e.preventDefault();
        const target = e.target;
        const id = target.getAttribute("href")?.replace("#", "");
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }}>
        <p className=" text-slate-800 dark:text-slate-50"><a href="#home">KSDev.</a></p>
    </div>
    <div className="flex items-center md:space-x-20 text-xl my-10 justify-center space-x-4 " onClick={(e) => {
        e.preventDefault();
        const target = e.target;
        const id = target.getAttribute("href")?.replace("#", "");
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }}>
        <p className=" text-slate-800 dark:text-slate-50 hidden font-sans font-semibold md:block"><a href="#projects">RESUME</a></p>
        <span className="block pt-2"><DarkModeToggle/></span>
        <button className="block md:hidden text-3xl text-slate-800 dark:text-slate-50"><IoMenu/></button>
        
    </div>
</header>
    )
}

export default MainNav
