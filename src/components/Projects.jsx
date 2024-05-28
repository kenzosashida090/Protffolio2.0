

function Projects() {
    return (
        <section id="projects" className="min-h-screen text-center">
            <h1 className="text-5xl">Projects</h1>
            <div className=" grid grid-cols-2 gap-5">
                <div className="flex items-center justify-center flex-col">
                <img className="h-30" src="../../hotel.jpg" alt="hotel" />
                <p>React Hotel</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                <img className="h-72" src="../../pizza.jpg" alt="hotel" />
                <p>Pizza React</p>
                </div>
                <div>3</div>
                <div>4</div>
            </div>
        </section>
    )
}

export default Projects
