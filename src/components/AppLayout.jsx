
import { Outlet } from "react-router"
import MainNav from "./MainNav"
import Footer from "./Footer"

const AppLayout = ()=> {
    return (
        <div className="grid grid-row-[24px_1fr_24px] h-screen overflow-y-auto overflow-x-hidden bg-slate-300 dark:bg-slate-800 ">
            <MainNav/>
            <div className="flex flex-col gap-[1.2rem] text-stone-700  dark:text-stone-400 transition-colors duration-500 ease-in-out">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default AppLayout
