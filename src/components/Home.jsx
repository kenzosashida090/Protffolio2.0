// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";
import { FaRegFilePdf } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

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
              <section id='home' className=' flex gap-11 space-y-24  p-x justify-center min-h-[80vh] transition-colors duration-500 ease-in-out '>
                <div className="flex flex-col gap-4 ">
                <h1 className="sm:text-7xl text-5xl text-center  font-sans ">
                  Hi!, I&apos;m <span className='font-bold sm:text-7xl text-6xl text-orange-600 '>Kenzo</span>.
                </h1>
                <div className='max-w-[50rem] md:mt-4'>
                  <p className='px-3 text-slate-700  dark:text-stone-400 font-custom text-xl/9'>
                    A full-stack developer with a passion for creating engaging user experiences.
    
                    I specialize in building intuitive, user-friendly applications using React ecosystem. Currently, I&apos;m leading the front-end team at <span className="font-semibold">@EndToEndManagment</span>.
                  </p>
                </div>
          
                <div className="border-2 w-72 border-indigo-200/20  mt-2 ml-2  "></div>

                <div className="pt-4 px-2 flex-col space-y-2">
                  <h1 className="font-semibold text-slate-700 text-xl dark:text-stone-400">Find me on</h1>
                  <div className="flex space-x-4">
                    <Link className="flex items-center gap-1">
                      <CiLinkedin className="text-2xl" />
                      <p>Linkedin</p>
                    </Link>
                    <Link className="flex items-center gap-1">
                      <FaGithub  className="text-2xl" />
                      <p>Github</p>
                    </Link>
                  </div>
                </div>
                <div className="pt-4 text-center sm:text-left px-2 ">
                  <h1 className="font-semibold text-slate-700 text-xl dark:text-stone-400 ">Contact</h1>
                  <p className="md:text-xl/9 text-sm/7">You can find me out anytime at <span className="font-semibold">kenzosashida5@gmail.com</span></p>
                </div>
                </div>
                
              </section>
    )
}

export default Home
