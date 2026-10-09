import type { Context } from "@netlify/functions";
import nodemailer from "nodemailer";

export default async (req: Request, context: Context) => {
const body = await req.json();

const {
    nombre,
    apellido,
    tel,
    email,
    mensaje
} = body;

if (!nombre || !apellido || !tel || !email || !mensaje) {
    return new Response(
        JSON.stringify({
            message: "Faltan datos obligatorios"
        }),
        {
            status: 400,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}

const transporter = nodemailer.createTransport({
  // configuración SMTP
  auth:{
    user: "jas",
    pass:"asgfs" 
  }
  
});

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_TO,
  subject: "Nueva consulta",
  text: `
    Nombre: ${nombre}
    Apellido: ${apellido}
    Teléfono: ${tel}
    Email: ${email}

    Mensaje:
    ${mensaje}
  `,
});

return new Response(
  JSON.stringify({ message: "Email enviado correctamente" }),
  {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  }
);
};