const Plane = require("../classes/Plane");
const Airport = require("../classes/Airport");
const Person = require("../classes/Person");
const { describe, it, expect, beforeEach } = require("@jest/globals");

describe("Plane tests" , () => {
    let testPlane;
    let testAirport;
    let testPassenger;
    beforeEach(() => {
        testPlane = new Plane("United", "Toronto");
        testAirport = new Airport("John F. Kennedy International Airport");
        testPassenger = new Person("Ronald", "Toronto");
    })

    it("Should be able to create an instance of a Plane", () => {
        expect(testPlane).toBeInstanceOf(Plane);
    })

    describe("Plane properties", () => {
        it("Should have company, origin, destination, and passengers properties", () => {
            expect(testPlane).toHaveProperty("company", "United");
            expect(testPlane).toHaveProperty("origin", "JFK");
            expect(testPlane).toHaveProperty("destination", "Toronto");
            expect(testPlane).toHaveProperty("passengers");
        })

        it("Should initialize with passengers as an empty array", () => {
            expect(Array.isArray(testPlane.passengers)).toBe(true);
            expect(testPlane.passengers).toHaveLength(0);
        })
    })

    describe("Plane methods", () => {
        it("Should be able to return array of passengers with getPassengers()", () => {
            testPlane.addPassenger(testPassenger);
            expect(testPlane.getPassengers()).toEqual([testPassenger]);
        })

        it("Should be able to add a Person to passengers with addPassenger()", () => {
            testPlane.addPassenger(testPassenger);
            expect(testPlane.passengers).toHaveLength(1);
        })
    })
})