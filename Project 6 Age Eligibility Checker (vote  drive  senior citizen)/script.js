
function check(){

    let age = Number(document.getElementById("age").value);

    if(age >= 60){
  result.innerText = " It's A Senior Citizen"
}

else if(18 <= age){
   result.innerText = "Eligible to Vote & Driving Vehicle";
}

else{
    result.innerText = "Not Eligible";
}
}