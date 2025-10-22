
import PropTypes from 'prop-types';

ProjectItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    hasPage:PropTypes.string,
    codeLink:PropTypes.string,
    path:PropTypes.string
}
import { FaLink } from "react-icons/fa6";

import { FaGithub, FaReact } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { SiStyledcomponents } from 'react-icons/si';
import { RiSupabaseLine } from "react-icons/ri";


 function ProjectItem({title,description, }) {

    return (
        <div className='flex flex-col  flex-wrap bg-slate-400 h-[24em] text-slate-800 antialiased dark:text-white   rounded-sm max-w-[650px]  border-4 border-black bg-gradient-to-b  shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]'>
          <div className='flex flex-row items-center space-x-2 p-4'>
            <h1 className=' text-3xl md:text-4xl font-bold md:w-72 w-44 text-slate-800 antialiased  '>{title}</h1>

           <div className='flex flex-row md:space-x-2 space-x-1 text-slate-300'>

            <div className='h-24 bg-slate-800 flex flex-row  rounded-b-full space-x-4 p-2 justify-center items-end '>
            <FaReact className='text-3xl '/>
            </div>
            <div className='h-24 bg-slate-800 flex flex-row   rounded-b-full space-x-4 p-2 justify-center items-end '>
             <RiSupabaseLine className="text-3xl" />
            </div>
            <div className='h-24 bg-slate-800 flex flex-row rounded-b-full flex-wrap  space-x-4 p-2 justify-center items-end '>
            <SiStyledcomponents className="text-3xl" />
            </div>
           </div>

            </div>

                <div className="border w-full flex flex-wrap border-slate-800/20 mx-4 items-end justify-end "></div>
         
           <div className=" w-[350px] md:w-[480px] p-2  md:p-4 overflow-hidden text-ellipsis break-words flex-grow">
                <p className="text-sm md:text-xl leading-relaxed text-slate-100 ">{description}</p>
              </div>
               <div className='flex space-x-4 p-4'>
              <NavLink target='_blank' to="https://github.com/kenzosashida090/React-Hotel"><FaGithub className="text-3xl text-slate-900 hover:text-slate-700 transition-all ease-out" /></NavLink>
              <NavLink target='_blank' to="https://sashida-hotel.netlify.app  "><FaLink className="text-3xl text-slate-900 hover:text-slate-700 transition-all ease-out" /></NavLink>
            </div>
        </div>
    )
    // <div  className="flex items-center justify-center rounded-2xl">
    //   <img className="h-48 w-48 rounded-2xl " src={`./${path}`} alt="hotel" />
    //   <div className="flex flex-col items-start px-5 text-left justify-center">
    //   {/* <h3 className="text-xl text-slate-800 dark:text-stone-400 font-semibold ">{title}</h3> */}
    //   {/* <p className="text-sm text-slate-800 dark:text-stone-400">{description}</p> */}
    //   </div>
    //   {/* <div className="relative text-center flex items-center justify-center group overflow-hidden">
    //       <div className="absolute flex flex-col justify-center items-center left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500 "> 
    //         <Slide cascade>
    //           <p className=" text-slate-50 text-2xl" >{title}</p>
    //           <Fade cascade delay={500} damping={0.02}>
    //             <p className=" text-slate-50 mt-8" >{description}</p>
    //           </Fade>
    //           <Fade cascade delay={1200} damping={0.02}>
    //               <div className="flex space-x-3">
    //               <button className="text-slate-50 flex  bg-slate-500 p-2 mt-9 items-center justify-center space-x-2"> 
    //                 <IoCodeSlashOutline size={20}/>
    //                 <span><a target="_blank" rel="noopener noreferrer" href={codeLink}>Code</a></span>
    //               </button>
                    
    //                 { hasPage !== "" && 
    //                   <>
    //                     <button className="text-slate-50 flex  bg-slate-500 p-2 mt-9 items-center justify-center space-x-2"> 
    //                       <FiEye size={20}/> 
    //                       <span><a target="_blank"  href={hasPage}>Live</a></span>
    //                     </button>
    //                   </>
    //                 }
    //               </div>
    //             </Fade>
    //         </Slide>
    //       </div>
    //     </div> */}
         
    // </div>
    
}
export default ProjectItem