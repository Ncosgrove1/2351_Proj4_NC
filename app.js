// concatenated string variable below // 

const food = "chocalate";
const drink = "milk"; 
const food2 = "waffles";
const amount = 2; 

console.log(`One of my favorite breafest combinations is ${food} ${drink} with ${amount} ${food2} and syrup.`);

// "If" Conditional statement below // 

console.log("\n");

const greeting = 11;

if (greeting <= 11 ) {
  console.log("Rise and shine!");
} else if (greeting === 12) {
  console.log("Did you enjoy sleeping in?");
} else if (greeting > 12) {
  console.log("Time to relax and unwind.");
} else {
  console.log("Hello there.");
}

// Switch Statement below // 

console.log("\n");

const Color = "Blue";
switch (Color) {
  case "Red":
  case "Blue":
  case "Yellow":
 
    console.log("This is a PRIMARY color.");
    break;
  case "Green":
  case "Orange":
  case "Purple":
    
    console.log("This is a SECONDARY color.");
    break;
  default:
    console.log("A color hasn't been identified...");
}

// String Method Below (String Split)  //

console.log("\n");

function Mysplitstring(stringToSplit, separator) 

{
const arrayOfStrings = stringToSplit.split(separator);

  console.log("The unalterd starting string is:", stringToSplit);
  console.log("The separatoring factor is:", separator);
  
  console.log(
    "The array has",
    arrayOfStrings.length,
    "elements:",
    arrayOfStrings.join(" | "),
  );
}

const tempestString = "I wish to wish the wish you wish to wish.";

// NOTE - The sepearting factor is the space between the elements(words) itself, hence it shows a "blank" space. // 

const monthString = "She,sells,seashells,by,the,seashore,and,the,shells,she,sells,are,seashells";

const space = " ";
const comma = ",";

Mysplitstring(tempestString, space);

console.log("\n");

Mysplitstring(monthString, comma);

// Number method below, using the toPrecision() Method // 

console.log("\n");

let number = 6.123456789;

console.log(number.toPrecision( )); 

console.log(number.toPrecision(8)); 

console.log(number.toPrecision(3)); 

console.log(number.toPrecision(5)); 

console.log("\n");

number = 0.002014;

console.log(number.toPrecision( )); 

console.log(number.toPrecision(6)); 

console.log(number.toPrecision(2)); 

console.log(number.toPrecision(1)); 

// // 
