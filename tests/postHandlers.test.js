// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"name": "Example kit",
}

//Test to check response status code
test('response status code should be 201', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		console.log(response);
		expect(response.status).toBe(201);
	} catch (error) {
		console.error(error);
	}
});

//Test to parse the response and check that the response body contains the expected data
test('check that name of the kit is Example kit and card is not null', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		console.log(data);
		expect(data.name).toBe(requestBody.name);
		expect(data.card).not.toBe(null);
	} catch (error) {
		console.error(error);
	}
});
