

function calculate(){
    
    var amounts = document.getElementById('amount').value;
    var persons = document.getElementById('person').value;

    // if (amounts === 0 || amounts === 1) {
    //     alert("Number of amounts should be greater than 1.");
    //     return;
    //   }

    if (amounts <= 0 ){
      document.getElementById('amount').style.border = '1px solid red' ;
      document.getElementById('Error').innerHTML = 'Please Enter a valid count' ;
       
    } else {
      document.getElementById('amount').style.border = '2px solid green' ;
    }

    

    document.getElementById('Error').style.color = "red" ;
   


      // if (persons === 0 || persons === 1) {
      //   alert("Number of persons should be greater than 1.");
      //   return;
      // }

      if (persons <= 0 ){
        document.getElementById('person').style.border = '1px solid red' ;
        document.getElementById('Error1').innerHTML = "Enter a valid amount" ;
      }else {
        document.getElementById('person').style.border = '2px solid green' ;
      }

      document.getElementById('Error1').style.color = "red" ;

      var result = amounts / persons;
      // document.getElementById("result").innerHTML = results;
      // console.log(results);

      document.getElementById("result").textContent = "Result: Rs. " + result.toFixed(2);

    
      document.getElementById("amount").value = "";
      document.getElementById("person").value = "";

}