import { HeaderDesktop } from "../header/HeaderDesktop.tsx"
import { HeaderMobile } from "../header/HeaderMobile.tsx"
import { useHashScroll } from "../../Hooks/UseHashScroll.tsx";
import { useIsMobile } from "../../Hooks/UseIsMobile.tsx";
export function Header() {
  const isMobile=useIsMobile()
   
       useHashScroll()
    return (
         !isMobile ? <HeaderDesktop/> : <HeaderMobile/> 
    )
}