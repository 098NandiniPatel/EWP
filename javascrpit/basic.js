// variables in js and data types
let num = 10; // Number
console.log(num);

let char = 'a';// character
console.log(char);

let s = 'I am string'; //string
console.log(s);

let bool = true; // boolean
console.log(bool);

//loops
for(let i=1;i<5;i++){
    console.log(i);
}

let count = 5;
while(count>0){
    console.log(count);
    count--;
}

//is prime 
let n = 349;
let isPrime = true;

for(let i=2;i*i<=n;i++){
    if(n%i == 0){
        isPrime = false;
    }
}
if(isPrime == true){
    console.log("Number is prime");
}else{
     console.log("Number is not prime");
}

//function without parameter and without return type
function sayHello(){
    console.log("Hello from functions");
}
sayHello();

// function with parameter 
function sum(num1,num2){
    let addition = num1+num2;
    console.log("Addition of given numbers: "+ addition)
}
sum(3,5);

//function with return type
function multiply(num1,num2){
    return num1*num2;
}
let ans = multiply(3,5);
console.log(ans);

//functions are first class citizen in js
let a = function sub(num1,num2){
            return num1-num2; 
        }
console.log(a(10,5));

//IIFE - > Immediately Invoked Function Expression
(function(){
    console.log("Hello from IIFE");
})();
//IIFE with parameter
(function(num1,num2){
    console.log(num1/num2);
})(10,5);

//empty array
let arr = [];
console.log(arr);

// array with elements
let eleArr = [1,2,4,5,"Hello I am String",false,'c',4.5]
console.log(eleArr);
console.log("Element at 4th index: " + eleArr[4]);
eleArr[3] = "Nothing";
console.log(eleArr);
//Arrays method
//1. push
console.log("Array before push: ",eleArr);
eleArr.push("new item");
console.log("Array after push : ",eleArr);
//2. pop
console.log("Array before pop : ",eleArr);
eleArr.pop();
console.log("Array after pop: ",eleArr);
//3. shift --> removes 0 index element
console.log("Array before shift: ",eleArr);
eleArr.shift();
console.log("Array after shift: ",eleArr);
//4. unshift-->inserts element at 0 index
console.log("Array before unshift: ",eleArr);
eleArr.unshift("newly added item");
console.log("Array after unshift: ",eleArr);

//length
let l = eleArr.length;
console.log(l);

let obj = {
    Name: 'ABC',
    Age: 20,
    Friends: ['Natasha','Thor','Tony','Bucky','Bruce'],
    address: {
        city:"Queens",
        state:'XYZ'
    },
    isObj:false,
    sayHi:function(){
        console.log("ABC says Hiiiii")
    }
}


//name of obj
console.log(obj.Name)
//friends of obj
console.log(obj.Friends);
console.log(obj.Friends[0]);
//address object
console.log(obj.address);
console.log(obj.address.city)

// call fxn sayHi
obj.sayHi();
console.log("object before update : ",obj)
// add a new key to object
obj.Movies = ['Avengers','Civil War','Endgame'];
console.log("object after update : ",obj);

//delete a key 
delete obj.Movies;

obj.isObj = true;
obj.address.state = 'New York'
console.log(obj);
//second method to access a key
console.log(obj['Name']);
console.log(obj['address']['city'])

//length of string
let str = "I am a string";
let len = str.length;
console.log(len);

//sliced method -> extract part of a string

let slicedArr = str.slice(2,8);
console.log(slicedArr);

//replace method -> replace a part with giver word

let replacedStr = str.replace("am","was");
console.log(replacedStr);

//upper case
let upperCase = str.toUpperCase();
console.log(upperCase);

//lower case
let lowerCase = str.toLowerCase();
console.log(lowerCase);

//concate

let firstName = "Hello";
let lastName = " World";

// let fullName = firstName.concat(lastName);
// console.log(fullName);

let fullName = firstName+lastName;
console.log(fullName);

//split -> return arr 
let splitted =  str.split(" ");
console.log(splitted)