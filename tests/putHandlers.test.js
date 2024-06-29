// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"name": "Italian Feast",
}

//Test to check response status code
test('response status code should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});

//Test to parse the response and check that the response body contains the expected data
test('change name of existing kit to a different name', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		expect(data.name).toBe(requestBody.name);
	} catch (error) {
		console.error(error);
	}
});