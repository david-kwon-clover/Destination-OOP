class Airport {
    static airportCode;
    constructor(name) {
        this.name = name;
        Airport.airportCode = name.split(" ").map((word) => {
            return word.charAt(0);
        }).slice(0, 3).join("").toUpperCase();
        this.planes = [];
    }

    getPlanes() {
        return this.planes;
    }

    addPlane(plane) {
        this.planes.push(plane);
    }
}


module.exports = Airport;