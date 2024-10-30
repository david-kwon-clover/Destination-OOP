const Person = require("../classes/Person");
const Bag = require("../classes/Bag");
const { describe, it, expect, beforeEach } = require("@jest/globals");

describe("Person tests", () => {
    let testPerson;
    let testBag;
    beforeEach(() => {
        testPerson = new Person("Dave", "New York")
        testBag = new Bag(13, 21);
    })

    it("Should create an instance of a Person", () => {
        expect(testPerson).toBeInstanceOf(Person);
    })

    describe("Person properties", () => {
        it("Should have a name, destination, and bags properties", () => {
            expect(testPerson).toHaveProperty("name", "Dave");
            expect(testPerson).toHaveProperty("destination", "New York");
            expect(testPerson).toHaveProperty("bags");
        })

        it("Should initialize with bags as an empty array", () => {
            expect(Array.isArray(testPerson.bags)).toBe(true);
            expect(testPerson.bags).toHaveLength(0);
        })
    })

    describe("Person methods", () => {
        it("Should update the bags property with addBag()", () => {
            testPerson.addBag(testBag);
            expect(testPerson.bags).toHaveLength(1);
        })

        it("Should return the bags property with getBags()", () => {
            testPerson.addBag(testBag);
            expect(testPerson.getBags()).toEqual([testBag]);
        })
    })
})