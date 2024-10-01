import PropTypes from "prop-types";

const InfoBtns = ({ infoKey, updateImage, children }) => {
	const handleImageUpload = (event) => {
		event.preventDefault();
		const file = event.target.files[0];
		const reader = new FileReader();

		// Convertir la imagen a base64
		reader.onloadend = () => {
			const base64String = reader.result;
			updateImage(infoKey, base64String); // lifting
		};
		if (file) {
			reader.readAsDataURL(file);
		}
	};

	return (
		<>
			<label className="button">
				{children}
				<input
					type="file"
					className="addForm__hidden"
					onChange={handleImageUpload}
				/>
			</label>
		</>
	);
};

InfoBtns.propTypes = {
	infoKey: PropTypes.string.isRequired,
	updateImage: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default InfoBtns;
