
function reverseNumber(){
  
    let num = document.getElementById("num").value;

    let reverse = "";

  for(let i = num.length - 1; i >= 0; i--){

    reverse += num[i];

}

result.innerText = "Reverse = " + reverse;

}