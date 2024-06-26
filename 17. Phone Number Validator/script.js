const userInput = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const resultsDiv = document.querySelector("#results-div");

const checkValidNumber = (input) => {
  const countryCode = "^(1\\s?)?";
  const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
  const spacesDashes = "[\\s\\-]?";
  const phoneNumber = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );
  phoneRegex.test(input)
    ? (resultsDiv.style.color = "#066637")
    : (resultsDiv.style.color = "#af0f0f");
  resultsDiv.innerHTML = `${
    phoneRegex.test(input) ? "Valid" : "Invalid"
  } US number: ${input}`;
};

checkBtn.addEventListener("click", () => {
  const input = userInput.value;
  if (input.length === 0) {
    alert("Please provide a phone number");
  } else {
    checkValidNumber(input);
  }
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkValidNumber(userInput.value);
  }
});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultsDiv.textContent = "";
});
