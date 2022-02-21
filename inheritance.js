
class Support {
    name;
    address;
    age;
    designation = 'MERN Developer'
    constructor(name, address, age) {
        this.name = name
        this.address = address
        this.age = age
    }
    meet() {
        console.log('Hello Developers !!');
    }
}