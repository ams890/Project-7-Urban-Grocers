// eslint-disable-next-line no-undef
const config = require('../config');

//Test to check response status code
test('response status code should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			method: 'DELETE',
		});
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
});

//Test to parse the response and check that the response body contains the expected data
test('Confirm deleted kit is not longer there', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			method: 'DELETE',
		});
		const data = await response.json();
		expect(data.code).toBe(404);
	} catch (error) {
		console.error(error);
	}
});