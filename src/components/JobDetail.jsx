import PropTypes from 'prop-types';


const JobDetail =({comp, loc, time, long, activities}) => {
    
    return (
        <div className="flex flex-col ">
            <div className="flex space-x-2 items-center font-semibold  antialiased dark:text-white ">
                <p className="font-semibold text-slate-800 antialiased dark:text-white text-sm md:text-md flex-shrink-0">{comp}</p>
                <div className="w-2 h-2 dark:bg-blue-200/40 bg-slate-600 rounded-full hidden md:block"></div>
                <p className="font-semibold text-slate-800 antialiased dark:text-white   ">{loc}</p>
                <div className="w-2 h-2 dark:bg-blue-200/40 bg-slate-600 rounded-full hidden md:block"></div>
                <p  className="ffont-semibold text-slate-800 antialiased dark:text-white">{time}</p>
            </div>
            <div>
                <p>{long}</p>
            </div>
            <ul className='px-5 list-disc text-slate-700  dark:text-stone-400'>
                {
                        activities.map((el)=><li key={el}>{el}</li>
                        // <li>HGola</li>
                    )
                }
                {/* <li>Develop responsive design</li>
                <li>Maintain Saas</li>
                <li>Architected the product's front-end structure</li>
                <li>Acomplished the development of sofisticated UI/UX design</li> */}
            </ul>
        </div>
    )
}

JobDetail.propTypes = {
    comp: PropTypes.string,
    loc: PropTypes.string,
    time: PropTypes.string,
    long: PropTypes.string,
    activities:PropTypes.array
}
export default JobDetail