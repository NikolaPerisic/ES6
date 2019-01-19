class Town {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}
class Park extends Town {
    constructor(name, buildYear, numberOfTrees, parkArea) {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
    }
    treeDensity() {
        let density = this.numberOfTrees / this.parkArea;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
    parkAge() {
        let today = new Date();
        return today.getFullYear() - this.buildYear;
    }
}

class Street extends Town {
    constructor(name, buildYear, streetLength, size = "normal") {
        super(name, buildYear);
        this.streetLength = streetLength;
        this.size = size;
    }
    aboutStreet() {
        console.log(`${this.name} built in ${this.buildYear}, is a ${this.size} street.`)
    }
}
const allParks = [];
const park1 = new Park('National Park', 1985, 890, 2);
const park2 = new Park('Grand Park', 1999, 970, 1.5);
const park3 = new Park('Eucaliptus Park', 2001, 2400, 5);
allParks.push(park1, park2, park3);

const allStreets = [];
const street1 = new Street("Main Street", 1986, 19, 'huge');
const street2 = new Street("Palm Street", 1989, 15, 'small');
const street3 = new Street("Dreams Avenue", 2002, 12);
const street4 = new Street("Moonlight Boulevard", 1996, 8, 'big');
allStreets.push(street1, street2, street3, street4);

const averageParkAge = (arr) => {
    let average = 0;
    arr.forEach(el => average += el.parkAge());
    console.log(`Our ${arr.length} parks have an average age of ${average} years.`);
}
const mostTrees = (arr) => {
    let most = {};
    arr.forEach(el => {
        el.numberOfTrees >= 1000 ? most = el : most.name = "None of our parks";
    });
    console.log(`${most.name} has more than 1000 trees.`);
}

const totalAverageStreetLength = (arr) => {
    let total = 0;
    arr.forEach(el => total += el.streetLength);
    console.log(`Our ${arr.length} streets have a total length of ${total} km, with an average of ${total / arr.length} km.`);
}

const parksReport = () => {
    console.log("---------PARKS REPORT---------");
    averageParkAge(allParks);
    allParks.forEach(el => el.treeDensity());
    mostTrees(allParks);

}
const streetsReport = () => {
    console.log("---------STREETS REPORT---------");
    totalAverageStreetLength(allStreets);
    allStreets.forEach(el => el.aboutStreet());
}
parksReport();
streetsReport();