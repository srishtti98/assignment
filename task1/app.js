

// Implementation of conditional statements.

// if statement 

var hangulAge = 25 ;
var internationalAge ;
if(internationalAge = hangulAge-1){
    console.log(internationalAge)
}

// if else statement

var Komca = 17 ;

if(Komca>0){
    console.log("you are a songwriter")
}else{
    console.log("You are not a songwriter")
}

// if elseIf statement 

var komcaCredits = 187;

if(komcaCredits >0 && komcaCredits<20 ){
    console.log("you are a rookie songwriter")
}
else if (komcaCredits>=20 && komcaCredits<50){
    console.log("You are an average songwriter")
}
else if (komcaCredits>=50 && komcaCredits<100){
    console.log("you are an professional songwriter")
}
else if (komcaCredits>=100 && komcaCredits<150){
    console.log("You are a good songwriter")
}
else if (komcaCredits>=150 && komcaCredits<200){
    console.log("You are an exxeptional songwriter")
} 
else{
    console.log("You are just an idol")
}

// switch statement

let ieltsScore = 4 
 switch(ieltsScore){
    case 1: 
    console.log("No ability to use the language")
    break ;
    case 2 :
    console.log("You have difficulty in knowing te language")
    break;
    case 3 :
    console.log("You understand only general words")
    break;
    case 4 :
    console.log("Your comprehension is limited to basic situations")
    break;
    case 5 :
    console.log("You have partial command to the language")
    break;
    case 6:
    console.log("You can understand fairly ")
    break;
    case 7 :
    console.log("You have an optional command of the language")
    break;
    case 8 :
    console.log("You have fully operational command")
    break;
    case 9 :
    console.log("You are an expert")
    break ;
    default :
    console.log("Invalid score")
    

 }


 // arithmetic operators 

 //"+" operator :

 var a = 90;
 var b = 100;

 var result = a+b;
 console.log(result)

 // "-" operator :
  var result1 = a-b ;
  console.log(result1)

  // "*" operator :
  var result2 = a*b ;
  console.log(result2)

  // "/" operator :

  var result3 = a/b ;
  console.log(result3)

 var result4 = a % b ;
 console.log(result4)


 


