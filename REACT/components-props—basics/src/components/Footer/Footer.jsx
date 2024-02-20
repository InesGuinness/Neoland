//! falta terminar aun

import PropTypes from "prop-types";

const Footer = (children) => {
	return (
		<div>
			<span>Adress</span>
			<span>Links</span>
			<span>Logo</span>
		</div>
	);
};

Main.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Footer;
