function Fahrenheit() {

  let c = Number(document.getElementById("temprature").value);

  let f = (c * 9 / 5) + 32;

  document.getElementById("result").innerText =
    c + "°C = " + f + "°F";
}



function Celsius() {

  let f = Number(document.getElementById("temprature").value);

  let c = (f - 32) * 5 / 9;

  document.getElementById("result").innerText =
    f + "°F = " + c + "°C";
}