import { AnimatePresence, motion, useInView } from "motion/react"
import { useRef } from "react"


export const Transition = ()=>{
    const ref = useRef(null)
    
const isVisible = useInView(ref)
console.log("vbisible", isVisible)
    return(
        <div style={container}>
            <AnimatePresence initial={true}>
                {true ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0, x:-900 }}
                        animate={{ opacity: 1, scale: 1, x:0}}
                        exit={{ opacity: 1, scale: 1 }}
                        style={box}
                        key="box"
                    />
                ) : null}
            </AnimatePresence>
            
        </div>
    )
}
const container = {
    display: "flex",
    flexDirection: "column",
    width: 100,
    height: 160,
    position: "relative",
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: "10px",
}

