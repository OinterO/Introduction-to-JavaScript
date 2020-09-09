// /************************************************************** Task 1: Warm-up! **************************************************************/
// //Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


    const votingAge = 18;
    function agecheck(age){
        if(age>=votingAge){
            return true
        }else {
            return false
        }
    }
agecheck(18);
    console.log(agecheck(18));
    

// // //Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
// // var x = 18


// // //Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var num1 = 1998;
var num2 = '1998';
if (num1 === num2) {
    console.log(true);
} else {
    console.log(false);
}

//Task d: Write a function to multiply a*b 
const multiply = a => b => a * b;
console.log(multiply(4)(3));



// // /************************************************************** Task 2 **************************************************************/
// // //Age in Dog years
// // //write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function calculateDogAge(age) {
    var dogYears = 7*age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);





// /************************************************************** Task 3 **************************************************************/
// //Dog feeder 
// //takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

// //feeding requirements
// // adult dogs at least 1 year 
// // up to 5 lbs - 5% of their body weight
// // 6 - 10 lbs - 4% of their body weight 
// // 11 - 15 lbs - 3% of their body weight 
// // > 15lbs - 2% of their body weight 

// // Puppies less than 1 year
// // 2 - 4 months 10% of their body weight
// // 4 - 7 months 5% of their body weight 
// // 7 - 12 months 4% of their body weight

// // when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
// function calculateDogFood(weight) {
//     var dogWeight = weight;
//     console.log("Your doggie is " + dogWeight + " weight old in dog years!");
// }
// function calculateDogFood(weight) {
//     var dogWeight = weight;




// /************************************************************** Task 4 **************************************************************/
// // Rock, Paper, Sissors
// // Your function should take a string (either rock paper or sissors)
// // it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// // use math.random to determine the computers choice 
// // hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors') {
      return userInput;
    } else {
      console.log('not a valid choice');
    }
  };
  
  function getComputerChoice() {
    switch(Math.floor(Math.random()*3)) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'scissors';
        break;
      case 2:
        return 'paper';
        break;
        };
  }
  
  function determineWinner(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    } else if (userChoice === 'paper'){
      if (compterChoice === 'scissors') {
        return 'Computer wins!';
      }else {
        return 'You win!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    } else if (userChoice === 'bomb') {
      return 'You win!';
    }
  };
  
  function playGame() {
    var userChoice = getUserChoice('scissors');
    var computerChoice = getComputerChoice()
    console.log(`you threw ${userChoice}`);
    console.log(`computer threw ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
  };
  

// // /************************************************************** Task 5 **************************************************************/
// // //Metric Converter
// // //a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

var kilometers = parseInt(prompt("Please enter kilometers:"));
var miles = kilometers / 1.6;
console.log(miles + " Miles");



// //b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

var minheight = toInches(ui.values[0]);
             //convert feet to cm
             var feetcm = minheight[0]/0.032808;
             var inchcm = minheight[1].substr(0, minheight[1].length - 1);


// /************************************************************** Task 6 **************************************************************/
// // 99 bottles of soda on the wall
// // create a function called annoyingSong
// // the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
var annoyingSong = "bottles";
var count = 99;
while (count > 0) {
  if (count == 1){
    var annoyingSong = "bottle"
  }
    console.log(count + " " + annoyingSong + " of beer on the wall");
    console.log(count + " " +  annoyingSong + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 0) {
      if (count == 1){
        var annoyingSong = "bottle"
      }
        console.log(count + " " + annoyingSong + " of beer on the wall.");
    } else {
      if (count < 1){
        var annoyingSong = "bottles"
      }
        console.log("No more " + annoyingSong + " of beer on the wall.");
    }
}
// /************************************************************** Task 7 **************************************************************/
// //Grade Calculator
// //write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
// //90s should be A 
// //80s should be B 
// //70s should be Cs 
// //60s should be D 
// //and anything below 60 should be F
  

if(points >= 90) {
    alert("Your letter grade is an A!");
    }
    if(points<=89&&points>=80) {
    alert("Your letter grade is a B !");
    }
    if(points<=79&&points>=70) {
    alert("Your letter grade is a C !");
    }
    if(points<=69&&points>=60) {
    alert("Your letter grade is a D !");
    }
    if(points<60) {
    alert("Your letter grade is an F !");
    }
  
  

// /************************************************************** Stretch **************************************************************/
// //Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// // Hint - you may need to study tomorrow's traning kit on arrays 
// // try looking up the .includes() method





// /************************************************************** Stretch **************************************************************/
// //Take Rock, Paper, Sissors further
// //update your rock papers sissors code below to take a prompt from a user using the window object
