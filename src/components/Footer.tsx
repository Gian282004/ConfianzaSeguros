import '../components/Footer.css'
import { Path } from '../types'
import { scrollToHash } from '../utils/scrollToHash'
import { AppNavLink } from './AppNavLink'

export function Footer() {
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

                    <AppNavLink name="Inicio" path={Path.INICIO} />
                    <AppNavLink
                        name="Productos"
                        path={`/${Path.PRODUCTOS}`}
                        onClick={() => {
                            if (location.hash) {
                                scrollToHash(Path.PRODUCTOS);
                            }
                        }}
                    />
                     <AppNavLink
                        name="Preguntas frecuentes"
                        path={`/${Path.PREGUNTAS_FRECUENTES}`}
                        onClick={() => {
                            if (location.hash) {
                                scrollToHash(Path.PREGUNTAS_FRECUENTES);
                            }
                        }}
                    />

                    <AppNavLink name="Siniestros" path={Path.SINIESTROS} />

                    <AppNavLink
                        name="Nuestra historia"
                        path={Path.NUESTRA_HISTORIA}
                    />

                    <AppNavLink
                        name="Contactanos"
                        path={Path.CONTACTANOS}
                    />
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