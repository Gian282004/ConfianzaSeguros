import { Link,  useLocation } from "react-router"
import '../header/HeaderDesktop.css'
import { navItems } from "../../consts";
import { Path } from "../../types";

import logo from "../../assets/logo.png";
import { useEffect, useRef, useState } from "react";
import { scrollToHash } from "../../utils/scrollToHash";
import { AppNavLink } from "../AppNavLink";
export function HeaderDesktop() {
    const location = useLocation();
    const linksRef = useRef<(HTMLElement | null)[]>([]);
    const [indicator, setIndicator] = useState({
        left: 0,
        width: 0
    })

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


    function updateIndicator() {
        let active;

        if (location.hash) {
            active = navItems.findIndex(
                item => item.path === `/${location.hash}`
            );
        } else {
            active = navItems.findIndex(
                item => item.path === location.pathname
            );
        }

        const element = linksRef.current[active];

        if (element) {
            const elementRect = element.getBoundingClientRect();

            setIndicator({
                left: elementRect.left,
                width: elementRect.width
            });
        }
    }

    useEffect(() => {
        updateIndicator()

        window.addEventListener('resize', updateIndicator)

        return () =>
            window.removeEventListener('resize', updateIndicator)

    }, [location]);

    const headerClassName = `header ${!isHeaderVisible ? 'hidden' : ''}`
    return (


        <header className={headerClassName}>
            <div>
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
            </div>
            <div>
                <nav>
                    <ul className="header-list-items">
                        {navItems.map((item, index) => (
                            <li
                                key={item.path}
                                ref={(el) => { linksRef.current[index] = el }}
                                className="header-list-item"
                            >
                                <AppNavLink 
                                name={item.name} 
                                path={item.path} 
                                onClick={() => {
                                    if (location.hash) {
                                        scrollToHash(Path.PRODUCTOS);
                                    }
                                }} />
                            </li>
                        ))}
                    </ul>

                    <span
                        className="indicator"
                        style={{
                            transform: `translateX(${indicator.left}px)`,
                            width: `${indicator.width}px`
                        }}
                    />
                </nav>
            </div>
            <div>
                <Link to={Path.PREGUNTAS_FRECUENTES}><button className="header-button">Preguntas frecuentes</button></Link>
            </div>

        </header>
    )
}