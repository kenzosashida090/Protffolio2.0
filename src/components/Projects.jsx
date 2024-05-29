
import { Fade, Slide } from "react-awesome-reveal"
import { IoCodeSlashOutline } from "react-icons/io5";

function Projects() {

    return (
        <section id="projects" className="min-h-screen text-center dark:bg-slate-800 transition-colors duration-500 ease-in-out ">
            <h1 className="text-5xl vibrate dark:text-stone-400 mb-20">Projects</h1>
            <div className=" grid md:grid-cols-[auto_auto] sm:grid-cols-[auto] sm:gap-10 gap-2 mt-8 w-auto mx-auto">
              <div  className="flex items-center justify-center flex-col space-y-7">
                  <div className="relative text-center flex items-center justify-center group overflow-hidden">
                    <img className="h-30 hover:blur-sm  " src="../../hotel.jpg" alt="hotel" />
                    <div className="absolute flex flex-col justify-center items-center left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500 "> 
                      <Slide cascade>
                          <p className=" text-slate-50 text-2xl" >React Hotel Project</p>
                          <Fade cascade delay={500} damping={0.02}>
                            <p className=" text-slate-50 mt-8" >React Hotel is a small boutique hotel with 8 luxurious wooden cabains. Book your cabin, update and delete. Users of the app are employees, that means that new users need to be signed up by a employee. Users can upload an avatar and change their name.</p>
                          </Fade>
                          <Fade cascade delay={1200} damping={0.02}>
                            <button className="text-slate-50 flex border-lime-300 border-10 bg-slate-500 p-2 mt-9 items-center justify-center space-x-2"> 
                              <IoCodeSlashOutline size={20}/>
                              <span><a target="_blank" rel="noopener noreferrer" href="https://github.com/AbdulrahmanAlsharif/">Code</a></span>
                            </button>
                          </Fade>
                      </Slide>
                    </div>
                  </div>
              </div>
                <div  className="flex items-center justify-center flex-col space-y-7">
                <div className="relative text-center flex items-center justify-center group overflow-hidden">
                <img  className="h-96 hover:blur-sm  " src="../../pizza.jpg" alt="hotel" />
               <div className="absolute flex flex-col justify-center items-center left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500 "> 
               <Slide cascade>

               <p className=" text-slate-50 text-2xl" >React Pizza Project</p>
               <Fade cascade delay={500} damping={0.02}>
               <p className=" text-slate-50 mt-8" > Your go-to React app for pizza perfection! 🍕 Powered by React and tailored with Redux Tool Kit, React Pizza offers a seamless ordering experience. With the magic touch of Tailwind CSS, our interface is sleek and responsive. Order, customize, and track your pizza journey with Pizza React – where technology meets taste!</p>
               </Fade>
               <Fade cascade delay={1200} damping={0.02}>
               <button className="text-slate-50 flex border-lime-300 border-10 bg-slate-500 p-2 mt-9 items-center justify-center space-x-2"> 
               <IoCodeSlashOutline size={20}/>
               <span>
                 <a target="_blank" rel="noopener noreferrer" href="https://github.com/AbdulrahmanAlsharif/">Code</a>
               </span>
               </button>
               </Fade>
               </Slide>
               </div>
               
                </div>
                </div>
                <div  className="flex items-center justify-center flex-col space-y-7">
                <div className="relative text-center flex items-center justify-center group overflow-hidden">
                  <img className="h-30 hover:blur-sm  " src="../../map.jpg" alt="hotel" />
                  <div className="absolute flex flex-col justify-center items-center left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500 "> 
                    <Slide cascade>
                        <p className=" text-slate-50 text-2xl" >World Wise Project</p>
                        <Fade cascade delay={500} damping={0.02}>
                          <p className=" text-slate-50 mt-8" > Your go-to React app for pizza perfection! 🍕 Powered by React and tailored with Redux Tool Kit, React Pizza offers a seamless ordering experience. With the magic touch of Tailwind CSS, our interface is sleek and responsive. Order, customize, and track your pizza journey with Pizza React – where technology meets taste!</p>
                        </Fade>
                        <Fade cascade delay={1200} damping={0.02}>
                          <button className="text-slate-50 flex border-lime-300 border-10 bg-slate-500 p-2 mt-9 items-center justify-center space-x-2"> 
                            <IoCodeSlashOutline size={20}/>
                            <span><a target="_blank" rel="noopener noreferrer" href="https://github.com/AbdulrahmanAlsharif/">Code</a></span>
                          </button>
                        </Fade>
                    </Slide>
                  </div>
                </div>
            </div>
                <div  className="flex items-center justify-center flex-col space-y-7">
                <div className="relative text-center flex items-center justify-center group overflow-hidden">
                  <img className="h-30 hover:blur-sm  " src="../../hotel.jpg" alt="hotel" />
                  <div className="absolute flex flex-col justify-center items-center left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500 "> 
                    <Slide cascade>
                        <p className=" text-slate-50 text-2xl" >React Hotel Project</p>
                        <Fade cascade delay={500} damping={0.02}>
                          <p className=" text-slate-50 mt-8" > Your go-to React app for pizza perfection! 🍕 Powered by React and tailored with Redux Tool Kit, React Pizza offers a seamless ordering experience. With the magic touch of Tailwind CSS, our interface is sleek and responsive. Order, customize, and track your pizza journey with Pizza React – where technology meets taste!</p>
                        </Fade>
                        <Fade cascade delay={1200} damping={0.02}>
                          <button className="text-slate-50 flex border-lime-300 border-10 bg-slate-500 p-2 mt-9 items-center justify-center space-x-2"> 
                            <IoCodeSlashOutline size={20}/>
                            <span><a target="_blank" rel="noopener noreferrer"  href="https://github.com/AbdulrahmanAlsharif/">Code</a></span>
                          </button>
                        </Fade>
                    </Slide>
                  </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Projects
