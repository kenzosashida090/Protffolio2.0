// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";
import { FaRegFilePdf } from "react-icons/fa6";

function Home() {
  const onButtonClick = () => {
    const pdfUrl = "./KASH_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "KASH_CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
    return (
<section id='home' className='min-h-screen  flex flex-col items-center justify-center bg-slate-200 dark:bg-slate-800 transition-colors duration-500 ease-in-out'>

  <h1 className="sm:text-7xl text-5xl text-center  text-stone-700 my-4 dark:text-stone-400">
    Hello! I&apos;m <span className='font-bold'>Kenzo</span>.
  </h1>
  <p className='text-4xl text-stone-700 dark:text-stone-400 '>Software Engineer</p>
  <div className='max-w-[50rem] mt-5  px-4'>
    <p className='text-xl px-3 text-slate-700 dark:text-stone-400 '>
      I am an enthusiastic developer with a passion for creating engaging user experiences.
      With a strong foundation in <span className='font-semibold'>[JavaScript, React, Python, MySQL, MongoDB]</span>.
      I specialize in building intuitive, user-friendly applications that solve real-world problems. My journey in software development is driven by a love for innovation and a desire to constantly improve my skills.
    </p>
  </div>
  <div className='flex flex-row space-x-3 my-10'>

  <button onClick={onButtonClick} className="bg-red-400 dark:bg-red-600 flex text-stone-50 space-x-2  justify-center items-center p-2 rounded-full">
  <FaRegFilePdf size={25}/> <span className="">Download Resume</span>
  </button> 
  </div>
</section>
    )
}

export default Home
