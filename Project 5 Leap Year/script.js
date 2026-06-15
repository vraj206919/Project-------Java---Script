function checkLeapYear() {
    let enteredYear = Number(document.getElementById("yearInput").value);
    let output = document.getElementById("output");

    if (!enteredYear) {
        output.innerText = "Please enter a valid year.";
        return;
    }

    if ((enteredYear % 4 === 0 && enteredYear % 100 !== 0) || enteredYear % 400 === 0) {
        output.innerText = enteredYear + " is a Leap Year.";
    } else {
        output.innerText = enteredYear + " is Not a Leap Year.";
    }
}