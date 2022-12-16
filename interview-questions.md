# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer:  A parameter is one of the variables in a function, while an argument is the data you pass into the methods parameters.  For instance:
    function add(x, y) {
        return x + y
    }
    add(2, 3)
In the above example, X and Y are the parameters for the function, while 2 and 3 are the arguments passed into those parameters.  The arguments of 2 amnd 3 are passed into the parameters X and Y respectively. 

Researched answer:  One way to think of parameters is that they are placeholders for function arguments.  Only upon being given a value will the arguments be passed into the parameters.  By assigning parameters to the function, rather than specific values, allows the function to be reused and accept input from users or when calling a function inside of another function.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:   The built-in method of .map takes in parameters which are a function call (required), the currentValue (required), an index (optional), array of the current element (optional), and a thisValue (optional and by default set to undefined.)  The .map method will return a new array that is the result of the function for each element in the array.

Researched answer: While doing additional research, I learned that .map is an ECMSScript (ES5) feature.  As such, it is fully supported by all major browsers.  ES5 was the standard set in 2009 for JavaScript.  The .map method makes it easier to get a new array from an existing one, though this method actually returns an array with the same number of elements as the initial array. 

3. What is the difference between map and filter?

Your answer:  Map and Filter differ in the following ways:
    1. Map is a method that will convert each item in an array, while Filter is a method that is used to select certain items of an array.
    2. Map passes each element of an array on which it is invoked to the function specified, and returns an array containing the values returned by the function. Filter, on the other hand, returns a subset of the elements of the array on which it was invoked. 
    3. Using the Filter method on an array should only result in one of two values, true or false! Only those items returning a true will be passed into the new array. 

Researched answer:  Further research gave me a clearer understanding of the key difference.  When using map, you will get a new array from the callback that modifies the array upon completion.  Filter, instead, only adds new values to the array that are deemed true.  If the evaluation of the item in the array is deemed false, it is left out of the new array.

4. What is iteration?

Your answer: An iteration is one pass through a loop in javascript.  The number of times an iteration will occur is defined in the parameters of the loop itself.  
    For instance:
    for (i = 0; i <= 10; i++) {}
    In this example of the for loop, it will pass through 10 iterations of the loop, or it will process the code block 10 iterations (times) before stopping.

Researched answer:  In my further research, I noted that while there are many kinds of loops, they all essentially do the same thing, repeating an action some number of times (including the possibility of zero). Each mechanism for loops offer different ways in which to determine the start and end points of the loop itself.

5. What is the difference between a class and an object?

Your answer:  Class is a feature in JavaScript that defines the properties of an object, such as its range and a default value.  It also describes the behaviour of the object.  An object, on the other hand, has a state in which all of its properties have values explicitly defined or defined by default settings.  A class is the blueprint for creating and declaring objects, while an object is an instance used by programmers to use variables and methods inside the class.

Researched answer:  In my research, I learned that classes have no physical existence.  Instead, they are created as a template for making objects in JavaScript. Objects that are defined with classes must use the 'this' keyword. However, if the class is passed into a callback function, it can begin to cause binding issues and errors.   I also learned that JavaScript is NOT an object-oriented language, unlike Java; instead, it is a prototype-oriented language.  In the JavaScript language, EVERYTHING is an object, and the class definition was added to JavaScript as a concession to developers more familiar with C# and Java.

6. STRETCH: What is hoisting in JavaScript?

Your answer:  Hoisting is JavaScript's default behaviour for moving declarations to the top.  In other words, variables can be used prior to being declared.  Hoisting allows JavaScript to move all declarations to the top of the current scope (script or function).  Using const is a syntax error, so the code will not run.  Using let results in a ReferenceError.

Researched answer:  In Javascript, only declarations are hoisted, not initializations.  As such, it is possible to hoist the variable, but if it is not given a value prior to being called, it will return an error.  For this reason, it is very IMPORTANT to declare variables at the beginning of every scope.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories:  These look at the software from the perspective of the user.  Once the developer has implemented the story, they will get feedback from the users themselves.  
    There are 3 C's involved in user stories:
        1. The raw form, also known as the Card, is manually written on index "cards" to keep them short.  This card basically says I want or need to meet a goal, and if I accomplish the goal, what was the justification or business value of that.  The card is strictly a placeholder.
        2.  The Conversation is the second "C" in the user story.  This is necessary to get more details about the Card.  The conversation promotes the incremental collaboration of the agile team needed to build a shared understanding of the problem anbd potential solution.
        3.  The final C is Confirmation, which is the acceptance criteria that captures the basic requirements and translates them into test criteria, in order to leat us know we have succeeded in deivering the user story.

2. Spread operator:  A spread operator is used in javascript to unpack elements of iterable objects such as arrays, sets, and maps.  It is denoted by the use of 3 periods (...), and is very useful when combined with various pre-defined functions such as .push or .compare, as well as in manipulating arrays. 

3. React state:  The 'State' in REACT is used to contain data or information about the component.  While a component can change over time, whenever it changes, the component re-renders.  The change in state can happen through either user action or system-generated events. These changes dictate the behaviour of the component and how it shows up (renders).

4. React props:  Specialized REACT objects used to pass information from one component to another.  Props create a unidirectional flow of data and behaviour from the parent object to its nested component through conponent invocation.  Props cannot be changed, but are a "read only" value.

5. DOM events:  These allow JavaScript to register different event handlers on elements in an HTML file.  Events are usually used in combination with functions, and the function is not executed before the DOM Event occurs.