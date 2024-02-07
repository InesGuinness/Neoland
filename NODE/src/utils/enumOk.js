const enumOk = (gender) => {
	const enumGender = ["hombre", "mujer", "otros"];
	if (enumGender.includes(gender)) {
		console.log("entro en el true");
		return { check: true, gender };
	} else {
		return {
			check: false,
		};
	}
};

module.exports = enumOk;

// switch (expression) {
// 	case value1:
// 	  // Code to execute if expression matches value1
// 	  break;
// 	case value2:
// 	  // Code to execute if expression matches value2
// 	  break;
// 	// Additional cases as needed
// 	default:
// 	  // Code to execute if expression doesn't match any case
//   }
