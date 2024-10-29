const Bag = require("../classes/Bag");
const Person = require("../classes/Person");
const { describe, it, expect } = require("@jest/globals");

describe("Bag tests", () => {
    let testBagNew;
    let testBagOwned
    let testPerson;
    let testOwner;
    beforeEach(() => {
        testBagNew = new Bag(10, 17);
        testBagOwned = new Bag(15, 18);
        testPerson = new Person("Dave", "New York");
        testOwner = new Person("Brandon", "Los Angeles");
        testBagOwned.assignOwner(testOwner);
    })

    it("Should create instance of Bag class", () => {
        expect(testBagNew).toBeInstanceOf(Bag);
    })

    describe("Bag properties", () => {
        it("Should have weight and id properties", () => {
            expect(testBagNew).toHaveProperty("weight", 10);
            expect(testBagNew).toHaveProperty("id", 17);
        }) 
        
        it("Should have private owner property with initial value of null", () => {
            expect(testBagNew.getOwner()).toBe(null);
        })
    })

    describe("Bag methods", () => {
        it("Should get correctly retrieve owner with getOwner()", () => {
            expect(testBagOwned.getOwner()).toBeInstanceOf(Person);
            expect(testBagOwned.getOwner()).toEqual(testOwner);
        })
        
        it("Should correctly set owner with assignOwner()", () => {
            testBagNew.assignOwner(testPerson);
            expect(testBagNew.getOwner()).toBeInstanceOf(Person);
            expect(testBagNew.getOwner()).toEqual(testPerson);
        })
    })
})