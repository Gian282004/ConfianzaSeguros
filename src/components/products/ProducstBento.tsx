import { CategoryCard } from "./CategoryCard";
import type { CategoryKey } from "../../types";
const ORDER: CategoryKey[] = ["familia", "empresas", "agro"];
export function ProductsBento() {
  return (
    <div className="bento">
      {ORDER.map((id) => (
        <CategoryCard key={id} id={id} />
      ))}
    </div>
  );
}