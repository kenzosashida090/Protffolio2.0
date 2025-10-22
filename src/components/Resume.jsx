import { FaReact } from "react-icons/fa";
import { FaNodeJs,} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandVite } from "react-icons/tb";
import { IoLogoElectron } from "react-icons/io5";
import { SiStyledcomponents } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import JobDetail from "./JobDetail";
import { motion } from "motion/react";
const activitiesEnd = [
  "Developed fully responsive interfaces adaptable to all screen sizes.",
  "Implemented comprehensive unit tests to ensure code reliability and maintainability.",
  "Architected and structured the front-end application for scalability and performance.",
  "Delivered sophisticated UI/UX designs with a strong focus on user interaction and accessibility.",
];

const activitiesUniversal = [
  "Developed and maintained high-demand web applications with modern front-end technologies.",
  "Maintained and optimized UI/UX for a large-scale, high-traffic website.",
  "Integrated RESTful APIs and optimized data flow between front-end and back-end services.",
  "Led front-end development initiatives, ensuring consistent design systems and reusable components.",
];


const Resume =  ()=> {
    return (
         <motion.section
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness:40, damping: 14, mass: 1.2 }}
                  id='resume' 
                  className=' flex gap-11 space-y-24  md:px-10 justify-center min-h-[85vh] transition-colors duration-500 ease-in-out mx-auto '>
                        <div className="flex flex-col gap-4 mx-auto max-w-md md:max-w-4xl  px-10 md:px-4">
                        <h1 className="sm:text-7xl text-5xl text-center  font-sans font-bold ">
                            My Resume/CV
                        </h1>
                        <div className='md:mt-4 max-w-[50rem]'>
                          <p className='px-3 text-slate-700  dark:text-stone-400 font-custom text-xl/9'>
                            I&apos;m a highly skilled full-stack engineer with more than 2 years of experience building web application.
                          </p>
                        </div>
        
                        <div className="border-2 w-72 border-indigo-200/20  mt-2 ml-2 "></div>
        
                        <div className="pt-4 px-2 flex-col space-y-5 ">
                            <div>

                          <h1 className="font-semibold text-slate-700 text-xl dark:text-stone-400">Skills </h1>
                          <p>Here are the libraries, frameworks,runtime and services I have experience with. Im constantly learning new tecnhologies, this is not a complete list c:</p>
                            </div>
                          <div className="flex flex-wrap gap-3 sm:gap-4 transition-all duration-1200 ease-in">
                                <div className="flex items-center gap-1 hover:text-yellow-400 transition-all duration-1200 ease-in">
                                    <IoLogoJavascript className="text-2xl" />
                                    <p>Javascript</p>
                                </div>
                                <div className="flex items-center gap-1 hover:text-blue-400 transition-all duration-1200 ease-in">
                                    <FaReact className="text-2xl" />
                                    <p>React</p>
                                </div>
                                <div className="flex items-center gap-1 hover:text-blue-400 transition-all duration-1200 ease-in">
                                    <SiTypescript className="text-2xl  " />
                                    <p>Typescript</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <IoLogoElectron className="text-2xl" />
                                    <p>Electron</p>
                                </div>
                                <div className="flex items-center gap-1 hover:text-green-500 transition-all duration-1200 ease-in">
                                    <FaNodeJs className="text-2xl" />
                                    <p>Nodejs</p>
                                </div>
                                <div className="flex items-center gap-1 hover:text-blue-500 transition-all duration-1200 ease-in">
                                    <RiTailwindCssFill className="text-2xl " />
                                    <p>Tailwind</p>
                                </div>
                                <div className="flex items-center gap-1 hover:text-pink-500 transition-all duration-1200 ease-in">
                                    <SiStyledcomponents className="text-2xl" />
                                    <p>StyledComponents</p>
                                </div>
                                <div className="flex items-center gap-1 hover:text-slate-900 transition-all duration-1200 ease-in">
                                    <FaGithub className="text-2xl" />
                                    <p>Github</p>
                                </div>
                                <div className="flex items-center gap-1 hover:text-blue-500">
                                    <TbBrandVite className="text-2xl" />
                                    <p>Vite</p>
                                </div>
                                <div className="flex items-center gap-1 hover:text-blue-500 transition-all duration-1200 ease-in">
                                    <FaDocker className="text-2xl" />
                                    <p>Docker</p>
                                </div>
                                <div className="flex items-center gap-1 hover:text-green-500 transition-all duration-1200 ease-in">
                                    <DiMongodb className="text-2xl" />
                                    <p>MongoDB</p>
                                </div>
                                </div>
                        </div>
                        <div className="pt-4 text-center sm:text-left">
                          <h1 className="font-semibold text-slate-700 text-xl dark:text-stone-400 ">Contact</h1>
                          <p className="md:text-xl/9 text-sm/7">You can find me out anytime at <span className="font-semibold">kenzosashida5@gmail.com</span></p>
                        </div>
                        <div className="pt-4 text-center sm:text-left">
                          <h1 className="font-semibold text-slate-700 text-xl dark:text-stone-400 ">Work History</h1>
                          <div className="flex items-center space-x-2">
                          <p className="md:text-xl/9 text-sm/7">Bellow you will find a summary of my past employment experience. <span className="font-bold underline underline-offset-8">
                          Download my resume </span></p> 
                          </div>

                        </div>
                        <div className="flex w-full flex-col items-start pt-4 mb-4">
                            <div className="group flex gap-x-6">
                                <div className="relative">
                                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-500"></div><span className="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-orange-500 text-slate-800"></span>
                                </div>
                                <div className="-translate-y-1.5 pb-8 text-slate-600">
                                <p className="font-sans text-base font-bold  text-slate-800 antialiased dark:text-white">Jr Front-end Engineer.</p>
                                <JobDetail comp={"EndtoEnd Managment"} loc={"Mexico"} long={"May 2024 - Present"} time={"Full-time"} activities={activitiesEnd} />
                                </div>
                            </div>
                            <div className="group flex gap-x-6">
                                <div className="relative">
                                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-400"></div><span className="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-slate-500 text-slate-800"></span>
                                </div>
                                <div className="-translate-y-1.5 pb-8 text-slate-600">
                                <p className="font-sans text-base font-bold text-slate-800 antialiased dark:text-white">Jr Front-end Engineer.</p>
                                <JobDetail comp={"El Universal"} loc={"Mexico"} long={"Oct 2023 - Feb 2024"} time={"Full-time"} activities={activitiesUniversal} />

                                </div>
                            </div>
                            </div>
                        </div>
                        
                      </motion.section>
    )
}

export default Resume
