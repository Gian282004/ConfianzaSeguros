import {  useState } from "react";
import "./Contact.css";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    try {
      const response = await fetch("/.netlify/functions/send-mail", {
        method: "POST",
        body: JSON.stringify({
          nombre: form.get("nombre"),
          apellido: form.get("apellido"),
          tel: form.get("telefono"),
          email: form.get("email"),
          mensaje: form.get("mensaje"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario");
      }

      setStatusMessage("¡Mensaje enviado con éxito!");
      formElement.reset(); // Limpia los campos
    } catch (error) {
      console.error(error);
      setStatusMessage("Hubo un error al enviar la consulta. Inténtalo nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="form-container">
      <form className="contact-form"  onSubmit={handleSubmit}>
        <fieldset className="form-content" disabled={isSubmitting}>
          <legend>Contacto</legend>

          <p className="form-description">
            ¿Tenés alguna consulta? Completá el formulario y nos pondremos en contacto con vos.
          </p>

          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" id="nombre" placeholder=" " required  />
            </div>

            <div className="form-field">
              <label htmlFor="apellido">Apellido</label>
              <input type="text" name="apellido" id="apellido" placeholder=" " required />
            </div>

            <div className="form-field">
              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" name="telefono" id="telefono" placeholder=" " required />
            </div>

            <div className="form-field">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" name="email" id="email" placeholder=" " required />
            </div>

            <div className="form-field form-field--full">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea name="mensaje" id="mensaje" placeholder=" " required />
            </div>
          </div>

          <button className="form-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar consulta"}
          </button>

          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </fieldset>
      </form>
        
    </section>

  
  );
}