import './Carrousel.css'
export function Carrousel()
{

  
    return (
        
<section className="story">
  <div className="scene">
    <div className="track">

      <article className="panel panel--mission">
        <span className="panel__number">01 / 03</span>

        <div className="panel__content">
          <span className="panel__eyebrow">QUIÉNES SOMOS</span>
          <h2>Nuestra <span>misión</span></h2>
          <p>
            Brindar soluciones de seguros confiables y
            personalizadas, acompañando a cada cliente
            con cercanía, compromiso y transparencia.
          </p>

          <span className="panel__tag">
            <span className="panel__dot"></span>
            Protegemos lo que importa
          </span>
        </div>

        <span className="panel__decoration">M</span>
      </article>

      <article className="panel panel--vision">
        <span className="panel__number">02 / 03</span>

        <div className="panel__content">
          <span className="panel__eyebrow">HACIA DÓNDE VAMOS</span>
          <h2>Nuestra <span>visión</span></h2>
          <p>
            Ser un referente en asesoramiento de seguros,
            construyendo relaciones duraderas basadas
            en la confianza, la innovación y la atención humana.
          </p>

          <span className="panel__tag">
            <span className="panel__dot"></span>
            Crecemos junto a vos
          </span>
        </div>

        <span className="panel__decoration">V</span>
      </article>

      <article className="panel panel--objectives">
        <span className="panel__number">03 / 03</span>

        <div className="panel__content">
          <span className="panel__eyebrow">NUESTRO COMPROMISO</span>
          <h2>Nuestros <span>objetivos</span></h2>
          <p>
            Entender las necesidades de cada persona,
            ofrecer coberturas adecuadas y estar presentes
            cuando más nos necesitan.
          </p>

          <span className="panel__tag">
            <span className="panel__dot"></span>
            Siempre a tu lado
          </span>
        </div>

        <span className="panel__decoration">O</span>
      </article>

    </div>
  </div>
</section>

    )
}