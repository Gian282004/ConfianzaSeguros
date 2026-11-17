import "./Historia.css";
import { useDocumentTitle } from "../Hooks/useDocumentTitle";

const hitos = [
  {
    anio: "Los inicios",
    titulo: "Martín en Mapfre",
    texto:
      "Martín Ballesteros trabajaba en la oficina de Mapfre Seguros, con el oficio y el trato con las personas como eje de su día a día.",
  },
  {
    anio: "El paso propio",
    titulo: "Curso de broker y cartera propia",
    texto:
      "Tras hacer el curso de broker de seguros, comenzó a despegar de a poco y a construir su propia cartera de clientes.",
  },
  {
    anio: "14+ años",
    titulo: "Crecer solo, con más de 1000 clientes",
    texto:
      "Durante más de catorce años llevó adelante el trabajo solo. El crecimiento de la cartera pedía más dedicación de la que una sola persona podía sostener.",
  },
  {
    anio: "El relevo",
    titulo: "Nayla se suma al equipo",
    texto:
      "Su hija Nayla Fernández empezó ayudándolo en tareas menores mientras cursaba la misma carrera que su padre. Ya matriculada, pasó a ocupar un rol cada vez más importante.",
  },
  {
    anio: "Hoy",
    titulo: "Más de 2000 clientes",
    texto:
      "Hoy la cartera supera los 2000 clientes, con un servicio y una atención que siguen siendo el centro de todo lo que hacemos.",
  },
];

export function Historia() {
  useDocumentTitle("Nuestra historia");

  return (
    <section className="story-section">
      <div className="story-container">
        <header className="story-header">
          <span className="story-eyebrow">Confianza Seguros</span>
          <h2 className="story-title">Nuestra historia</h2>
          <p className="story-lead">
            Todo empezó con una persona que quería hacer las cosas bien. Hoy,
            ese mismo espíritu sigue en cada cliente que atendemos.
          </p>
        </header>

        <div className="story-stats">
          <div className="story-stat">
            <span className="story-stat-value">14+</span>
            <span className="story-stat-label">años de trayectoria</span>
          </div>
          <div className="story-stat">
            <span className="story-stat-value">2000+</span>
            <span className="story-stat-label">clientes en cartera</span>
          </div>
          <div className="story-stat">
            <span className="story-stat-value">2</span>
            <span className="story-stat-label">generaciones de brokers</span>
          </div>
        </div>

        <ol className="story-timeline">
          {hitos.map((hito) => (
            <li className="story-step" key={hito.titulo}>
              <span className="story-step-year">{hito.anio}</span>
              <h3 className="story-step-title">{hito.titulo}</h3>
              <p className="story-step-text">{hito.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
