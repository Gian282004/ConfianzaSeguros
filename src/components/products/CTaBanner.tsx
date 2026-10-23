import { waLink } from "../../utils/WhatsappNumber";
import { AppNavLink } from "../AppNavLink";
import { Path } from "../../types";
interface Props {
  title?: string;
  text?: string;
}
export function CtaBanner({
  title = "¿No encontrás lo que buscás?",
  text = "Contanos tu caso y te armamos una cotización a medida con las mejores aseguradoras.",
}: Props) {
  return (
    <section className="cta-banner">
      <div className="cta-banner__text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-banner__actions">
        <AppNavLink name="Pedir cotización" path={Path.CONTACTANOS} className="btn btn--primary"/>
     
        <a
          href={waLink("Hola, quisiera asesoramiento sobre seguros")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--whatsapp"
        >
          Hablar por WhatsApp
        </a>
      </div>
    </section>
  );
}