console.log('');
//Produces text in the console (f12)

// = is still assignment, ; end statements

let letName = `letValue`;
/*Let is how we define mutable variables 
 an UNDEFINED let has no assigned value */

const constName = `constValue`;
/*Const need to be assigned 
Const can't be changed post assignment 
Default to Const unless a variable will need edited */

var varName = `varValue`; 
// Vars run into the problem if you're running vars with the same name in multiple scopes (Global/Blcok)
// Can be recreated with same name and cause all kinds of problems 
//Don't Use when possible at the moment 

/* Variable Truths and Conventions: 
- Can't START with a number 
- Can't assign keywords to variable names
- Use camelCase or underscore_vars 
- Some people use _variable convention or $variable convention */

/*Operators 
    +   -   *   /  **   %
    + addition, - subtraction, * multiplication, / division
    ** is exponent (10**3 is 10 to the third), % is moduless, 10%3 = 1 (remainder)*/

/* Incremental Operators 
    ++    --   +=(value)   -=(value)
    ++ is +1 incrementation, -- is -1 incrementation
    +=(var) increments by var, -= is - value incrementation
*/


/*Data Types and Variables 

    typeof var; returns kind of variable 
    All variables have a truthy or falsey defaulted to them
        true is a truthy value; false is a falsey value; 0 is a falsey value
        FALSEY VALUES: Undefined, NaN, 0, false, empty strings (``. '', ""), and nulls
        TRUTHY: the rest 

Primative Data Type 
- Numbers: numeric; decimals and whole numbers 
- Strings: words, sentences, strings 
    ESCAPE: add a \ before each instance of a quote within a string 
    OR having single quotes in double quotes reads them as strings
    BACKTICKS (next to 1,  ``)
        Can include ${var} within backticks to reference variables within ``
        example: 
            const str1 = `hello`;
            const str2 = `, how are you?`;
            const str3= `The man asked ${str1}${str2};

- Booleans: true/false values 
- Undefined: empty let variables, no declared value 
- Null: Has no value; null. 
- Symbol: Symbol(); what does it do? No idea! But its a data type! 

*/

/* Arrays
    An object that is a list of information 
    [] contain objects with , breaking up each variable 
        located at 0,1,2,3,4,etc represented as arrayName[position]
    Useful methods: 
        pop: Removes last element of array and returns it
        push(element being added): Appends new elements to the array
        shift: removes first element
        unshift(element): adds to beginning 
        length : Returns number of elements in array  
        indexOf(element): Returns index of element 

    Ex: 
        const listUsers = [1,2,3,4,5,6,7];
        listUsers.push(8);
        console.log(listUsers);
*/


/*Concatination 
    
    String concatination (stringVar1+stringVar2 = 'textofboth')
    JS will convert num to str when attempting to concat them 
    if you try math logic on a string, will output NAN (Not a Number)

*/

/*Comparison Opperators 
    == compares values; returns true if equal, returns false if not
        Will convert strings to nums when checking if one is a num and other is num 
        10 == `10` is true
    != is not equals; returns false if equal, returns true if not 
    > and < compares left var to right var; returns t/f if one is greater than other 
    >= <= compares left/right vars; returns tf/ if greater or equal to other value 

    === compares values AND datatypes; use this. 
        10 === `10` is false 
    && is and statement; returns true if both sides are true 
    || is or statement; returns true if one or both sides are true 

*/

/*Loop Statements
    IF:        if(condition){} will run whats in the {} if the condition is true 
    ELSE IF:   if(condition){}else if(condition2){} runs if condition F, condition2 true
    ELSE       if(condition){}else{} runs when all prior if and else ifs conditions are false 
    SWITCH:    switch(var){case var: code;  case var2: code;};
        Breaks in between cases typically; if you find one case correct, it hops out of the switch state 
        Default case: default: code; 
    Switch Ex: 
        const userInput = prompt(`Tell me a fruit:`);
        const userInputLowercase = userInput.toLowerCase();

        switch(userInputLowercase){
            case `banana`:
                alert(`You said banana!`);break;
            case `blueberry`:
                alert(`You said blueberry!`);break;
            default: 
                alert(`I don't know that fruit!`);
            }
    FOR:        for(let variable; conditional statement; increment){}
                    Example: for(let i; i<10; i++){alet:i;}
                Continue breaks from current itteration and continues for loop 
                break exits the loop entirely
                use array.length as an easy way to get the number of itterations to run through an array

        For Exs:
                for (let i=0; i<10; i++){
                if(i === 5){
                        alert `Hello!`;
                        continue;   
                    }
                    else if(i=== 8){break;}
                    console.log(i);
                }
                
                const texts=[`Hello`,`Hey`,`Yes`];
                for (let i=0; i<texts.length;i++){
                    console.log(texts[i]);
                }
    FOR OF      for (var of array){code} 
                itterates through with var being the item at the itterated index 
    
                for (let text of arrayOfTexts){
                    console.log(text);
                    console.log(arrayOfTexts.indexOf(text));
                }
    FOR EACH    array.forEach(function(var1,var2,var3){})
                Callback function; will run function while itterating through array 
             Ex:   
                const arrayOfTexts = [`Yes`,`No`,`Me`,`You`];
                arrayOfTexts.forEach(function(index){
                    console.log(index);
                })
        Typically use for of loops with arrays (faster, easier)

    FOR IN      for(var in object){} itterates through where var is the key in itterative indecies
                user [var] will return the VALUE, where var is the property/key
            Ex:
                const user ={name:`Sam`, age:`24`, money:`lolno`}
                for(let i in user){
                console.log(user[i]);
                }
    WHILE       while (conditional statement){code}
                    Without an increment or something to change the condition will run infinitely 
    DO WHILE    do {code} while(condtion)
                    Always runs once even if false; otherwise, just a while loop
            Exs of Whiles
            let i = 20;

            while (i<30){
                console.log(i);
                i+=2;
            }

            do{
                console.log(i);
                i++;
            } 
            while(i <10);

 */

/* Functions 
    Functions are declared 
        function name (ARGUMENTS) {
            function logic 
        }

    FUNCTION INVOCATION is running a function; you just call it 
        functionName(parameters); 

    Can't access a variable outside of the var its declared in  without:
    ARGUMENTS: what we pass into functions
        Unassigned arguements default to undefined 
        You can assign default values in attribute declaration, allowing less info to pass in 

    PREDETERMINED FUNCTIONS: JS has many functions built in (Math.random(), for example)

    RETURN: passes a value from a function as a result of running the function 
        Not all functions return anything; some just execute code 

*/

//Function Examples

//Passing between 2 functions 
/*function greet(text){

    //Prompt and console.log are functions; () take in parameters 
    
    console.log(`Welcome ${text}!`);
    
}

function signUp(){
    const name = prompt(`What is your name?`);
    greet(name);
}

signUp(); 
*/

//Returning with Functions 
/*
function max(num1 = 0, num2 = 0){
    //Function recieving two values 
    if (num1>num2){
        return num1;
    }
    else if(num2>num1){
        return num2;
    }
    else if (num1===num2){
        return(`${num1} equals ${num2}`); 
    }
    else{
        return(`NaN`);
    }

}
const num3 = max(3);
console.log(num3);
*/

/* Objects 
    PROPERTY: a named element within an object (also the Key)
    METHOD: a function within an object
    KEY:    the identifying marker 
    VALUE:  this specific objects associated variable to the related key

    Getting Information:
        object.property(); returns the value of the object's given property 


    Example user object:
        const user = {
            name: `Ed`,
            age: `25 `,
            greet: function(){
                console.log(`Hello $name`)
            }
        };

        user.greet()

    The WINDOW object is made before the JS even starts, is a huge object we'll be using 
        Window contains the console object which we call methods from as well as lots of others 

*/

/* Scope
    GLOBAL SCOPE:   Variables declared within the document 
    FUNCTION SCOPE: Variables declared within a function 
        Declaring a variable with the same name as global won't overright global value; will change locally. 
    BLOCK SCOPE:    Variables declared within a loop 

    Defaults to Global scope variable name if undeclared within Function/Block scope but variable used 
    Ex:
        Global Scope
        let food = `apple`;
        
        Function Scope
        function foodFun(){
            let food = `pear`;
        }

        Block
        for(let food = 0; food<2; food++){console.log(food);}

    Vars can share names if the don't share scope 


*/