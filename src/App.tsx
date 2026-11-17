
import {Route, Routes } from 'react-router'
import {Header} from './components/header/Header.tsx'
import {Footer} from './components/Footer.tsx'

import './App.css'
import { HomePage } from './pages/Home.tsx'
import { ContactPage } from './pages/Contact.tsx'
import { ScrollToTop } from './components/ScrollTop.tsx'
import { CategoryPage } from './pages/CategoryPage.tsx'
import { HistoriaPage } from './pages/HistoriaPage.tsx'
function App() {


  return (
    <>
    <div className='content-container'>
    <Header/>
    <main>
      <ScrollToTop/>
    <Routes>
      <Route path="/productos/:category" element={<CategoryPage />} />
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contacto' element={<ContactPage/>}/>
      <Route path='/historia' element={<HistoriaPage/>}/>
    </Routes>
     </main>
     <Footer/>
         </div>
    </>
  )
}

export default App
