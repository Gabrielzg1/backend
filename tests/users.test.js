const request = require("supertest");
const app = require("../index");
const sequelize = require("../util/database");

let server;

describe("API TEST", () => {
	it("My Space Test", async () => {
		const response = await request(app).get("/users");
		expect(response.status).toEqual(200);
	});
});
