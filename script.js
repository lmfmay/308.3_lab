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
    /* Write a script that loops through the characters of a given CSV string and log each row of data.*/

// main assignment 
let demoData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
dataTable(demoData);

// test data
let testData = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;
dataTable(testData);

function dataTable(data) {
let table = [];
let row = [];
let cell = ``;
    // for-in allows index manipulation. Loop runs until end of str.
for (let i in data) {
    // store row
    if (data[i] !== `\n`) {
        // store 1 cell by adding each str char to cell. increment index of str until delimiter , is met.
        if (data[i] !== `,`){
            cell += data[i];
            i++;
        // when delimiter is met, store cell in the row array. Then reassign cell to empty str for the next iteration. Increment i to continue parsing data on current row.
        } else {
            row.push(cell);
            cell = ``;
            i++;
        }
    // when row ends, store last cell to row array. Then reassign cell to empty str for the next iteration. 
    }  else {
        row.push(cell);
        cell = ``;
        // Store row item to table array and ressign row to empty array for next iteration. Increment i to continue parsing data on next row.
        table.push(row);
        row = [];
        i ++;
    }
} 
// when str ends, store last cell to row array, and store last row to table array. Log table to see rows of data. 
row.push(cell);
table.push(row);
return console.log(table);
}