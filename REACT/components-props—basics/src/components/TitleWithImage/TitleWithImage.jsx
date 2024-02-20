import PropTypes from "prop-types";
import Title from "../Title/Title";
import Subtitle from "../SubTitle/SubTitle";
import Image from "../Image/Image";

const TitleWithImage = () => {
	return (
		<div>
			<Title></Title>
			<Subtitle></Subtitle>
			<Image></Image>
		</div>
	);
};

// PropTypes to define prop validation for the children prop. This ensures that the children prop is required and must be a valid React node.

TitleWithImage.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TitleWithImage;
