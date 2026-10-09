
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import "./styles/reset.css";
import "./styles/theme.css";
import "./styles/globals.css";

import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
