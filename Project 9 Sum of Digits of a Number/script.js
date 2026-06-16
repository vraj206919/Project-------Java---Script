function Sum(){
  
    let num = document.getElementById("number").value;
  
    let sum = 0;

  
  for(let i=0; i<num.length; i++){
    sum += Number(num[i]);
  }

  result.innerText = "Sum = " + sum;
}