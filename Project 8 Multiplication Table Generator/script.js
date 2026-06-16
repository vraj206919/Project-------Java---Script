function MultipleTable(){
  
    let number = document.getElementById("number").value;
  
    let value = " ";

  for(let i=1; i<=10; i++){
   
    value += number + " x " + i + " = " + (number*i) + "<br>";
  
}

  result.innerHTML = value;

}