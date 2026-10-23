
import { Link } from "react-router";
import { categories } from "../../consts";
import type { CategoryKey } from "../../types";
import { CATEGORY_META } from "./CategoryMeta";
interface Props {
  id: CategoryKey;
}
export function CategoryCard({ id }: Props) {
  const category = categories[id];
  const meta = CATEGORY_META[id];
  const preview = category.items.slice(0, meta.previewCount);
  return (
    <Link to={`/productos/${id}`} className={`bento-card bento-card--${id}`}>
      <span className="bento-card__eyebrow">{meta.eyebrow}</span>
      <h3 className="bento-card__title">{category.title}</h3>
      <p className="bento-card__desc">{meta.description}</p>
      <ul className="bento-card__preview">
        {preview.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {category.items.length > preview.length && (
          <li className="bento-card__more">
            +{category.items.length - preview.length} más
          </li>
        )}
      </ul>
      <div className="bento-card__footer">
        <span>Ver coberturas</span>
        <span className="bento-card__arrow" aria-hidden="true">→</span>
      </div>
    </Link>
  );
}