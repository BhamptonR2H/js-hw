// Very Easy
let num1 = 70
let num2 = 23

console.log("the difference between " + num1 + " and " + num2 + " is ", num1 - num2 )

// Easy
let name1 = "Brenden"
let name2 = "Tyler"

console.log("The name " + name1 + " is longer than " +  name2 + " by 2 letters ")

// Medium
let userInput = (prompt("Talk to me"))

if (userInput === userInput.toUpperCase()){
    console.log("You are Yelling")
}else if (userInput === userInput.toLowerCase()){
    console.log("You are whispering")
}else console.log("This is Perfect")





//Hard
function sum(x,y){
    return x + y;
}

console.log(3+6)

function subtract(x,y){
    return x - y;
}

console.log(20-9);

function multiply(x,y){
    return x * y;
}

console.log(10 * 10);

function divide(x,y){
    return x/y;
}

console.log(20/2);

// Very hard
let userAnswer = parseInt(prompt("Choose a number"))
let userAnswer2 = parseInt(prompt("Choose a second number"))
let userAnswer3 = (prompt("Choose a operator"))

if(userAnswer3 === '+'){
    function sum(){
        console.log(userAnswer + userAnswer2)
    }
    sum()
} else if (userAnswer3 === '-') {
    function subtract(){
        console.log(userAnswer - userAnswer2)
    }
    subtract()
}else if (userAnswer3 === '*') {
    function multiply(){
        console.log(userAnswer * userAnswer2)
    }
    multiply()
}else if (userAnswer3 === '/'){
    function divide(){
        console.log(userAnswer / userAnswer2)
    }
    divide()
}