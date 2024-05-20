const numInput = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const output = document.querySelector("#output");

const errorMsg = (err) => {
  output.style.color = "red";
  if (err === 0) {
    output.textContent = "Please enter a valid number";
  } else if (err === 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (err === 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
  }
};

const convertToRoman = (num) => {
  const romanNumeral = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";
  for (const key in romanNumeral) {
    while (num >= romanNumeral[key]) {
      roman += key;
      num -= romanNumeral[key];
    }
  }

  output.style.color = "green";
  output.textContent = roman;
};

const updateUI = () => {
  if (numInput.value === "") {
    output.style.display = "block";
    output.style.fontSize = "1.25rem";
    errorMsg(0);
  } else if (Number(numInput.value) < 1) {
    output.style.display = "block";
    output.style.fontSize = "1.25rem";
    errorMsg(1);
  } else if (Number(numInput.value) > 3999){
    output.style.display = "block";
    output.style.fontSize = "1.25rem";
    errorMsg(3999);
  } else {
    output.style.display = "block";
    output.style.fontSize = "1.25rem";
    convertToRoman(Number(numInput.value));
  }
};

convertBtn.addEventListener("click", updateUI);

numInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    updateUI();
  }
});
