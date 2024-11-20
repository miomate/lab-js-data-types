/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister  = `${s1} ${s2} ${s3} ${s4} ${s5}`
console.log(tongueTwister )
// Print out the concatenated string


console.log("----------------done---------------")

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/

let result;

  const part1 = "java";
  const part2 = "script";

function myFunction(part1, part2) {
    
    function truncateString(str, num) {
  
        
        if (str.length > num) {
            return str.slice(0, num);
        } else {
            return str;  // Return the string as is if it's shorter than or equal to num
        }
    }
    let lengthPart1 = part1.length; 
    let part1upperCase = part1[lengthPart1-1].toUpperCase(); //A
    let newPart1 = truncateString(part1, lengthPart1-1) + part1[lengthPart1-1].toUpperCase();

    let lengthPart2 = part2.length; 
    let part2upperCase = part2[lengthPart2-1].toUpperCase(); //A
    let newPart2 = truncateString(part2, lengthPart2-1) + part2[lengthPart2-1].toUpperCase();
    

  
    finalWord = newPart1+newPart2;
    // console.log(finalWord);
    
    return console.log(finalWord);
    
  }

myFunction(part1, part2)

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
function calculateTipp(bill){
    let tip = (bill / 100) * 15;
    finalBill = bill + tip;
    // console.log(tip);
    
    return finalBill;
}
let yy = calculateTipp(billTotal);

// Print out the tipAmount

console.log(yy);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
let randomNumber2 = randomNumber();

// Print the generated random number

console.log(randomNumber2);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log("a && b;____true" );
console.log(expression1);

console.log("-------------");

const expression2 = a || b;
console.log(" a || b;____true" );
console.log(expression2);

console.log("-------------");

const expression3 = !a && b;
console.log(" !a && b;____false" );
console.log(expression3);

console.log("-------------");

const expression4 = !(a && b);
console.log("!(a && b);____true" );
console.log(expression4);

console.log("-------------");

const expression5 = !a || !b;
console.log("!a || !b;____true");
console.log(expression5);

console.log("-------------");

const expression6 = !(a || b);
console.log("!(a || b);____false" );
console.log(expression6);

console.log("-------------");

const expression7 = a && a;
console.log("a && a;____true" );
console.log(expression7);

console.log("-------------");
