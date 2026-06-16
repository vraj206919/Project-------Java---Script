
function checkPalindrome() {
  
    let num = document.getElementById("number").value;
 
  let reverse = "";

  for (let i = num.length - 1; i >= 0; i--) {
    reverse += num[i];
  }

  if (num == reverse) {
    result.innerText = "This is Palindrome Number";
  }
  
  else {
    result.innerText = "This is Not a Palindrome Number";
  }
}