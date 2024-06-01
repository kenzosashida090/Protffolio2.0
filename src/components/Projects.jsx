
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "React Hotel Project",
    description:"React Hotel is a small boutique hotel with 8 luxurious wooden cabains.",
    codeLink:"https://github.com/kenzosashida090/React-Hotel",
    hasPage: "https://sashida-hotel.netlify.app",
    path:"hotel.jpg"
  },
  {
    title: "El Universal",
    description:"Worked as a Junior Web Developer at El Universal, a prominent news website with thousands of daily readers.",
    codeLink:"https://github.com/kenzosashida090/React-Hotel",
    hasPage: "https://sashida-hotel.netlify.app",
    path:"eluniversal.jpeg"
  },
  {
    title: "React Pizza Project",
    description: "React Pizza offers a seamless ordering experience.",
    codeLink: "https://github.com/kenzosashida090/pizza-react",
    path:"pizza.jpg"
  },
  {
    title: "World Wise Project",
    description:"Visualize all your travels into the web app WorldWise with an interactive map.",
    codeLink:"https://github.com/kenzosashida090/WorldWiseProject",
    path:"map.jpg"
  },
]
function Projects() {

    return (
        <section id="projects" className="min-h-screen text-center dark:bg-slate-800 transition-colors duration-500 ease-in-out ">
          <h1 className="text-5xl vibrate dark:text-stone-400 mb-20">Projects</h1>
            <div className=" grid grid-cols-[1fr] gap-x-0 gap-y-4 mx-auto  dark:bg-slate-800  px-3 " >
              {projects.map((el)=><ProjectItem title={el.title} description={el.description} codeLink={el.codeLink} hasPage={el?.hasPage} key={el.title} path={el.path} />)}
            </div>
        </section>
    )
}

export default Projects
