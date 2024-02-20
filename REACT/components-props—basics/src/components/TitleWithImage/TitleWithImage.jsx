import PropTypes from "prop-types";

const TitleWithImage = ({ children }) => {
	return <main>{children}</main>;
};

TitleWithImage.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TitleWithImage;
