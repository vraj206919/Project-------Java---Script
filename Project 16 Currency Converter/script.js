function toUSD() {
    let rupee = Number(document.getElementById("money").value);

    let usd = rupee / 94;

    document.getElementById("result").innerText =
        "USD = $" + usd.toFixed(2);
}

function toINR() {
    let usd = Number(document.getElementById("money").value);

    let rupee = usd * 94;

    document.getElementById("result").innerText =
        "INR = ₹" + rupee.toFixed(2);
}