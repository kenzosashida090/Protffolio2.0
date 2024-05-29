import DarkModeToggle from "./DarkModeToggle";

function MainNav() {
    return (
<header className="flex items-center justify-evenly bg-slate-200 px-10 sticky top-0 dark:bg-slate-800 transition-colors duration-500 ease-in-out">
    <ul className="flex items-center space-x-20 text-2xl my-10" onClick={(e) => {
        e.preventDefault();
        const target = e.target;
        const id = target.getAttribute("href")?.replace("#", "");
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }}>
        <li className="vibrate text-slate-800 dark:text-slate-50"><a href="#home">KS</a></li>
    </ul>
    <ul className="flex items-center space-x-20 text-2xl my-10  " onClick={(e) => {
        e.preventDefault();
        const target = e.target;
        const id = target.getAttribute("href")?.replace("#", "");
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }}>
        <li className="vibrate text-slate-800 dark:text-slate-50"><a href="#projects">Projects</a></li>
        <li className="vibrate text-slate-800 dark:text-slate-50"><a href="#contact">Contact</a></li>
        <DarkModeToggle/>
    </ul>
</header>
    )
}

export default MainNav
