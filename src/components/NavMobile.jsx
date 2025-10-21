import { AnimatePresence, motion } from "motion/react"
import { createPortal } from "react-dom"
import { IoIosClose } from "react-icons/io"
import {  NavLink } from "react-router-dom"


const NavMobile = ({isVisible ,setIsVisible})=> {
    return createPortal(
        <div className=" w-full z-9999999999999999999999 aboslute ">
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <>
                    <motion.div
                        initial={{ opacity: 0, x:900, scale:0, y:-800}}
                        animate={{ opacity: 1, scale:1, x:0, y:0 }}
                        exit={{ opacity: 0, y:-700, x:500,  }}
                        transition={{ type: "spring", stiffness: 350, damping: 45,       ease: [0, 0.71, 0.2, 1.01] }}
                        className="top-0 right-0 z-[9999] fixed bg-slate-300 dark:bg-slate-900  h-[100vh] w-[250px]"
                        >

                        <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6 flex flex-col justify-end items-end"
              >
                
                 <IoIosClose onClick={()=>setIsVisible(false)} className="text-3xl mr-4 top-0 text-white justify-end"/> 
                <ul className="w-full space-y-5">
                    <NavLink to="/resume" className={({ isActive }) => (isActive ? 'bg-slate-400/40  text-xl w-full text-black dark:text-white bg-slate-400/30 p-2' : 'text-xl w-full text-black dark:text-white p-2')}>Resume
                    </NavLink>
                    <div>
                     <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-slate-400/40  text-xl w-full text-black dark:text-white bg-slate-400/30 p-2' : 'text-xl w-full text-black dark:text-white p-2')}>Home
                    </NavLink>
                    </div>
                </ul>
                </motion.div>
            </motion.div>
                        </>
                ) : null}
            </AnimatePresence>
           
        </div>,document.body
    )
}



export default NavMobile
