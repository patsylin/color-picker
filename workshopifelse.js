//Is truthy

//create input variable
//have a conditional statment
    //if true, return true;
    //if false return strings

const input = ''

if(input){
    console.log(true);
}else if(input === ''){
    console.log(`The empty string is falsy (the only falsy string)`);
}else if(null){
    console.log(`The ${input} is falsy`);
}else if(undefined){
    console.log(`${input} is falsy`);
}else if(input === 0){
    console.log(`The number ${input} is falsy(the only falsy number`);
}else if(!input){
    console.log(`The ${typeof input} false is falsy`);
}

//Number Line

//create a script tag that takes the sum of two variables
  //print the result

const input1 = 0;
const input2 = -1001;
let sum = input1 + input2;

if(sum > 100){
    console.log(`${sum} is greater than 100`);
}else if(sum > 0){
    console.log(`${sum} is greater than 0`);
}else if(sum === 0){
    console.log(`${sum} is equal to 0`);
}else if(sum < 0 && sum >= -1000){
    console.log(`${sum} is a negative number`);
}else if(sum < -1000){
    console.log(`${sum} is less than -1000`);
}

//Greater than 5
// create 2 variables
    // 2 variables for parameters
// create conditional statement
    // if num1 and num2 are equal to or greater than 5
         // return true
        // else return false

const num1 = 5;
const num2 = 5;
if(num1 >= 5 && num2 >= 5){
    console.log(true);
}else{
    console.log(false);
}

//Pair and Compare
//create 4 variables
//create if statement
    //if one pair is true, then print true
        //else, then print true

const param1A = 'cake';
const param1B = 'cake';
const param2A = 'pie';
const param2B = 'pie';

if(param1A === param1B || param2A === param2B){
    console.log(true);
}else{
    console.log(false);
}
