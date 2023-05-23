const request = require("supertest");
const app = require("../index");

describe("API TEST", () => {
	it("/GET users route", async () => {
		const response = await request(app).get("/users");
		expect(response.status).toEqual(200);
	});
});
