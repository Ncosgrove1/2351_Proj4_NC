console.log("Below is a simple function that is envoked")

function repeat() {
console.log("Repeat after me#1"); 
console.log("Repeat after me#2"); 
console.log("Repeat after me#3"); 
}

repeat() ;

console.log("Below is a function that has set parameters in and out");

function adder(num1, num2) {
console.log(num1 + num2)
}

adder(60, 40);

console.log("Below is another funciton with parameters, however it is written slighlty different")

function multiply(a, b = 4) {
 return a * b;
  }
  
  console.log(multiply(7)); 

//This script is for the button to help show the event being passed//

function changetext() {
    const button = document.getElementById("btn").innerHTML = "See how the text changed!";
    }


    const bird = {
        Name: "BlueJay",
        Color: "Blue",
        Scientificname: "Cyanocitta cristata",
        Family: "Corvidae",
        Domain: "Eukaryota"
      };

      document.getElementById("Bird1").innerHTML ="This bird is a " +
      bird.Name + ", which is scientifically known as ," + bird.Scientificname;
