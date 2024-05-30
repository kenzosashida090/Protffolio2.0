
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "React Hotel Project",
    description:"React Hotel is a small boutique hotel with 8 luxurious wooden cabains. Book your cabin, update and delete. Users of the app are employees, that means that new users need to be signed up by a employee. Users can upload an avatar and change their name.",
    codeLink:"https://github.com/kenzosashida090/React-Hotel",
    hasPage: "https://sashida-hotel.netlify.app"
  },
  {
    title: "React Pizza Project",
    description: "Your go-to React app for pizza perfection! 🍕 Powered by React and tailored with Redux Tool Kit, React Pizza offers a seamless ordering experience. With the magic touch of Tailwind CSS, our interface is sleek and responsive. Order, customize, and track your pizza journey with Pizza React – where technology meets taste!",
    codeLink: "https://github.com/kenzosashida090/pizza-react",
  },
  {
    title: "World Wise Project",
    description:"Small react project. Visualize all your travels into the web app WorldWise that includes an interactive map. This project use the react hook context and only the good stuff c;.",
    codeLink:"https://github.com/kenzosashida090/WorldWiseProject"
  },
]
function Projects() {

    return (
        <section id="projects" className="min-h-screen text-center dark:bg-slate-800 transition-colors duration-500 ease-in-out ">
          <h1 className="text-5xl vibrate dark:text-stone-400 mb-20">Projects</h1>
            <div className=" grid md:grid-cols-[auto_auto] sm:grid-cols-[auto] sm:gap-10 gap-2 mt-8 w-auto mx-auto">
              {projects.map((el)=><ProjectItem title={el.title} description={el.description} codeLink={el.codeLink} hasPage={el?.hasPage} key={el.title} />)}
            </div>
        </section>
    )
}

export default Projects
