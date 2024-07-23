import PropTypes from "prop-types";
const Card2 = ({img, subTitle, title, type}) => {
	return (
		<div className={`card-container2 ${type}`}>
			<div id="img-container">
				<img className="img-container" src={img}></img>
			</div>
			<div className="subtitle-container">
				<span className="poppins">{subTitle}</span>
			</div>
			<div className="title2-container">
				<span className="poppins">{title}</span>
			</div>
		</div>
	);
};

export default Card2;

Card2.propTypes = {
	img: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};
