/**
 * Static Keyword
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);