

// function randomValue1(){
//     var value1 = Math.random() * 150 ;
//     // var value2 = Math.random() * 100 ;
//     var num1 = parseInt(value1.toFixed());
//     // var num2 = parseInt(value2.toFixed());
//     document.getElementById('random1').value = num1;
//     // document.getElementById('random2').value = num2;

//     // document.getElementById('sum').value = `${num1+num2}`;
// }

// function randomValue2(){
    
//     var value2 = Math.random() * 100 ;
//     // var num1 = parseInt(value1.toFixed());
//     var num2 = parseInt(value2.toFixed());
    
//     // document.getElementById('random1').value = num1;
//     document.getElementById('random2').value = num2;

//     //document.getElementById('sum').value = `${num1+num2}`;
// }

// function randomValue1() {
//     var num1 = Math.floor(Math.random() * 100) + 1;
//     var num2 = Math.floor(Math.random() * 100) + 1;
  
//     document.getElementById("random1").innerHTML = "Number 1: " + num1;
//     document.getElementById("random2").innerHTML = "Number 2: " + num2;
//   }
  
//   function randomValue2() {
//     var num1 = parseInt(document.getElementById("random1").textContent.split(":")[1]);
//     var num2 = parseInt(document.getElementById("random2").textContent.split(":")[1]);
  
//     if (isNaN(num1) || isNaN(num2)) {
//       document.getElementById("sum").innerHTML = "Please generate numbers first";
//     } else {
//       var result = num1 + num2;
//       document.getElementById("result").innerHTML = "Result: " + result;
//     }
//   }


function randomValue2() {
    var num1 = parseInt(document.getElementById("random1").value);
    var num2 = parseInt (document.getElementById("random2").value);
    var result = num1 + num2;
    document.getElementById("sum").innerHTML = "sum : " + result;
  }

  function randomValue1() {
    var num1 = Math.floor(Math.random() * 100) + 1; 
    var num2 = Math.floor(Math.random() * 150) + 1;
    document.getElementById("random1").value = num1;
    document.getElementById("random2").value = num2;
  }
  
