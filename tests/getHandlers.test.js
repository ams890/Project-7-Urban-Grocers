// eslint-disable-next-line no-undef
const config = require('../config');

//Test to check response status code
test('response status code should be 200', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});

//Test to parse the response and check that the response body contains the expected data
test('number of warehouses should be more than 0', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		const data = await response.json();
		expect(data.length).toBeGreaterThan(0);
	} catch (error) {
		console.error(error);
	}
});