// le damos un valor inicial de false
let testEmailSend = false;

// creamos una funcion seteadora del estado es decir que le de un valor
const setTestEmailSend = (data) => {
	testEmailSend = data;
};

// creamos una funcion de get que nos devuelva el valor del estado que tenemos actual
const getTestEmailSend = () => {
	return testEmailSend;
};

module.exports = { setTestEmailSend, getTestEmailSend };
