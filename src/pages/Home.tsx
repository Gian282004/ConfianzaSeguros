import { Carrousel } from '../components/Carrousel.tsx'
import { FrecuentAskedQuestions } from '../components/Faq.tsx'
import { Hero } from '../components/Hero.tsx'
import { Products } from '../components/products/Products.tsx'
import { useDocumentTitle } from '../Hooks/useDocumentTitle.tsx'
export function HomePage() {
useDocumentTitle("Inicio")
 return (
        <>
            <Hero></Hero>
            <Products></Products>
            <Carrousel></Carrousel>
            <FrecuentAskedQuestions></FrecuentAskedQuestions>
        </>

    )
}