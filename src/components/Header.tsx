import { Link, NavLink, useLocation } from "react-router"
import '../components/Header.css'
import { navItems } from "../consts";
import { Path } from "../types";

import logo from "../assets/logo.png";
import { useEffect, useRef, useState } from "react";
export function Header() {
    const location = useLocation();
    const linksRef = useRef<(HTMLElement | null)[]>([]);
    const [indicator, setIndicator] = useState({
        left: 0,
        width: 0
    })

    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 1028px)").matches
);

useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1028px)");

    function handleChange(event: MediaQueryListEvent) {
        setIsMobile(event.matches);
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => {
        mediaQuery.removeEventListener("change", handleChange);
    };
}, []);


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



    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);

            element?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [location]);

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
        <>
           
           {!isMobile &&  <header className={headerClassName}>
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
                                    <NavLink
                                        to={item.path}
                                        end={item.path === "/"}
                                        className={({ isActive }) => {
                                            if (item.path === `/${Path.PRODUCTOS}`) {
                                                return location.hash === Path.PRODUCTOS ? "active" : "";
                                            }

                                            return isActive && !location.hash ? "active" : "";
                                        }}
                                    >
                                        {item.name}
                                    </NavLink>
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

            </header>}

        </>

    )
}