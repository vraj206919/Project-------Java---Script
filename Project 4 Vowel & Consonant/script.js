function check() {
    let ch = document.getElementById("letterInput").value.toLowerCase();
    let result = document.getElementById("output");

    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        result.innerText = "Vowel";
    } else {
        result.innerText = "Consonant";
    }
}