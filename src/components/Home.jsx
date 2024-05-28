import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { IoDownloadOutline } from "react-icons/io5";
function Home() {
    return (
<section id='home' className='min-h-screen  flex flex-col items-center  bg-slate-200'>
  <img className='h-46 hidden lg:block w-96 rounded-full mt-20' src='/beavios.jpg' alt='user_photo'/>
  <h1 className="sm:text-7xl text-5xl text-center text-stone-700 my-4">
    Hello! I&apos;m <span className='font-bold'>Kenzo</span>.
  </h1>
  <p className='text-3xl text-stone-700'>Software Engineer</p>
  <div className='max-w-[50rem] mt-3  px-4'>
    <p className='text-xl px-3'>
      I am an enthusiastic developer with a passion for creating engaging user experiences.
      With a strong foundation in <span className='font-semibold'>[JavaScript, React, Python, MySQL, MongoDB]</span>.
      I specialize in building intuitive, user-friendly applications that solve real-world problems. My journey in software development is driven by a love for innovation and a desire to constantly improve my skills.
    </p>
  </div>
  <div className='flex flex-row space-x-3 my-10'>
  <IconContext.Provider value={{color:"#1f2937", size:"43px"}}>

    <a href="https://github.com/kenzosashida090">
        <FaGithub size={43}  />
    </a>
    <a href="https://github.com/kenzosashida090">
        <FaLinkedin size={43}/>
    </a>
  </IconContext.Provider>
  <button className="bg-red-400 flex text-stone-50 space-x-2  justify-center items-center p-2 rounded-full">
  <IoDownloadOutline size={30}/> <span className="">Download Resume</span>
  </button> 
  </div>
</section>
    )
}

export default Home
