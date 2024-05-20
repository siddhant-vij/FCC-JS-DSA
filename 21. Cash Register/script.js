let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const cashFromCustomer = document.querySelector("#cash");
const purchaseBtn = document.querySelector("#purchase-btn");
const priceEl = document.querySelector("#price");
const cidEl = document.querySelector("#cid");
const changeDue = document.querySelector("#change-due");

const formatPrice = (price) => {
  return `Total Price: $${price.toFixed(2)}`;
};

const cidHeading = () => {
  return `
  <p>Cash In Drawer</p>`;
};

const formatCid = (cid) => {
  return `
    <table>
      <tbody>
        ${cid
          .map(
            ([name, amount]) => `
            <tr>
              <td>
                ${name
                  .split(" ")
                  .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
                  .join(" ")}
              </td>
              <td style="padding-left: 20px">$${amount}</td>
            </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
};

const checkCashRegister = (price, cash, cid) => {
  const response = {
    status: "OPEN",
    change: [],
  };

  let changeDue = parseFloat((cash - price).toFixed(2));
  let sumCid = parseFloat(cid.reduce((a, b) => a + b[1], 0).toFixed(2));

  const currency = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  if (sumCid < changeDue) {
    response.status = "INSUFFICIENT_FUNDS";
    response.change = [];
  } else if (sumCid === changeDue) {
    response.status = "CLOSED";
    response.change = cid;
  } else {
    let finalChange = [];
    for (let i = 0; i < currency.length; i++) {
      let currencyType = currency[i][0];
      let currencyValue = currency[i][1];
      let cidItemValue = cid.find((item) => item[0] === currencyType)[1];

      if (changeDue > currencyValue && changeDue > cidItemValue) {
        changeDue -= cidItemValue;
        finalChange.push([currencyType, cidItemValue]);
      } else if (changeDue > currencyValue && cidItemValue > changeDue) {
        let toPay = Math.floor(changeDue / currencyValue) * currencyValue;
        changeDue -= toPay;
        changeDue = parseFloat(changeDue).toFixed(2);
        finalChange.push([currencyType, toPay]);
      }

      response.status = "OPEN";
      response.change = [...finalChange];
    }
    if (changeDue > 0) {
      response.status = "INSUFFICIENT_FUNDS";
      response.change = [];
    }
  }
  return response;
};

const updateUI = (change) => {
  if(change) {
    change.forEach(([currency, amount]) => {
      const index = cid.findIndex((item) => item[0] === currency);
      cid[index][1] = parseFloat((cid[index][1] - amount).toFixed(2));
    });
  }
  priceEl.innerHTML = formatPrice(price);
  cidEl.innerHTML = cidHeading() + formatCid(cid);
};

updateUI();

purchaseBtn.addEventListener("click", () => {
  const cash = Number(cashFromCustomer.value);
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (cash === price) {
    changeDue.innerHTML = "No change due - customer paid with exact cash";
    updateUI();
    return;
  } else {
    const { status, change } = checkCashRegister(price, cash, cid);
    changeDue.innerHTML = `Status: ${status} ${formatCid(change)}`;
    updateUI(change);
    return;
  }
});
