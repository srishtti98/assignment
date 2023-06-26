

// Write a function named multiply that takes two numbers as arguments and returns their product.


function multiply (num1,num2){
    return num1 * num2 ;

}

var result = multiply(5,7)
console.log(result) ;


// Write a function named reverseString that takes a string as an argument and returns the reversed string.

function reverseString(str){
     var reverseStr = '' ;
     for (i= str.length-1 ; i >= 0 ; i--){
        reverseStr += str[i];
     }
     return reverseStr;
}
var result = reverseString("Hello")
console.log(result)





//Write a function named isEven that takes a number as an argument and returns true if the number is even, and false if it is odd.

function isEven(num){
    
    if(num % 2 == 0 ){
        console.log(true)
    } else{
        console.log(false)
    }
}

 isEven(4);
 isEven(7);


 //Write a function named capitalize that takes a string as an argument and returns the string with the first letter of each word capitalized.

 function capitalize(name){

   
 }



 //Write a function named factorial that takes a number as an argument and returns the factorial of that number.

 function factorial(number){
    if (number === 0 || number === 1){
        return 1;
    }

    return number * factorial(number-1);
 }

 console.log(factorial(5));


 // Write a function named largestNumber that takes an array of numbers as an argument and returns the largest number in the array.

 function largestNumber(array){
    
    if(array.length == 0){
        return null ;
    }
    let largest = array[0]

    for(i=0 ; i < array.length ; i++){
        if (array[i] > largest){

            largest = array[i]
           
        }
    }
   return largest ;
 }

 console.log(largestNumber([5, 6, 24, 71 , 45]));

 // Write a function named average that takes an array of numbers as an argument and returns the average of those numbers.

 function average (numbers){

    if (numbers.length === 0){

        return 0 ;

    }

    var total = 0 ;

    for(i=0 ; i< numbers.length ; i++ ){
        total += numbers[i];
        
    }

    var avg = total / numbers.length ;

    return avg ;
 }

 console.log(average([24, 35, 56 , 18, 90]));


 // Write a function named add that takes any number of arguments and returns their sum

 function add(){
    
    var sum = 0;
    for (var i =0 ; i< arguments.length ; i++){
        sum += arguments[i]
    }

    return sum ; 

 }

 console.log(add(176 , 45, 7.8 , 9 , 40))

 // Write a function named sumOfSquares that takes an array of numbers as an argument and returns the sum of their squares.

 function sumOfSquares(arr){
     
    var sum = 0 ;

    for (i= 0 ; i< arr.length ; i++){

        var square = arr[i] * arr[i] ;
        sum += square ;
    }
    return sum ;
 }

 console.log(sumOfSquares([ 1, 2, 3, 5]));

 