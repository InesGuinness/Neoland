import PropTypes from "prop-types";

const Main = ({ children }) => {
	return (
		<div>
			<main>{children}</main>
		</div>
	);
};

Main.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Main;
