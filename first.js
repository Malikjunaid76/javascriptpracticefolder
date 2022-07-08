var option = 2;
if (option=== 1){
	console.log ("you have chosen option 1 ");
}
 else if (option=== 2)
 {
 	console.log("you have chosen option 2");
 }
 else if (option===3)
 {
 	console.log("you have chosen option 3");
 }
  else if (option===4)
  {
  	console.log("you have selected 4");
  }
  else if (option === 5)
  {
  	console.log ("you have selected 5");
  }

switch (option){
	case 1 :
	console.log("you have selected 1");
	break;
	case 2 : 
	console.log ("you have selected 2");
	break;
	case 3 : 
	console.log ("you have seleccted 3");
	break;
	case 4 : 
	console.log ("you have selected 4");
	break;
	case 5 : 
	console.log ("you have selected 5");
}

var tier = "deck of legends";
var output = "you will receive";
switch (tier){
	case "deck of legend":
	output+= " a custom card";
	case "deck of legends" : 
	output += " with a bunch of gifts";
	case "another whatever":
	output += " moreover, you will have a wonderful day";
	case "whoever":
	output += " with conducive environment";

}
console.log(output);

var x= 1;
while(x <= 5)
{
	console.log(x + " Mississipi" + " jumanji");
	x= x+1;
}
//
var t= 5;
for(number=1; number<=10; number++){
	console.log(t + "*" +number + "="+ t*number);
}

var james="I need a book";
function library (){
	var librarian ="that book is in the literature secction";
	function classicLiterature(){
		var book="Here is your book Sir";
	}
	console.log(book);
};

var bookTitle = "Pakistan a hard country";
function displaybookEnglish (){
	 var bookTitle = "Treking to pakistan";
	console.log(bookTitle);
};

displaybookEnglish();
console.log(bookTitle);

FindAverage(10,10);
function FindAverage(x,y){
	var answer = (x+y)/2;
	return answer;
};

var check= function movie(){
	return "Malik junaid";
};
check();//This has to be checked later on that why functions does not perfom.

//Starting a new with arrays. An array is a data struture that can holds multiple data values and it starts from zero.

var names=["junaid","jumanji","ahmad","asghar","ali"];
console.log(names[3]);
names.push("qasim");
console.log(names);
names.pop("qasim");
console.log(names);
names.pop();
names.splice(1,1,"suri","khan","dsf");
console.log(names);

for (var i =0; i< names.length; i++) {
	names[i]+= " Malik";
	names[i]= names[i].toUpperCase();
}

console.log(names);
names.forEach(function(addname){ // Inline function expression can be used since you know that this function is not gonna be used again.
	addname+= " Boota";
	addname= addname.toUpperCase();
	console.log(addname);
});

var sum= [65,70,40,35,10];
sum.forEach(myfunction);
function myfunction(item){
	sum+=item;
	console.log(sum);
}

// Map is one more array method that we can use

var newnumber =[1,2,3,4,5,6];
var newarray= newnumber.map(function(elem){
	elem= elem+5;
	return elem;
});

console.log(newarray);


var grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12,13,14]];
for (var row= 0; row < grid.length; row++){
	for(var col= 0; col< grid[row].length;col++){
		console.log(grid[row][col]);
	}
}



const myString ="i love     coding"
console.log(myString.trim())
console.log(myString.length)
console.log(myString.trim().length)

if(myString.includes ("coding"))
{
	console.log("yes")
} else{
	console.log("no");
}
 const text= myString.slice(2,15);
 console.log(text);

var numbers= [2,4,6,8];
numbers.forEach(n =>{
	console.log(n * 6);
})
  const squaredArr = numbers.map((item) =>{
  	return Math.pow(item,4);
  })
console.log(squaredArr);

const find = numbers.find(item => item > 2);
console.log(find);
const num= 3.1554521;
console.log(num | 0);

















































































	












