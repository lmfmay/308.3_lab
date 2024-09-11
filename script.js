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
As soon as you find the prime number, log that number and exit the loop.
Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
Be careful! If you set n to a number too large, your loop could take a long time to process.*/

let n = 539;

myLoop: while (true) {
    n ++;
    // Account for n being <= 1, skip the rest.
    if (n <= 1) {
        continue;
    }
    // Check if n=2 or n=3. If yes, prime number is found and loop stops.
    if (n == 2 || n == 3) {
        console.log(n);
        break;
    }
    // Check whether n is divisible by 2 or 3. If yes, not prime, skip the rest.
    if (n % 2 == 0 || n % 3 == 0) {
        continue;
    }
    // Check if n is divisible by prime numbers from 5 all the way to square root of n. 
    // Increment i by 6 because prime numbers take the pattern of 6k + 1 or 6k - 1. If n is divisible by any of the prime numbers, n is not prime.
    
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            continue myLoop;
        }
    }
    // if all tests failed, means n is a prime number.
    console.log(n);
    break myLoop;
}