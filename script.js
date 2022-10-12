
//========================A. Q + A==================================
//How do we assign a value to a variable?

//let x = num; // assigns the value num to x

//How do we change the value of a variable?
/*let x = num;
let x = num2;
console.log(x)

//How do we assign an existing variable to a new variable?
let x = num;
let y = x;*/


//Remind me, what are declare, assign, and define?

//declare = defines a function with the specified parameters. use let or/and const or nothing

// assign = to symbolically associate a specific piece of info with a name. 

// define = use the function keyword, followed by a name, followed by a parentheses . 
//ex
// function myFunction(p1, p2) {
//    return p1 * p2
//}


//What is pseudocoding and why should you do it?

//Pseudocode refers to code-like syntax that is generally used to indicate to humans how some code syntax works, or illustrate the design of an item of code architecture.

//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

//20% thinking and 80% actually typing


//================================================
/* 


==================B. Strings====================
For all other questions that involve writing code, you can solve them via the following instructions.*/

//Create a variable called firstVariable
//Assign it the value of the string "Hello World"
//Change the value of this variable to some number
//Store the value of firstVariable in a new variable called secondVariable
//Change the value of secondVariableto any string.
console.log('\n\n=======================================================================\n\n')
let firstVariable = "Hello World"
firstVariable = 10;
//console.log(firstVariable)
let secondVariable = firstVariable;
secondVariable = "I am a string";
console.log(firstVariable)
//What is the value of firstVariable?
//10 == firstVariable

console.log('\n\n=======================================================================\n\n')



//===========================================================
//Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
//ex: Hello, my name is Jean Valjean
console.log('\n\n=======================================================================\n\n')

let yourName = "Latisha";
let intro = "Hello, my name is "
console.log(intro + yourName)

console.log('\n\n=======================================================================\n\n')


/*
C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console*/
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' !== 'Kevin');

  console.log('\n\n=======================================================================\n\n')


  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');

  console.log('\n\n=======================================================================\n\n')





/*
============================D. The farm==========================================
Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if the it is equal to cow
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
Commit*/

let animal = "horse";
    if (animal == 'cow') {
        console.log('mooooo')
    } else {
        console.log('Hey, You"re not a cow')
    }


    //animal = 'cow'
    //animal = 'horse'

    console.log("\n\n========================================================================\n\n")
/*E. Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."*/


let yourAge = 10;
if (yourAge >= 16) {
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you are toooo young.")
}

console.log("\n\n==================================================================\n")

/*

===========================II. Loops==========================
Remember: USE let when you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)

This is NO GOOD: for(i = 0; i < 100; i++)*/


//==============================A. The basics=============================================
//Write a loop that will print out all the numbers from 0 to 10, inclusive

/*for (let i = 0; i <= 10; i++){
    console.log(i)
}
console.log("\n\n================================================================================\n")

//Write a loop that will print out all the numbers from 10 up to and including 400

for (let y = 10; y <= 400; y++) {
    console.log(y)
}


console.log("\n\n=======================================\n\n")
//Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let j = 12; j <= 4000; j= j + 3) {
    console.log(j)
}


console.log('\n\n=====================================\n\n')

B. Get even
Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"*/

for (let i = 0; i <= 100; i++) {
    if (i % 2 ===0){
        console.log(i + " is an even number");
    } else {
        console.log("I'm odd")
    }
}
console.log("\n\n================================\n\n")

/*
C. Give me Five
For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
Example Output:

I found a 5. High five!
I found a 10. High five!*/

for (let c = 0; c <= 100; c++){
    if(c === 0){
        console.log("I am zero")
    }
    else if(c % 5 === 0 && c % 3 ===0) {
        console.log(`I found a ${c}. High five!`)
        console.log(`I found a ${c}. Three is a crowd.`)
    }else {
        if(c % 3 ===0) {
            console.log(`I found a ${c}. Three is a crowd.`)
        }
        else if (c % 5 === 0) {
            console.log(`I found a ${c}. High five!`)
        }
    }
}


/*Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
Example Output:

I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five!


For numbers divisible by both three and five, be sure your code prints both messages*/
console.log("\n\n===========================================\n\n")

/*
D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.*/


let bank_account = 0;
for (let sum = 1; sum <= 100; sum++){
    bank_account += sum;
}

console.log(bank_account)

bank_account = 0;
for (let sum = 1; sum <= 100; sum++){
    bank_account += sum * 2;
}

console.log(bank_account)

console.log("\n\n================================\n")
/*

=================III. Arrays & Control flow==========



A. Talk about it:
What are the things in an array called?
******an 'ELEMENT'******

Do Arrays guarantee those things will be in order?

******Arrays do NOT guarantee order*****

What real-life thing could you model with an array?
*******list of names, people, places, etc.*****
*/

//==============B. Easy Does It===============
//Create an array that contains three quotes and store it in a variable called quotes

const quotes = ['Work it!', 'YOLO!', 'Life is short!']
console.log('\n\n===================================\n')


//=================C. Accessing elements========
//Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true]

console.log('\n\n==========randomThings Array===================\n\n')

//How do you access the 1st element in the array?
console.log(randomThings[0])



//Change the value of "Hello"to "World"
randomThings[2] = "World";

//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)
console.log('\n\n=============================\n\n')
/*
================D. Change values================
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

What would you write to access the 3rd element of the array?*/

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2])

//Change the value of "Github" to "Octocat"

ourClass[4] = "Octocat"
//Add a new element, "Cloud City" to the array

ourClass.push("Cloud City")
console.log(ourClass)
console.log('\n\n=======================================================================\n\n')

/*
===================================E. Mix It Up================================================
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: */

const myArray = [5, 10, 500, 20];
//Add the string "Aegon"to the end of the array. 
myArray.push('Aegon')

//Add another string of your choice to the end of the array.
myArray.push('This is long assignment')
console.log(myArray)

//Remove the 5 from the beginning of the array.
myArray.shift()
console.log(myArray)

//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);


//Remove the string of your choice from the end of the array.
myArray.pop()
console.log(myArray)

//Reverse this array using Array.prototype.reverse(). 

console.log(Array.prototype.reverse(myArray))
//Did you mutate the array? What does mutate mean? 

//Did the .reverse()method return anything?
console.log(myArray.reverse())

console.log('\n\n==================================================================================\n\n')

//===============================F. Biggie Smalls========================================================
//Create a variable that contains an integer.
let input = 50;


//Write an if ... elsestatement that:
if (input < 100) {
    console.log("little number")
} else {
    console.log("big number")
}
//console.log()s "little number" if the number is entered is less than 100
//console.log()s big numberif the number is greater than or equal to 100.

console.log('\n\n==================================================================================\n\n')

//=========================G. Monkey in the Middle====================================================
//Write an if ... else if ... elsestatement:
function sum(monkeyNum) {
    if (monkeyNum < 5) {
        console.log("little number")
    } else if (monkeyNum > 10){
        console.log("big number")
    } else {
        console.log("monkey")
    }
} 
//console.log()little number if the number entered is less than 5.
//If the number entered is more than 10, log big number.
//Otherwise, log "monkey".
sum(5)
sum(12)
sum(1)

console.log('\n\n===================================================================================\n\n')





//==============================H. What's in Your Closet?==================================
//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
    console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");



//Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

kristynsCloset.splice(5, 0, "raybans");

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[4] = "stained knit hat";

//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
thomsCloset[0][0];

//In the same way, access one item from Thom's pants array.
thomsCloset[1][1]

//Access one item from Thom's accessories array.
thomsCloset[2][1]
//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!");

//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = "Footie Pajamas"

console.log('\n\n================================================\n\n')

//======================IV. Functions==============


//====================A. printGreeting============
//Do you think you could write a function called printGreetingwith a parameter name that returns a greeting with the argument interpolated into the greeting?

//Like so?

//console.log(printGreeting("Slimer"));=> Hello there, Slimer!

//You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

const printGreeting = (name) => {
    return "Hello there, " + name + "!";
}




//=================B. printCool===============
//Write a function printCool that accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

const printCool = (name) => {
    return "Hey, " + name + "I think you are cool!"
}
//console.log(printCool("Captain Reynolds"));=> "Captain Reynolds is cool";

console.log('\n\n=============================\n\n')


//===============C. calculateCube==============
//Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

//console.log(calculateCube(5)); => 125;
const calculateCube = (singleNum) => {
    return singleNum * singleNum * singleNum;
}

console.log(calculateCube(5))

console.log('\n\n==================================\n\n')

//=================D. isVowel===================

//Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

//console.log(isVowel("a"));=> true

const isVowel = (vowel) => {
    if (vowel.toLowerCase() === "a" || vowel.toLowerCase() === "e" || vowel.toLowerCase() === "i" || vowel.toLowerCase() === "o" || vowel.toLowerCase() === "u") {
        return "This is true";
    }else {
        return false;
    }
}

console.log(isVowel('d'))

console.log('\n\n===================================\n\n')

//=================E. getTwoLengths=============

//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

//console.log(getTwoLengths("Hank", "Hippopopalous"));=> [4, 13]

const getTwoLengths = (strA, strB) => {
    const arrayLength = [strA.length, strB.length];
    return arrayLength;
}

console.log(getTwoLengths("Hank", "Hippopotamus"))

console.log('\n\n===================================\n\n')

//=======F. getMultipleLengths===============

//Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

//console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));=> [5, 4, 2, 2, 4]

const getMultipleLengths = (strArr) => {
	const multipleLengthArray = [];
	for (str = 0; str < strArr.length; str++){
		multipleLengthArray.push(strArr[str].length);
	};
	return multipleLengthArray;
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

console.log('\n\n===========================\n')

//===============G. maxOfThree=================
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

//console.log(maxOfThree(6, 9, 1)); => 9

const maxOfThree = (num1, num2, num3) => {
    const numOfThreeArray = [num1, num2, num3];
    numOfThreeArray.sort(function(a, b) {
        return a - b
    });
    return numOfThreeArray[2]
}

console.log(maxOfThree(6, 9, 1))

console.log('\n\n==========================\n\n')
/*Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().*/




//================H. printLongestWord==========
//Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

//console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));=> "Peanutbutter"
const printLongestWord = (arrayStr) => {
    let longest = '';
    for (let str = 0; str < arrayStr.length; str++) {
        if (arrayStr[str].length > longest.length) {
            longest = arrayStr[str];
        }
    };
    return longest
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))

console.log('\n\n========================================\n\n')


//===============Objects=================
//Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

//=============A. Make a user object===========

//Create an object called user.

//Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
const user = {
    name: "Ms. Bridges",
    email: "msbridges3368@gmail.com",
    age: 27,
    purchase: []
}
console.log(user)
/*
B. Update the user
Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++*/
user.email= "newemail@gmail.com"
user.age++
    console.log(user.age);


//=================C. Adding keys and values===============
//You have decided to add your user's location to the data that you want to collect.
//Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).

user.location = "some other location"
console.log(user.location)

console.log('\n\n=============================================================================================\n\n')



//============================================D. Shopaholic!============================================================
//Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.

user.purchase.push('carbohydrates')
console.log(user)

//Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.

user.purchase.push('peace of mind')
console.log(user)
//Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.

user.purchase.push('Merino jodhpurs')
console.log(user)

//Console.log just the "Merino jodhpurs" from the purchasedarray.
console.log(user.purchase[2])

console.log('\n\n===============================================================================================\n\n')


//===============================================E. Object-within-object================================================
//Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

//If we want to give our user a friend with a name and age, we could write:

user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "Tahiti",
    purchase: []
}
//When we console.log user, we would see the friend object added to our user object.
console.log(user)
//Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
//Console.log just the friend's name
console.log(user.friend.name)
//Console.log just the friend's location
console.log(user.friend.location)
//CHANGE the friend's age to 55
user.friend.age = 55
console.log(user.friend.age)
//The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.
user.friend.purchase.push("The One Ring")
console.log(user.friend.purchase)
//The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchased array.
user.friend.purchase.push("A latte")
console.log(user.friend.purchase)

//Console.log just "A latte" from the friend's purchased array.

console.log('\n\n==============================================================================\n\n')



//================================================F. Loops==========================================================
//Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for (let i = 0; i < user.purchase.length; i++){
    console.log(user.purchase[i])
}
console.log('\n\n=============================\n\n')
//Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for (let a = 0; a < user.friend.purchase.length; a++) {
    console.log(user.friend.purchase[a])
}
console.log('\n\n=======================\n\n')

//==================G. Functions can operate on objects========================================
//Write a single function update User that takes no parameters. When the function is run, it should increment the user's age by 1
function updateUser () {
    user.age++
    user.name = user.name.toUpperCase()
}
updateUser()
console.log(user.age)

//make the user's name uppercase
console.log(user.name)
//The function does not need a return statement, it will merely modify the user object.

//Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.

    function oldAndLoud (person) {
        person.age++
        person.name = person.name.toUpperCase()
    }
    oldAndLoud(user)

console.log(user)


/*

Requirements Complete! Hungry for More?



Cat Combinator



1. Mama cat
Define an object called cat1that contains the following properties:

name
breed
age (a number)
console.log the cat's age
console.log the cat's breed



2. Papa cat
Define an object called cat2that also contains the properties:

name
breed
age (a number)



3. Combine Cats!
The cats are multiplying!

Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
Example:

combineCats(cat1, cat2)
{ name: "Joe", age: 19, breed: "Mog" }

{ name: "Jam", age: 45, breed: "Siamese" }

This is to demonstrate that functions can take objects as arguments

You could also invoke the combineCatsfunction by writing the objects straight into the parentheses:

combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

Make it so the combineCatsfunction will return a combination of the two incoming cats

The result should be an object wherein the

name is a concatenation of the parents' names
the age is 1
the breed is each of the parents' breeds with a hyphen in between
Example:

console.log(combineCats(cat1, cat2));
Result:



This is to demonstrate that a function can return an object





4. Cat brain bender
If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:

catCombinatorcan use itself as its own argument.

Take a second to stew on that . . .

What is the result of:

console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
Whoa . . .

The above console.log is two levels deep of combineCats.

Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
Your output should look something like:*/



