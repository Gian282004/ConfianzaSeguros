import { HeaderDesktop } from "../header/HeaderDesktop.tsx"
import { HeaderMobile } from "../header/HeaderMobile.tsx"
import { useHashScroll } from "../../Hooks/UseHashScroll.tsx";
import { useIsMobile } from "../../Hooks/UseIsMobile.tsx";
import { UseHeaderScrollVisibility } from "../../Hooks/UseHeaderScrollVisibility.tsx";
export function Header() {
  const isMobile=useIsMobile()
  const isHeaderVisible=UseHeaderScrollVisibility()
  const headerClassName = isMobile 
    ? `header-mobile ${!isHeaderVisible ? "hidden" : ""}` 
    : `header ${!isHeaderVisible ? "hidden" : ""}`


       useHashScroll()
    return (
    !isMobile ? (
      <HeaderDesktop headerClassName={headerClassName} />
    ) : (
      <HeaderMobile headerClassName={headerClassName} />
    )
  )
}