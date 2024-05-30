function Contact() {
    return (
        <section id="contact" className='max-h-[80dvh]  lg:max-h-[70dvh] xlg:max-h-[20dvh]  flex flex-col items-center justify-center p-1   bg-slate-200 dark:bg-slate-800'>
                <h1 className="text-5xl vibrate  dark:text-stone-400">Contact</h1>
            <div className="mt-8 my-36  space-y-3 flex  items-center flex-col">
                <p className="dark:text-stone-400 text-2xl text-slate-800">Email</p>
                <p className="dark:text-stone-400 text-2xl text-slate-800">kenzosashida1@gmail.com</p>
                <p className="dark:text-stone-400 text-2xl text-slate-800">Github: <a target="_blank" rel="noopener noreferrer" href="https://github.com/kenzosashida090">git/kenzosashida090 </a> </p>
                <p className="dark:text-stone-400 text-2xl text-slate-800">LinkedIn: <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kenzo-alejandro-sashida-hernandez-7a9504252/">in/kenzosashida </a> </p>
            </div>
            
        </section>
    )
}

export default Contact
