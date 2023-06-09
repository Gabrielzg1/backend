const request = require("supertest");
const app = require("../index");

describe("API TEST - PERMISSIONS ", () => {
	it("/GET users route", async () => {
		const response = await request(app).get("/users");
		expect(response.status).toEqual(200);
	});
	it("/GET admins route", async () => {
		const response = await request(app).get("/admins");
		expect(response.status).toEqual(200);
	});
	it("/GET mentors route", async () => {
		const response = await request(app).get("/mentors");
		expect(response.status).toEqual(200);
	});
	it("/GET company route", async () => {
		const response = await request(app).get("/company");
		expect(response.status).toEqual(200);
	});
});
describe("API TEST - OTHERS", () => {
	it("/GET jobs route", async () => {
		const response = await request(app).get("/jobs");
		expect(response.status).toEqual(200);
	});
	it("/GET quiz route", async () => {
		const response = await request(app).get("/quiz");
		expect(response.status).toEqual(200);
	});
	it("/GET training route", async () => {
		const response = await request(app).get("/training");
		expect(response.status).toEqual(200);
	});
});
