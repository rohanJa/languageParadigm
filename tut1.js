let name ={
    firstname: 'Rohan',
    lastname: "Jain",

}

let printFullName = function(hometown, state) {
    console.log(this.firstname+" "+this.lastname+" "+hometown+" "+state);  //every function has access this keyword in here printFullName 
                                                    // function this keyword will point to name.
}

printFullName.call(name, "Indore", "Madhya Pradesh");

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar"
}

//function borrowing
printFullName.call(name2, "Mumbai", "Maharastra");

//In "call" method the first argument should always be a function whose object to be needed to be rendered.

//In "call" and "apply" method the only difference is that the additional argument to be passed in the function after the list should be in a list format.

printFullName.apply(name2, ["Mumbai", "Maharastra"]);

//bind method
let printMyName = printFullName.bind(name2, "Mumbai", "Maharastra");

//this above bind will create method which will bind it to the name 2 object and return a function to "printMyName" then we can call it

console.log(printMyName)
printMyName();


let numbers = [1, 2, 3, 4];

let multiplyNumber = numbers.map(number => number * 2);

//map iterate over the entire array does not alter the orginal array but it it returns a new array

console.log("Aletered array "+multiplyNumber);
console.log("Number array remains the same "+numbers);

let team = [
    {
        name: "rohan",
        age: 20
    },
    {
        name: "ajay",
        age: 23
    }
]

console.log("Before operation on the age attribute ");
console.log(team);

team.map(teamMember => teamMember.age+=10 ); 

// as we a have seen above the original array does not get altered 'numbers' but we have to save the changes to 'multiplyNumber' 
// but object inside the array gets altered in the original array in 'team' which contains a list of object.

console.log("After operation on the age attribute ");
console.log(team);

//if you do not return anything from a function it will return 'undefined'
for (var i=0;i<team.length; i++){
    console.log(i+" "+team[i]);
}

console.log("-------******-------");

for (val in team) {
    console.log(val);
}

1 === 11 ? console.log(true) : console.log(false) //use of ternary operator

let a ={
    'canada': 'punjab',
    'paris': 'gujrat'
}

for( v in a) {
    console.log(v);
}

let removedElement = numbers.filter(number => number!=1)

// filter also not alter the original array we have to save the result in new variable

console.log(removedElement);


//reduce 
let number = [1,2,3,4,5,5]

//Accumulator and current value added
let reducedValue = number.reduce((acc, cur) => acc * cur);
// do operation on the
console.log(reducedValue);