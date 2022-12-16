// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.


// Pseudo-code
// 1. Create a JEST test of the defined problem
// 2. Describe the function divBy3
// 3. It takes in the values provided in the problem
// 4. Expect to see object1 output "15 is divisible by 3"
// 5. Expect to see object2 output "0 is divisible by 3"
// 6. Expect to see object3 output "-7 is not divisible by 3"

// JEST TEST
    // describe divBy3 = (number) =>{
    //     it(returns object divisible by 3 or not divisible by 3, () => {
    //         expect if divBy is run "object1 is divisible by 3"
    //         expect if divBy3 is run "object2 is divisible by 3"
    //         expect if divBy3 is run "object3 is not divisible by 0"
    //     }
    // }
// JEST TEST 

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
// // Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
// // Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
// // Expected output: "-7 is not divisible by three"

// describe("divBy3", () => {
//     it("returns whether a given number is divisible by three or not", () => {
//         expect (divBy3(object1)).toEqual("15 is divisible by three")
//         expect (divBy3(object2)).toEqual("0 is divisible by three")
//         expect (divBy3(object3)).toEqual("-7 is not divisible by three")

//     }) 
// })

// b) Create the function that makes the test pass.

const divBy3 = (x) =>  {
    if (x.number % 3 === 0) {
        return `${x.number} is divisible by three`
    } else {
        return `${x.number} is not divisible by three`
    }
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// Pseudo-code
// 1. Create a test that will capitalize the first letter of each word in the given arrays
// 2. Describe the function shiftToCap
// 3. shiftToCap takes in the strings in the arrays
// 4. expect shiftToCap to capitalize the first letter in each array.

// Jest Test
// describe("shiftToCap", () => {
//     it("returns an array with the first letter of each element capitalized", () => {
//         expect (shiftToCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect (shiftToCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })
// })

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// Upon creating the test shown above, I received a good Failure, because the function shiftToCap has not yet been defined. Specific error is:
//  SyntaxError: Unexpected identifier 'shiftToCap'
// Since the function has not yet been defined, it cannot perform the function call.

// b) Create the function that makes the test pass.

const shiftToCap = ([array]) => {
    for (i = 0; i < array.length; i++) {
        array[i][0] = array[i][0].toUpperCase() + array[i].slice(1)
    }
    return array
}
shiftToCap(randomNouns1)
shiftToCap(randomNouns2)

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo-code
// 1. Create a function (firstVowel)
// 2.Function should call each variable to locate the index value of the first vowel in the word.
// 3. Function firstVowel will compare each word against a predefined variable vowels, which contain the vowels ("a", "e", "i", "o", "u")
// Function will return the location of the first vowel in each word as the position of the vowel in the index

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// a) Create a test with expect statements for each of the variables provided.

// JEST Test

// describe(firstVowel, () => {
//     it("returns the index location of the first vowel in each each const", () => {
//         expect(firstVowel(vowelTester1)).toEqual(1)
//         expect(firstVowel(vowelTester2)).toEqual(0)
//         expect(firstVowel(vowelTester3)).toEqual(2)
//     })
// })


// This test, like the others above, returns a good failure, in that it runs the test and recognizes that the const firstVowel is not yet defined.  Specifically, the error reads that the const firstVowel cannot be run before initialization.

// b) Create the function that makes the test pass.

var firstVowel = (x) => {
    for (i = 0; i < x.length; i++) {
        if (x.charAt(i).match(/[aeiou]/))
            return i
    } 
    
}
console.log(firstVowel(vowelTester1))

