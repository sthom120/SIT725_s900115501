const request = require("supertest");
const { expect } = require("chai");

const app = require("../server");
const {
  calculateAveragePlayTime
} = require("../utils/gameCalculations");

describe("Board Game API", () => {
  it("should return status 200 for GET /api/games", async () => {
    const response = await request(app).get("/api/games");

    expect(response.status).to.equal(200);
  });

  it("should return the board game data", async () => {
    const response = await request(app).get("/api/games");

    expect(response.body.data).to.be.an("array");
    expect(response.body.data).to.have.lengthOf(4);
    expect(response.body.data[0].title).to.equal("Catan");
  });

  it("should return 404 for an invalid API route", async () => {
    const response = await request(app).get("/api/not-a-real-route");

    expect(response.status).to.equal(404);
  });
});

describe("Average Play Time Calculation", () => {
  it("should correctly calculate an average play time", () => {
    const result = calculateAveragePlayTime(60, 120);

    expect(result).to.equal(90);
  });

  it("should handle equal minimum and maximum times", () => {
    const result = calculateAveragePlayTime(30, 30);

    expect(result).to.equal(30);
  });

  it("should reject negative play times", () => {
    expect(() => calculateAveragePlayTime(-10, 60))
      .to.throw("Play times cannot be negative");
  });
});