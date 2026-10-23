import "./Product.css";
import { ProductsBento } from "./ProducstBento";
import { CtaBanner } from "./CTaBanner";
const STATS = [
  { value: "+25", label: "Años de trayectoria" },
  { value: "+2.000", label: "Clientes asegurados" },
  { value: "Multi-marca", label: "Cotizaciones con las mejores aseguradoras" },
];

export function Products() {
  return (
    <main className="products">
      <section className="stats-section">
        <div className="stats-container">
          {STATS.map((s) => (
            <div key={s.label} className="stat-card">
              <strong>{s.value}</strong>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="productos" className="products-section">
        <div className="products-section__inner">
          <header className="products-section__header">
            <h2>Nuestras Soluciones</h2>
            <p>Elegí tu categoría y conocé las coberturas disponibles.</p>
          </header>
          <ProductsBento />
        </div>
      </section>
      <CtaBanner />
    </main>
  );
}