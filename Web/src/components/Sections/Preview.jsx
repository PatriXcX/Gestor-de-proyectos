import PropTypes from "prop-types";
function Preview({ info }) {
	return (
		<section className="preview">
			<div
				className="projectImage"
				style={{ backgroundImage: `url(${info.image || "https://media.meer.com/attachments/4a5bcd8c71c5826bbcd926164245484695315b3e/store/fill/860/645/a3648482f68fd9b800384e4a85f49c79c204b9e83692a3190f4fe93bdd92/La-Familia-Addams-pelicula-estadounidense-de-comedia-oscura-de-1991.jpg"})` }}
			></div>
			<article className="card">
				<h2 className="card__projectTitle">
					<span className="card__projectTitle--text">
            Ficha de Proyecto Tenebroso
					</span>
				</h2>

				<div className="card__author">
					<div
						className="card__authorPhoto"
						style={{ backgroundImage: `url(${info.photo || "https://holatelcel.com/wp-content/uploads/2022/08/Merlina-2022.png"})` }}
					></div>
					<p className="card__job">{info.job || "programadora forense"}</p>
					<h3 className="card__name">{info.autor || "Wednesday Addams"}</h3>
				</div>

				<div className="card__project">
					<h3 className="card__name">
						{info.name || "La oscuridad es un regalo"}
					</h3>
					<p className="card__slogan">{info.slogan}</p>
					<h3 className="card__descriptionTitle"></h3>
					<p className="card__description">{info.desc || "La normalidad es una ilusión. Lo que es normal para la araña es el caos para la mosca. ¡Estoy en el borde de la locura! ¡Tan cerca, que podría empujarme!"}</p>

					<div className="card__technicalInfo">
						<p className="card__technologies">
							{info.technologies ||" React JS - HTML - CSS"}
						</p>

						<a
							className="icon icon__www"
							href={info.demo}
							title="Haz click para ver el proyecto online"
						>
							Web link
						</a>
						<a
							className="icon icon__github"
							href={info.repo}
							title="Haz click para ver el código del proyecto"
						>
							GitHub link
						</a>
					</div>
				</div>
			</article>
		</section>
	);
}

Preview.propTypes = {
	info: PropTypes.object.isRequired,
};

export default Preview;
