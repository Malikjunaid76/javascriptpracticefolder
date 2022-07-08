//Replace Text in js using regex
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
               /(\w+)\s(\w+)\s(\w+)/;
let replaceText ='$3 $2 $1'; // Change this line
let result = str.replace(fixRegex, replaceText);

//positive and negative lookeraheads

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);


//New Programme for checking username 
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$ | [a-z]\d\d+$/i; // Change this line
let result2 = userCheck.test(username);
console.log(result2);


//New Programme //
let quoteSample = "The five bo wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result1 = quoteSample.match(alphabetRegexV2).length;
console.log(result1);


// New Programme ,// converting fahrenheit to celcius through getter and setter .

// Only change code below this line
class Thermostat{
  constructor (fahrenheit){
      this.fahrenheit=fahrenheit;   
  }
  //getter 
  get temperature(){
   return 5/9 * (this.fahrenheit - 32);
  }
  //setter
  set temperature(celcius){
      this.fahrenheit= celcius * 9.0 / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(100); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log("This is the temperature in celcius: ",temp);
thermos.temperature = 40;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);



// New programme, using the arrow function to take number of inputs .
const sum = (...z) => {
	return z.reduce((a,b) => a+b,1);
}
 console.log(sum(1,2,45,45,12,4,54,54,5));
//New Programme about Template Literals// 
//In this given programme we are using the template literals to create strings. 
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions","Non-arrow-function"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
 
 // This is the function in which an argument is passed and an object is created to go through the object properties one by one
function makeList(arr){
 const emptyArray=[];
 for(let i =0; i < arr.length; i++){
 	emptyArray.push(`<li class="text-warning">${arr[i]}</li>`);
   
 }
  return emptyArray;
}
const secondArray=makeList(result.success);
console.log(secondArray);
// New programme creating a new function using the class keyword, and constructor is added.
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
console.log(zeus);







