import { NavLink } from 'react-router'
import '../components/Footer.css'
import { Path } from '../types'

export function Footer()
{
    return (
       <footer className="footer-container">

    <section className="footer-main-content">

        <article className="footer-content-item footer-brand">
            <h3>Confianza Seguros</h3>
            <p>
                Protegemos lo que realmente importa.
            </p>
        </article>

        <article className="footer-content-item">
            <h3>Navegación</h3>

            <NavLink to={Path.INICIO}>Inicio</NavLink>
            <NavLink to={Path.PRODUCTOS}>Productos</NavLink>
            <NavLink to={Path.SINIESTROS}>Siniestros</NavLink>
            <NavLink to={Path.NUESTRA_HISTORIA}>Nuestra historia</NavLink>
            <NavLink to={Path.CONTACTANOS}>Contactanos</NavLink>
        </article>

        <article className="footer-content-item">
            <h3>Contacto</h3>
            <p>Mar del Plata, Buenos Aires</p>
            <p>+54 2234475667</p>
            <p>segurosmartinballesteros@gmail.com</p>
        </article>

        <article className="footer-content-item">
            <h3>Productores Asesores</h3>
            <p>Martin Ballesteros</p>
            <small>Matrícula SSN N.º 44323</small>
            <p>Nayla Fernández</p>
            <small>Matrícula SSN N.º 44323</small>
        </article>

    </section>

    <section className="footer-copyright">
        <small>
            © 2026 Confianza Seguros. Todos los derechos reservados.
        </small>
    </section>

</footer>
    )
}