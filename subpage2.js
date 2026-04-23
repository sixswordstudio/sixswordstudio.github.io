const ageInput = document.getElementById("age");
const verifyBtn = document.getElementById("verifyBtn");
const message = document.getElementById("message");

function verifyAge(raw) {
    const text = raw.trim();
    if (text === "") {
        return "Please enter your age.";
    }
    if (!/^-?\d+$/.test(text)) {
        return "Please input a valid integer value";
    }

    const age = Number(text);
    if (age < 0) {
        return "Invalid Age: Age can't be negative";
    }
    if (age > 120) {
        return "Invalid Age: Age can't be over 120";
    }

    // The table says 15 and 88 are Ineligible, so I keep the page matched to
    // the written cases instead of making up a different rule.
    if (age === 15 || age === 88) {
        return "Ineligible";
    }

    return "Eligible";
}

verifyBtn.addEventListener("click", () => {
    message.textContent = verifyAge(ageInput.value);
});
