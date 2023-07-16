//Only Odds
//declare a function
//create an empty array
//iterate through the input array with for loop
//create a conditional statment
//if input array el is odd, push into empty arr
//else keep iterating through the array
//return new array

function onlyOdds(arr) {
  const newArr = [];
  for (const element of arr) {
    if (element % 2 === 1) {
      newArr.push(element);
    }
  }
  return newArr;
}

// console.log(onlyOdds([2, 4, 6, 8, 11, 20, 15, 22]));//[11,15]
// console.log(onlyOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));//[1, 3, 5, 7, 9]
// console.log(onlyOdds([70, 42, 55, 81, 21, 91, 34]));//[55, 81, 21, 91]
// console.log(onlyOdds([2, 4, 6, 8, 10, 11, 12]));//[11]

//Vowel versus Consonant

    //create a consonant variable
    //create a vowel variable
    //have two counting variables
    //create empty string
    //iterate through the input string
        //conditional statement
            //if el is a consonsant --- add to consonsant counter
            //if el is vowel--- add to vowel counter
    //return a new string with the updated counts

function vowelVsConsonant(str){
    const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    const vowels = str.match(/[aeiou]/gi);
    return `${str} has ${consonants.length} consonants and ${vowels.length} vowels`
}

console.log(vowelVsConsonant('hello'));//"hello has 3 consonants and 2 vowels"
console.log(vowelVsConsonant('ukelele'));//"ukelele has 3 consonants and 4 vowels"
console.log(vowelVsConsonant('awesome'));//"awesome has 3 consonants and 4 vowels"
console.log(vowelVsConsonant('onomonopia'));//"onomonopia has 4 consonants and 6 vowels"
console.log(vowelVsConsonant('textbook'));//"textbook has 5 consonants and 3 vowels"


//Reverse Array

    //create an empty array
    //create a for loop that begins at the end of the input arr
        //fill in empty array with each el
    //return new arr

function reverseArray(arr){
    const newArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArray([1, 2, 3]));//[3, 2, 1]
console.log(reverseArray([1, 3, 5, 7, 9, 11]));//[11, 9, 7, 5, 3, 1]
console.log(reverseArray([20, 50, 30, 60, 200]));//[200, 60, 30, 50, 20]
console.log(reverseArray([1, -1, 2, -3, 5, -8, 13]));//[13, -8, 5, -3, 2, -1, 1]


//FizzBuzz
//create a loop
    //create a conditional statement
        //if num is % 3 and/or 5,
            //print out string
        //else print out number


    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }else if(i % 3 === 0){
        console.log('Fizz');
       }else if(i % 5 === 0){
        console.log('Buzz');
       }else{
        console.log(i);
       }
    }
