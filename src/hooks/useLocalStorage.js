import { useEffect, useState } from "react"

function useLocalStorage(initialState, key) {
    console.log(initialState,key,"localstorage",window.matchMedia("(prefers-color-scheme: dark)").matches)
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key)
        return JSON.parse(storedValue) ?? initialState
    })
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [key,value]
)
return [value, setValue]
}

export default useLocalStorage
