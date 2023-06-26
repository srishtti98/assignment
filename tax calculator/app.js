

function taxCalculate(name , salary){

    var userName = document.getElementById("name").value
    var userSalary = document.getElementById("salary").value

    if(userSalary <= 300000){
       document.getElementById("noTax").innerHTML = `${userName}! You are tax free`;
       document.getElementById("tenPercent").value = "0";
       document.getElementById("twentyPercent").value = "0";
       document.getElementById("total").value = `No tax deductions` ;
       

    } else if(userSalary <= 600000){
        let deduction = (userSalary-300000)*0.1;
        document.getElementById("tenPercent").value = deduction;
        document.getElementById("twentyPercent").value = "0";
        document.getElementById("total").value = deduction;

    }else if(userSalary > 600000){
        let deduction1 = 30000 ;
        let deduction2 = (userSalary-600000)*0.2 ;
        document.getElementById("tenPercent").value = deduction1;
        document.getElementById("twentyPercent").value = deduction2 ;
        let totalTax = deduction1 + deduction2;

        console.log(totalTax);
        document.getElementById("total").value = totalTax ;
    
    }
    





}