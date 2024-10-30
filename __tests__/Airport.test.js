const Airport = require("../classes/Airport");
const Plane = require("../classes/Plane");
const { describe, it, expect, beforeEach, test } = require("@jest/globals");

describe("Airport tests", () => {
    let testAirport;
    let testPlane;

    beforeEach(() => {
        testAirport = new Airport("John F. Kennedy International Airport");
        testPlane = new Plane("Delta", "Honolulu");
    })

    it("Should be able to create instance of an Airport", () => {
        expect(testAirport).toBeInstanceOf(Airport);
    })

    describe("Airport properties", () => {
        it("Should have name and planes properties", () => {
            expect(testAirport).toHaveProperty("name", "John F. Kennedy International Airport");
            expect(testAirport).toHaveProperty("planes");
        })

        it("Should have static airportCode property", () => {
            expect(Airport.airportCode).toBe("JFK");
        })

        it("Should initialize with planes as an empty array", () => {
            expect(Array.isArray(testAirport.planes)).toBe(true);
            expect(testAirport.planes).toHaveLength(0);
        })
    })

    describe("Airport methods", () => {
        it("Should return the array of planes with getPlanes()", () => {
            testAirport.addPlane(testPlane);
            expect(testAirport.getPlanes()).toEqual([testPlane]);
        })

        it("Should add a Plane to planes array with addPlane()", () => {
            testAirport.addPlane(testPlane);
            expect(testAirport.planes).toHaveLength(1);
        })
    })
})