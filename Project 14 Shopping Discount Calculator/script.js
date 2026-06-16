function ShoppingAmount() {

  let ShoppingAmount = Number(document.getElementById("ShoppingAmount").value);

  let Discount = 0;

  if (ShoppingAmount >= 5000) {
    Discount = ShoppingAmount * 20 / 100;
  }

  else if (ShoppingAmount >= 2000) {
    Discount = ShoppingAmount * 10 / 100;
  }

  else {
    Discount = 0;
  }

  let finalShoppingAmount = ShoppingAmount - Discount;

  document.getElementById("result").innerHTML =
    
  "Discount = ₹" + Discount + "<br>" +
    
  "Final ShoppingAmount = ₹" + finalShoppingAmount;
}