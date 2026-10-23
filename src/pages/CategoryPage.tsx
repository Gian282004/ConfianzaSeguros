import {Navigate, useParams } from "react-router";
import "../components/products/Product.css";
import { categories } from "../consts";
import { Path, type CategoryKey } from "../types";
import { CATEGORY_META } from "../components/products/CategoryMeta";
import { CtaBanner } from "../components/products/CTaBanner";
import { waLink } from "../utils/WhatsappNumber";
import { AppNavLink } from "../components/AppNavLink";
export function CategoryPage() {
  const { category } = useParams();
  if (!category || !(category in categories)) {
    return <Navigate to="/productos" replace />;
  }
  const id = category as CategoryKey;
  const cat = categories[id];
  const meta = CATEGORY_META[id];
  return (
    <main className="products-page">
      <section className="category-hero">
        <AppNavLink name="   ← Todas las soluciones" path={`/${Path.PRODUCTOS}`} className="back-link"/>
       
       
        <span className="eyebrow">{meta.eyebrow}</span>
        <h1>{cat.title}</h1>
        <p>{meta.description}</p>
      </section>
      <section className="category-list">
        <ul className="category-grid">
          {cat.items.map((item, i) => (
            <li
              key={item}
              className="item-card"
              style={{ ["--i" as string]: i }}
            >
              <h3>{item}</h3>
              <a
                href={waLink(`Hola, busco asesoramiento sobre ${item}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="item-card__link"
              >
                Consultar por WhatsApp →
              </a>
            </li>
          ))}
        </ul>
      </section>
      <CtaBanner />
    </main>
  );
}
