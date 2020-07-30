function Human(firstname,lastname){
    this.firstname = firstname
    this.lastname = lastname
    this.fullName = function (){
        return this.firstname+" "+this.lastname
    }
}

var  person1 = new Human("Virat ","Kholi")
console.log(person1)