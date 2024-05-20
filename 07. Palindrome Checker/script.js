const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const sanitizeInput = (input) => {
  return input.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
};

const checkPalindromome = () => {
  const sanitizedInput = sanitizeInput(textInput.value);
  const isPalindrome =
    sanitizedInput === sanitizedInput.split("").reverse().join("");
  result.textContent = isPalindrome
    ? `${textInput.value} is a palindrome`
    : `${textInput.value} is not a palindrome`;
};

checkBtn.addEventListener("click", () => {
  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    result.style.display = "block";
    result.style.fontSize = "1.25rem";
    checkPalindromome();
  }
});

textInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if (textInput.value === "") {
      alert("Please input a value");
    } else {
      result.style.display = "block";
      result.style.fontSize = "1.25rem";
      checkPalindromome();
    }
  }
});
