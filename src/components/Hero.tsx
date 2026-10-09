import { useEffect, useState } from 'react';
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

const [phraseIndex, setPhraseIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [isDeleting, setIsDeleting]=useState(false)
const [isWaiting, setIsWaiting]=useState(false)




useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (isWaiting) {
        const timer = setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(true);
        }, 1500);

        return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {

        if (!isDeleting) {

            if (charIndex < currentPhrase.length) {
                setCharIndex(prev => prev + 1);
            } else {
                setIsWaiting(true);
            }

        } else {

            if (charIndex > 0) {
                setCharIndex(prev => prev - 1);
            } else {
                setIsDeleting(false);
                setPhraseIndex(prev => (prev + 1) % phrases.length);
            }

        }

    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);

}, [charIndex, phraseIndex, isDeleting, isWaiting]);


    return (
<section className="hero-background">
  <div className='hero-content'>
    <h1>La tranquilidad de saber que estás <strong>bien protegido.</strong></h1>
    <p className='typing-content'>
      {phrases[phraseIndex].slice(0, charIndex)}
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

