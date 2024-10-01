import { Link } from "react-router-dom";

const LandingPage = ({info}) => {
  return (
    <div className="landing-page">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Vitrina de sombras para coleccionar ideas en la penumbra digital
        </p>
      </section>
      <Link to="/create" className="button--link">
        Nuevo proyecto
      </Link>
      <></>
      <section className="preview landingPageCard ">
        <article className="card">
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">
              Ficha De Proyecto Tenebroso
            </span>
          </h2>

          <div className="card__author">
            <p className="card__job">Tejiendo Código en las Sombras</p>
            <div className="card__authorPhoto"
						  style={{ backgroundImage: `url(${info.photo || "https://theobjective.com/wp-content/uploads/2020/10/morticia-portada-e1603540026942.png"})` }}
					  ></div>
            <h3 className="card__name">Morticia Addams</h3>
          </div>

          <div className="card__project">
            <h3 className="card__name">Ficha De Proyecto Tenebroso</h3>
            <p className="card__slogan">Diseños Exclusivos</p>
            <h3 className="card__descriptionTitle">Elegante y macabro</h3>
            <p className="card__description">
              Un día sin oscuridad, es un día perdido.
              En esta casa, lo tenebroso no asusta, lo ordinario sí.
            </p>

            <div className="card__technicalInfo">
              <p className="card__technologies">React JS - HTML - CSS</p>

              <a
                className="icon icon__www"
                href="#"
                title="Haz click para ver el proyecto online"
              >
                Web link
              </a>
              <a
                className="icon icon__github"
                href="#"
                title="Haz click para ver el código del proyecto"
              >
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </section>
      <section className="preview landingPageCard">
        <article className="card">
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">
              Personal project card
            </span>
          </h2>

          <div className="card__author">
            <p className="card__job">Arquitecta de lo Oscuro</p>
            <div className="card__authorPhoto"
						  style={{ backgroundImage: `url(${info.photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmX0F7PmA6NIiZ2WB7n4rKy-RprgurWXsScYiXuysivV8V4heuWPlrKZxNBT9j8obwwJw&usqp=CAU"})` }}
					  ></div>
            <h3 className="card__name">Abuela Addams</h3>
          </div>

          <div className="card__project">
            <h3 className="card__name">Ficha De Proyecto Tenebroso</h3>
            <p className="card__slogan">Diseños Exclusivos</p>
            <h3 className="card__descriptionTitle">La oscuridad nos guía</h3>
            <p className="card__description">
              Lo raro es normal.
              La oscuridad nos ilumina.
            </p>

            <div className="card__technicalInfo">
              <p className="card__technologies">React JS - HTML - CSS</p>

              <a
                className="icon icon__www"
                href="#"
                title="Haz click para ver el proyecto online"
              >
                Web link
              </a>
              <a
                className="icon icon__github"
                href="#"
                title="Haz click para ver el código del proyecto"
              >
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default LandingPage;
