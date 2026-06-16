

function withdrawel() {

  let money = Number(document.getElementById("money").value);

  let note500 = 0;
  let note200 = 0;
  let note100 = 0;

  while (money >= 500) {
    note500++;
    money = money - 500;
  }

  while (money >= 200) {
    note200++;
    money = money - 200;
  }

  while (money >= 100) {
    note100++;
    money = money - 100;
  }

  document.getElementById("result").innerHTML =
    "500 Notes = " + note500 + "<br>" +
    "200 Notes = " + note200 + "<br>" +
    "100 Notes = " + note100;
}