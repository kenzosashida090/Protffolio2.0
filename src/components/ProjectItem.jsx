import { Fade, Slide } from "react-awesome-reveal"
import { FiEye } from "react-icons/fi"
import { IoCodeSlashOutline } from "react-icons/io5"
import PropTypes from 'prop-types';

ProjectItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    hasPage:PropTypes.string,
    codeLink:PropTypes.string
}

function ProjectItem({title,description,hasPage="",codeLink}) {
  return (
    <div  className="flex items-center bg-slate-200 justify-center flex-col space-y-7 p-3 sm:p1">
      <div className="relative text-center flex items-center justify-center group overflow-hidden">
        <img className="h-30 hover:blur-sm  " src="../../hotel.jpg" alt="hotel" />
          <div className="absolute flex flex-col justify-center items-center left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500 "> 
            <Slide cascade>
              <p className=" text-slate-50 text-2xl" >{title}</p>
              <Fade cascade delay={500} damping={0.02}>
                <p className=" text-slate-50 mt-8" >{description}</p>
              </Fade>
              <Fade cascade delay={1200} damping={0.02}>
                  <div className="flex space-x-3">
                  <button className="text-slate-50 flex  bg-slate-500 p-2 mt-9 items-center justify-center space-x-2"> 
                    <IoCodeSlashOutline size={20}/>
                    <span><a target="_blank" rel="noopener noreferrer" href={codeLink}>Code</a></span>
                  </button>
                    
                    { hasPage !== "" && 
                      <>
                        <button className="text-slate-50 flex  bg-slate-500 p-2 mt-9 items-center justify-center space-x-2"> 
                          <FiEye size={20}/> 
                          <span><a target="_blank"  href={hasPage}>Live</a></span>
                        </button>
                      </>
                    }
                  </div>
                </Fade>
            </Slide>
          </div>
        </div>
    </div>
    )
}

export default ProjectItem
