import { useEffect, useState } from "react"

 export function UseHeaderScrollVisibility()
 {
     const [isHeaderVisible, setIsHeaderVisible] = useState(true)


    useEffect(() => {
        
        let previousScroll = window.scrollY

        const handleScroll = () => {
            const currentScroll = window.scrollY
            if (currentScroll > previousScroll) {
                setIsHeaderVisible(false)
            }
            else {
                setIsHeaderVisible(true)
            }
            previousScroll = currentScroll
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  return isHeaderVisible
 }
 

