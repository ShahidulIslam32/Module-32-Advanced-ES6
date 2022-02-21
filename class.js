
class Support{
    name;
    address;
    age;
    designation = 'MERN Developer'
    constructor(name, address, age){
        this.name = name
        this.address = address
        this.age = age
    }  
    meet(){
        console.log('Hello Developers !! this is', this.name );
    } 
}

let newMemberOne    = new Support('shahidul islam', 'chittagong', 22)
let newMemberTWo    = new Support('shovon islam', 'shylet', 25)
let newMemberThree  = new Support('tapon khan', 'narayanganj', 28)
let newMemberFour   = new Support('jamil sami', 'munsiganj', 23)

newMemberOne.meet()
newMemberTWo.meet()
newMemberThree.meet()
newMemberFour.meet()

console.log(newMemberOne, newMemberTWo, newMemberThree, newMemberFour);
