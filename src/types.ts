import { categories } from "./consts"

export const Path={
    INICIO:'/',
    PRODUCTOS:'#productos',
    NUESTRA_HISTORIA:'/historia',
    CONTACTANOS:'/contacto',
    NOTICIAS:'/noticias',
    PREGUNTAS_FRECUENTES:'#preguntas-frecuentes'
}as const

export type CategoryKey=keyof  typeof categories