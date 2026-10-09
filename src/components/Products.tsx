import { useState } from "react";
import '../components/Products.css'
import { categories } from "../consts";
import type { CategoryKey } from "../types";
 

export function Products() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('familia');



  return (
    <>
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <strong>+25</strong>
            <p>Años de trayectoria</p>
          </div>
          <div className="stat-card">
            <strong>+2.000</strong>
            <p>Clientes asegurados</p>
          </div>
          <div className="stat-card">
            <strong>Multi-marca</strong>
            <p>Cotizaciones con las mejores aseguradoras</p>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE PRODUCTOS */}
      <section id="productos" className="products-section">
        <div className="products-container">
          <h2>Nuestras Soluciones</h2>

          {/* Botones de Categorías */}
          <div className="tabs-container">
            <button
              className={activeTab === 'familia' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setActiveTab('familia')}
            >
              Familia
            </button>
            <button
              className={activeTab === 'empresas' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setActiveTab('empresas')}
            >
              Empresas
            </button>
            <button
              className={activeTab === 'agro' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setActiveTab('agro')}
            >
              Agro
            </button>
          </div>

          {/* Grilla de Ítems */}
          <div className="products-grid">
            {categories[activeTab].items.map((item, index) => (
              <div key={index} className="product-card">
                <h3>{item}</h3>
                <a
                  href={`https://wa.me/2234475667?text=Hola,%20busco%20asesoramiento%20sobre%20${encodeURIComponent(item)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}