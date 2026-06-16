function PrimeNumber() {
    let number = document.getElementById("number").value;

    let primenum = true;

    if (number <= 1) {
        primenum = false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            primenum = false;
            break;
        }
    }

    if (primenum) {
        document.getElementById("result").innerText = "Prime Number";
    } else {
        document.getElementById("result").innerText = "Not a Prime Number";
    }
}