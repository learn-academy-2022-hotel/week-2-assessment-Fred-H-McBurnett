// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
// console.log(cohort.split(""))

// a) Your answer: Your answer: From reading the code, I would expect the output to as follows: "Hotel", "2022". I am basing my answer on the fact that the .split method in JavaScript takes the const variable and breaking it into an array of substrings. This basically takes Hotel 2022, and separates it into an array with the values of Hotel and 2022.
// b) Verify and explain: Verify and explain: When I ran the code as is, I did not see any output to the console. Thus, I can only think that because we are trying to console.log the same const, it does not work, because you have not provided a new variable to contain the array created by the .split method. Since it is not possible to redefine cohort, the code fails.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:  I would expect the output on the screen to be "Hello, LEARN student!"  This is based on the function greeter adding the argument "LEARN student" to the end of the function call.

// b) Verify and explain:  Running the code as written will return an "undefined" to the screen as a response.  Similar to the above concept, it is because you cannot redefine the original constant of "greeter".  In order to actually have the code output what is expected, you have to add in a variable to the function, which contains the `Hello, ${name}!` result. After having the variable named, you would call that information.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:  I would expect this function to return an array with the contents of [8, 10, 12, 14, 16], because that is what the original array multiplied by 2 would return to the console.  As opposed to the above concepts, in this case the const is not being redefined by being called a second time with modifiers.

// b) Verify and explain:  Upon running this code, the result I expected occured.  The difference between this and the 2 concepts above is that you are not trying to redefine the const multipliedBy2, but you are only calling for it to be used in the output.  By using the .map method in JavaScript, you are telling the function to do the multiplication on each item in the array, and to store that value in the constant multipliedBy2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:  In this concept, I would expect the console screen to only show the following numbers in the new array onlyOdds: [11, 13, 15].  This is due to the fact that the original array is being filtered by each term being compared to the term divided by 2 and not having a 0 remainder.

// b) Verify and explain:  Running this snippet of code produced the results I thought it would.  The .filter method in javascript took eact value in the array, divided it by 2, and compared the resulting remainder to whether it was a 0 or not.  If it was, the term was not added into the new variable onlyOdds.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: If I am reading the code correctly, the response in the console.log would be JavaScript, since that is the value located at index value 0 in the language declaration.  After it has done its search, the code has not been told to do anything else.

// b) Verify and explain:  As I expected, the code shows JavaScript on the screen, as that is the term located at index 0 in the array languages.  There is no other call for the code to display anything beyond that. If you added another console.log(myCodingSkills.frameworks[1]), you would see "Ruby on Rails" appear on the screen, since that is the value located at index 1 of the frameworks array. 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:  The code as written should display the following to the screen:
  //   Learn {student: 'George', cohort: 'Hotel', year: '2022'}
  // This occurs because you have given the code a new argument of George for the student variable.  Assigning the argument of 'George' allows that argument to be read into the class Learn.

// b) Verify and explain:  Upon running this code, I see that my answer was correct.  The reason for this is because student name is left as a parameter, and as the code runs, the remaining values are both constants and therefore unchangable.  While doing some experimenting, I also learned that it is not possible to add any other arguments into the learnStudent const.  Once it is defined, it becomes immutable.