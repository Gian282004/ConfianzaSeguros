import { Carrousel } from '../components/Carrousel.tsx'
import { FrecuentAskedQuestions } from '../components/Faq.tsx'
import { Hero } from '../components/Hero.tsx'
import { Products } from '../components/Products.tsx'
import './ContactPage.css'
export function HomePage() {
    return (
        <>
            <Hero></Hero>
            <Products></Products>
            <Carrousel></Carrousel>
            <FrecuentAskedQuestions></FrecuentAskedQuestions>
        </>

    )
}