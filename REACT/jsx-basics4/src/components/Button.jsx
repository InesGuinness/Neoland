import { useState } from "react";

const Button = () => {
	// initializes a state variable "text" using the useState hook with an initial value of "on".
	// set is a function to update the value
	const [text, setText] = useState("on");
	// callback function
	const change = () => {
		// This line updates the value of text based on its current value
		setText(text === "on" ? "off" : "on");
	};
	// This line marks the beginning of the JSX code that the component will render.
	return (
		<div>
			<h1> {text} </h1>{" "}
			{/** onClick={change} --> JSX attribute called an event handler. Functions triggered in response to events */}
			<button onClick={change}> Click </button>
		</div>
	); // This line marks the end of the JSX code.
}; // This line marks the end of the Button component definition.

export default Button;
