import request from "supertest";
import app from "../src/app";

let server; // Declare a server variable to store the server instance

beforeAll(() => {
  // Start the server before the tests
  server = app.listen(3001);
});

afterAll(() => {
  // Close the server after the tests
  server.close();
});

describe("Basic App Test", () => {
  it("should return 200 OK on GET /", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  it("should return JSON with host information", async () => {
    const response = await request(app).get("/");
    expect(response.body).toHaveProperty("hostname");
    expect(response.body).toHaveProperty("platform");
  });
});
