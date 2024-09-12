// PART 1: FIZZ BUZZ PROBLEM
    /*Accomplish the following:
    Loop through all numbers from 1 to 100.
    If a number is divisible by 3, log “Fizz.”
    If a number is divisible by 5, log “Buzz.”
    If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    If a number is not divisible by either 3 or 5, log the number.*/

// let fbNum = 1;
// while (fbNum <= 100) {
//     // start with strictest conditions.
//     if (fbNum % 3 == 0 && fbNum % 5 == 0) {
//         console.log(`Fizz Buzz`);
//     } else if (fbNum % 3 == 0) {
//         console.log(`Fizz`);
//     } else if (fbNum % 5 == 0) {
//         console.log(`Buzz`);
//     } else {
//         console.log(fbNum);
//     }
//     fbNum ++;
// }

//PART 2: PRIME TIME
    /*Write a script that accomplishes the following:
    Declare an arbitrary number, n.
    Create a loop that searches for the next prime number, starting at n and incrementing from there.
    As soon as you find the prime number, log that number and exit the loop.*/

// let n = 539;

// myLoop: while (true) {
//     n ++;
//     // Account for n being <= 1, skip the rest.
//     if (n <= 1) {
//         continue;
//     }
//     // Check if n=2 or n=3. If yes, prime number is found and loop stops.
//     if (n == 2 || n == 3) {
//         console.log(n);
//         break;
//     }
//     // Check whether n is divisible by 2 or 3. If yes, not prime, skip the rest.
//     if (n % 2 == 0 || n % 3 == 0) {
//         continue;
//     }
//     // Check if n is divisible by prime numbers from 5 all the way to square root of n. 
//     // Increment i by 6 because prime numbers take the pattern of 6k + 1 or 6k - 1. If n is divisible by any of the prime numbers, n is not prime.
    
//     for (let i = 5; i <= Math.sqrt(n); i += 6) {
//         if (n % i == 0 || n % (i + 2) == 0) {
//             continue myLoop;
//         }
//     }
//     // if all tests failed, means n is a prime number.
//     console.log(n);
//     break myLoop;
// }

//PART 3: FEELING LOOPY
    /* Write a script that accomplishes the following:
    Loop through the characters of a given CSV string.
    Store each “cell” of data in a variable.
    When you encounter a comma, move to the next cell.
    When you encounter the “\r\n” sequence, move to the next “row.”
    Log each row of data. You do not need to format the data.*/

let demoData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let table = [];
let row = [];
let cell = ``;

// get words in row [1]
// for (let i in demoData) {
            
//     if (demoData[i] !== `\n`) {
//         if (demoData[i] !== `,`){
//             cell += demoData[i];
//             i++
//         } else {
//             row.push(cell);
//             cell = ``;
//             continue;
//         }
//     }  else {
//         row.push(cell);
//         cell = ``;
//         break;
//     }  
// }
// console.log(row);

// // push row to table.
// table.push(row);
// // log each row in table.
// for (i in table); {
//     console.log(table[i]);
// }


        for (let i in demoData) {
            if (demoData[i] !== `\n`) {
                if (demoData[i] !== `,`){
                    cell += demoData[i];
                    i++;
                } else {
                    row.push(cell);
                    cell = ``;
                    i++;
                    // continue cellLoop;
                }
        }  else {
            row.push(cell);
            cell = ``;
            table.push(row);
            row = [];
            i ++;
            continue;
        }
        } 
        row.push(cell);
        cell = ``;
        table.push(row);
        row = [];
        console.log(table);


