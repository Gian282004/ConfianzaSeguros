import { useState } from "react";
import './Faq.css'
import { Path } from "../types";
 const FAQ_DATA = {
  siniestro_accidente: {
    titulo: "¿Qué debo hacer inmediatamente en caso de sufrir un accidente de tránsito?",
    paragraph: "Tomá los datos del otro conductor (nombre, DNI, teléfono, patente y aseguradora), sacá fotos de los vehículos y del lugar, y realizá la denuncia administrativa en tu compañía dentro de las 72 horas hábiles."
  },
  tiempo_denuncia: {
    titulo: "¿Cuánto tiempo tengo para denunciar un siniestro?",
    paragraph: "En Argentina, el plazo legal según la Ley de Seguros N° 17.418 es de 3 días hábiles (72 horas) desde que ocurrió el hecho o desde que tuviste conocimiento del mismo."
  },
  diferencia_coberturas: {
    titulo: "¿Cuál es la diferencia entre un Seguro Contra Terceros y un Todo Riesgo?",
    paragraph: "El seguro contra Terceros cubre los daños que tu vehículo pueda causar a otras personas o a sus bienes. El seguro Todo Riesgo incluye todo lo anterior más la reparación de los daños de tu propio vehículo en caso de accidente, sujeto a una franquicia."
  },
  beneficio_pas: {
    titulo: "¿Por qué me conviene contratar a través de un Productor Asesor de Seguros (PAS)?",
    paragraph: "El Productor Asesor analiza tus necesidades para ofrecerte la mejor cobertura al mejor precio, y te acompaña gestionando los reclamos ante un siniestro sin costo adicional."
  },
  documentacion_circular: {
    titulo: "¿Qué documentación es obligatoria para circular en Argentina?",
    paragraph: "Debés llevar DNI, Licencia de conducir vigente, Cédula verde (o azul si no sos el titular), comprobante del Seguro obligatorio en vigencia y la VTV/RTO al día según tu jurisdicción."
  },
  tercero_sin_seguro: {
    titulo: "¿Qué sucede si el otro vehículo involucrado en el accidente no tiene seguro?",
    paragraph: "Si tenés cobertura Todo Riesgo o Destrucción Total, tu aseguradora se hará cargo según los términos de tu póliza. De lo contrario, realizaremos el reclamo administrativo o legal directamente contra el titular del vehículo responsable."
  }
};

export function FrecuentAskedQuestions()
{
 // Guardamos la CLAVE seleccionada (por ej: 'siniestro_accidente' o null)
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    // Si ya está abierto lo cierra, sino abre el que clickeaste
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
  <section id={Path.PREGUNTAS_FRECUENTES.slice(1)}className="faq-section">
      <div className="faq-header">
        <h2 className="faq-title">Preguntas Frecuentes</h2>
        <p className="faq-subtitle">
          Resolvemos tus dudas principales sobre coberturas, trámites y siniestros.
        </p>
      </div>

      <div className="faq-container">
        {Object.entries(FAQ_DATA).map(([key, item]) => {
          const isOpen = activeKey === key;

          return (
            <div key={key} className={`faq-item ${isOpen ? "open" : ""}`}>
              <button
                className="faq-question"
                onClick={() => handleToggle(key)}
                aria-expanded={isOpen}
              >
                <span>{item.titulo}</span>
                <span className="faq-icon" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="faq-answer">
                  <p>{item.paragraph}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}