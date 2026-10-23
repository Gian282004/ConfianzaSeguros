import type { CategoryKey } from "../../types";
export const CATEGORY_META: Record<
  CategoryKey,
  { eyebrow: string; description: string; previewCount: number }
> = {
  familia: {
    eyebrow: "Personas y hogar",
    description: "Protegé lo que más querés: tu familia, tu casa y tu patrimonio.",
    previewCount: 6,
  },
  empresas: {
    eyebrow: "Negocios",
    description: "Cobertura integral para tu empresa, tu personal y tu operación.",
    previewCount: 4,
  },
  agro: {
    eyebrow: "Campo y producción",
    description: "Seguros pensados para el campo: maquinaria, hacienda y cosecha.",
    previewCount: 4,
  },
};