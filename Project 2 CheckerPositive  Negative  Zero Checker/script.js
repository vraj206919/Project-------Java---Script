document
  .getElementById("checkForm")
  .addEventListener("submit", function (event) {

    // Stop page refresh after form submission
    event.preventDefault();

    // Read the entered number
    const enteredValue = Number(
      document.getElementById("userNumber").value
    );

    // Area where the result will be shown
    const messageBox = document.getElementById("displayResult");

    if (enteredValue > 0) {
      messageBox.textContent = "The number is Positive";
      messageBox.style.color = "green";

    } else if (enteredValue < 0) {
      messageBox.textContent = "The number is Negative";
      messageBox.style.color = "red";

    } else {
      messageBox.textContent = "The number is Zero";
      messageBox.style.color = "orange";
    }
});