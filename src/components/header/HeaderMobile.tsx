import { useEffect, useRef, useState } from "react"
import '../header/HeaderMobile.css'
import logo from '../../assets/logo.png'
import { navItems } from "../../consts"
import { scrollToHash } from "../../utils/scrollToHash"
import { AppNavLink } from "../AppNavLink"

export function HeaderMobile() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const headerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const header = headerRef.current

        if (!header) return
        const observer = new ResizeObserver(([entry]) => {
            header.style.setProperty("--header-height", `${entry.borderBoxSize[0].blockSize}px`)
        })

        observer.observe(header)
        return () => {
            observer.disconnect()
        }
    }, [])

    const buttonClassName = `toggle-menu ${isMenuOpen ? 'open' : ''}`
    return (
        <header ref={headerRef} className="header-mobile">
            <button
                className={buttonClassName}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
                <svg viewBox="0 0 24 24">
                    <line className="line line-top" x1={4} y1={7} x2={20} y2={7} ></line>
                    <line className="line line-bottom" x1={4} y1={17} x2={20} y2={17} ></line>
                </svg>
            </button>

            <div className="header-logo">
                <div className="header-presentation">
                    <img
                        className="header-logo-img"
                        src={logo}
                        alt="Logo de Confianza Seguros"
                    />
                    <h3 className="header-presentation-title">Confianza Seguros</h3>
                </div>

            </div>

            <aside className={`menu-content ${isMenuOpen ? "open" : ""}`}>
                <button
                    className={buttonClassName}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                >

                </button>
                <nav>
                    <ul className="header-mobile-list-items">
                        {navItems.map((item) => (
                            <li
                                key={item.path}
                                className="header-mobile-list-item"
                            >
                                <AppNavLink name={item.name} path={item.path} onClick={() => {

                                    if (location.hash) {
                                        scrollToHash(item.path.slice(1));
                                    }
                                    setIsMenuOpen(false)
                                }} />
                            </li>
                        ))}
                    </ul>


                </nav>
            </aside>
        </header>
    )
}