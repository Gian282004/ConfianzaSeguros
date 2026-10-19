import { useEffect, useRef} from 'react';
import '../components/Hero.css'
import logo from "../assets/logo.png";
import { NavLink } from 'react-router';
import { Path } from '../types';
export function Hero()
{
const phrases = [
  'Tu familia.',
  'Tu futuro.',
  'Tu auto.',
  'Tu hogar.',
  'Tu negocio.',
  'Tu industria.',
  'Tu campo.'
];

const typingRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId: NodeJS.Timeout;

        const animate = () => {
            const currentPhrase = phrases[phraseIndex];

            if (!typingRef.current) return;

            if (!isDeleting) {
                // Escribiendo
                typingRef.current.textContent = currentPhrase.slice(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentPhrase.length) {
                    // Pausa antes de empezar a borrar
                    isDeleting = true;
                    timeoutId = setTimeout(animate, 1500);
                    return;
                }
                timeoutId = setTimeout(animate, 100);
            } else {
                // Borrando
                typingRef.current.textContent = currentPhrase.slice(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    timeoutId = setTimeout(animate, 500);
                    return;
                }
                timeoutId = setTimeout(animate, 50);
            }
        };

        timeoutId = setTimeout(animate, 100);

        return () => clearTimeout(timeoutId);
    }, []);


    return (
<section className="hero-background">
  <div className='hero-content'>
    <h1>La tranquilidad de saber que estás <strong>bien protegido.</strong></h1>
    <p translate='no' className='typing-content notranslate'>
      <span ref={typingRef}></span>
    </p>
    <p className='hero-description'>
      Asesoramiento personalizado para encontrar el seguro que necesitás.
    </p>
    
    <div className='hero-actions'>
      <NavLink to={Path.CONTACTANOS} className="btn btn-primary">Contactarnos</NavLink>
      <a href={Path.PRODUCTOS} className="btn btn-secondary">Ver productos</a>
    </div>
  </div>
  <div className='logo-container'>
    <img src={logo} alt="Logo de Confianza seguros" />
  </div>
</section>
    )
}

