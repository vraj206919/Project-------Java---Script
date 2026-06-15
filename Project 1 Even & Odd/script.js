function checkNumber() {
    let num = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

    if(num === ""){
        result.innerHTML = "Enter a Number";
        result.style.color = "red";
        return;
    }

    if(num % 2 === 0){
        result.innerHTML = num + " is Even";
        result.style.color = "green";
    }else{
        result.innerHTML = num + " is Odd";
        result.style.color = "orange";
    }
}