const request = require("supertest");
//const dbConnection = require("./util/database");
const app = require("../index");

describe("API Tests", () => {
  test("GET / should return status 200", async () => {
    expect((await request(app).get("/")).status).toBe(200);
  });
});
