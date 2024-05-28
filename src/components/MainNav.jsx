function MainNav() {
    return (
        <header className="flex items-center justify-center bg-slate-200 ">
            <ul className="flex space-x-20 text-2xl my-10" onClick={(e)=> {
                e.preventDefault()
                const target = e.target
                const id = target.getAttribute("href")?.replace("#","")
                const element = document.getElementById(id)
                element?.scrollIntoView({behavior: "smooth"})
            }}>
                <li className="vibrate"><a href="#home">Home</a></li>
                <li className="vibrate"><a href="#projects">Projects</a></li>
                <li className="vibrate">Contact</li>
            </ul>
        </header>
    )
}

export default MainNav
