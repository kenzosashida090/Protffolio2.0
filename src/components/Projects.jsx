
import { motion } from "motion/react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "React Hotel Project",
    description:"React Hotel is a web application designed to manage hotel operations efficiently.It includes an admin dashboard where employees can create, update, and delete cabins (rooms), as well as manage bookings.",
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
  {
    title: "Markdown MD Project",
    description:"Visualize all your travels into the web app WorldWise with an interactive map.",
    codeLink:"https://github.com/kenzosashida090/WorldWiseProject",
    path:"markdown-icon.jpg"
  },
  {
    title: "REST API Stripe",
    description:"This a RESTful API which involves payment methods, subscriptions and authentication using Stripe. Users also can request a refund. This project was design to serve a Doctors appointemnt",
    codeLink:"https://github.com/kenzosashida090/WorldWiseProject",
    path:"api.png"
  },

]

function Projects() {

    return (
<motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 40, damping: 14, mass: 1.2 }}
  id="projects"
  className="dark:bg-slate-800"
>
  <h1 className="sm:text-7xl text-5xl font-sans font-bold mb-8 text-center">
    Projects
  </h1>

  <div
    className="
      grid 
      grid-cols-3
     
      auto-rows-min
      gap-8
      p-8
      place-items-center
    "
  >
   

    {projects.map(el => (
      <ProjectItem
        key={el.title}
        title={el.title}
        description={el.description}
        codeLink={el.codeLink}
        hasPage={el?.hasPage}
        path={el.path}
      />
    ))}
  </div>
</motion.section>
    )
}

export default Projects
