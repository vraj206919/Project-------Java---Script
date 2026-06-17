function PriceCheaker() {

  let Age = Number(document.getElementById("Age").value);

  let ticketPrice;

  if (Age < 12) {
    ticketPrice = 100;
  }
  else if (Age < 60) {
    ticketPrice = 200;
  }
  else {
    ticketPrice = 150;
  }

  document.getElementById("result").innerText =
    "Ticket Price = ₹" + ticketPrice;
}