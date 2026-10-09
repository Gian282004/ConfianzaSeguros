
import {Route, Routes } from 'react-router'
import {Header} from './components/Header.tsx'
import {Footer} from './components/Footer.tsx'

import './App.css'
import { HomePage } from './pages/Home.tsx'
import { ContactPage } from './pages/Contact.tsx'
function App() {


  return (
    <>
    <div className='content-container'>
    <Header/>
    <main>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contacto' element={<ContactPage/>}/>
    </Routes>
     </main>
     <Footer/>
         </div>
    </>
  )
}

export default App
