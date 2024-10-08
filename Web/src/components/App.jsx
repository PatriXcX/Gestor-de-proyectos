import { useState, useEffect } from "react";
// import avatarImage from "../images/avatar.webp";
// import ebookkExampleImagen from "../images/ebook-example.jpg";
// import gitHubIcon from "../images/icons/github.svg";
// import globeSolid from "../images/icons/globe-solid.svg";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import CreateBtns from "./Sections/Buttons/Create-Btns";
import "../styles/App.scss";
import Info from "./Sections/Info";
import InfoBtns from "./Sections/Buttons/Info-Btns";
import Preview from "./Sections/Preview";
import LandingPage from "./Sections/LandingPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [saveProjectSuccess, setSaveProjectSuccess] = useState("");
	const [saveProjectFail, setSaveProjectFail] = useState("");
	//Función guardar form en API
//"https://project-promo-b-pt-module-4-team-2.onrender.com/api/projectCard",
	const HandleCreateProject = () => {
		fetch(
			
			'http://localhost:4000/api/projectCard',
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(info),
			}
		)
			.then((response) => response.json())
			.then((responseJson) => {
				if (responseJson.success === false) {
					setSaveProjectFail(
						`Ha sucedido un error al crear la tarjeta: ${responseJson.error}`
					);
					setSaveProjectSuccess("");
				} else if (responseJson.success === true) {
					console.log(responseJson);
					
					setSaveProjectSuccess(`http://localhost:4000/api/projectCard/${responseJson.id}`);
					setSaveProjectFail("");
					resetInfo();
				}
			});
	};

	const resetInfo = () => {
		const newInfo = {
			name: "",
			slogan: "",
			repo: "",
			demo: "",
			technologies: "",
			desc: "",
			autor: "",
			job: "",
			image: "",
			photo: "",
		};
		setInfo(newInfo);
		localStorage.setItem("formInfo", JSON.stringify(newInfo));
	};

	const [info, setInfo] = useState({
		name: "",
		slogan: "",
		repo: "",
		demo: "",
		technologies: "",
		desc: "",
		autor: "",
		job: "",
		image: "",
		photo: "",
	});

	useEffect(() => {
		const info = localStorage.getItem("formInfo");
		if (info) {
			setInfo(JSON.parse(info));
		}
	}, []);

	// Función subir imagenes buttons form en API
	const updateImages = (key, image) => {
		const newInfo = { ...info, [key]: image };
		setInfo(newInfo);
		localStorage.setItem("formInfo", JSON.stringify(newInfo));
	};

	const handleInput = (ev) => {
		console.log(ev.currentTarget);
		const key = ev.currentTarget.name;
		const newInfo = { ...info, [key]: ev.currentTarget.value };
		setInfo(newInfo);
		localStorage.setItem("formInfo", JSON.stringify(newInfo));
	};

	return (
		<Router>
			<div className="container">
				<Header />
				<main className="main">
					<Routes>
						<Route path="/" element={<LandingPage info={info} />} />
						<Route
							path="/create"
							element={
								<>
									<section className="hero">
										<h2 className="title">
											Proyectos molones
										</h2>
										<p className="hero__text">
											Vitrina de sombras para coleccionar
											ideas en la penumbra digital
										</p>
										<a className="button--link" href="./">
											Ver proyectos
										</a>
									</section>
									<div className="preview_and_form_container">
										<Preview info={info} />
										<form className="addForm">
											<Info
												info={info}
												handleInput={handleInput}
											/>
											<fieldset className="addForm__group--upload">
												<InfoBtns
													infoKey="image"
													updateImage={updateImages}
												>
													Subir foto del proyecto
												</InfoBtns>
												<InfoBtns
													infoKey="photo"
													updateImage={updateImages}
												>
													Subir foto de la autora
												</InfoBtns>
												<CreateBtns
													onClick={
														HandleCreateProject
													}
												>
													Guardar Proyecto
												</CreateBtns>
											</fieldset>
											<div className="message">
												{saveProjectFail && (
													<p style={{ color: "red" }}>
														{saveProjectFail}
													</p>
												)}
												{saveProjectSuccess && (
													<p
														style={{
															color: "white",
														}}
													>
														Proyecto subido
														exitosamente. Puedes
														verlo aquí:{" "}
														<a
															className="linkProyect"
															href={
																saveProjectSuccess
															}
															target="_blank"
															rel="noopener noreferrer"
														>
															{saveProjectSuccess}
														</a>
													</p>
												)}
											</div>
										</form>
									</div>
								</>
							}
						/>
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
