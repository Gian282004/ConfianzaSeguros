import { FrecuentAskedQuestions } from '../components/Faq.tsx'
import { Hero } from '../components/Hero.tsx'
import { Products } from '../components/Products.tsx'
import './ContactPage.css'
export function HomePage() {
    return (
        <>
            <Hero></Hero>
            <Products></Products>
            <FrecuentAskedQuestions></FrecuentAskedQuestions>
        </>

    )
}