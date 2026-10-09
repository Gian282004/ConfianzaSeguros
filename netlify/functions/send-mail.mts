import nodemailer from "nodemailer";

export default async (req: Request) => {
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
    user: process.env.USER,
    pass:process.env.PASS 
  }
  
});

await transporter.sendMail({
  from: email,
  to: "segurosmartinballesteros@gmail.com",
  replyTo:email,
  subject: "Nueva consulta desde la web",
  text: `
    Nombre: ${nombre}
    Apellido: ${apellido}
    Teléfono: ${tel}
    Mail:${email}
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