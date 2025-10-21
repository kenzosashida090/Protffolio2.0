
import PropTypes from 'prop-types';

ProjectItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    hasPage:PropTypes.string,
    codeLink:PropTypes.string,
    path:PropTypes.string
}

function ProjectItem({title,description, path}) {
  return (
    <div  className="flex items-center bg-slate-300 dark:bg-slate-900 justify-center max-w-screen-md mx-auto p-2 rounded-2xl">
      <img className="h-20 w-20 rounded-2xl " src={`../../${path}`} alt="hotel" />
      <div className="sm:w-72 h-24 md:w-96 flex flex-col items-start px-5 text-left justify-center">
      <h3 className="text-xl text-slate-800 dark:text-stone-400 font-semibold ">{title}</h3>
      <p className="text-sm text-slate-800 dark:text-stone-400">{description}</p>
      </div>
      {/* <div className="relative text-center flex items-center justify-center group overflow-hidden">
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
        </div> */}
         
    </div>
    )
}

export default ProjectItem
