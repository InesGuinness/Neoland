let testEmailSend = false;

const setTestEmailSend = (data) => {
	getTestEmailSend = data;
};

const getTestEmailSend = () => {
	return getTestEmailSend;
};

module.exports = { setTestEmailSend, getTestEmailSend };
