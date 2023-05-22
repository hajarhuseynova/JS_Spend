const totalAmount = document.getElementById("totalAmount");
const sellButton = document.querySelectorAll(".buttons > button:first-child");
const buyButton = document.querySelectorAll(".buttons > button:last-child");
const countItem = document.querySelectorAll(".buttons > input");
const price = document.querySelectorAll(".card>h4");

const total = totalAmount.textContent.replace("$", "").replaceAll(",", "");
const totalCount = Number(total);
var totalAll = 0;
var countAddItemAll = 0;
let count = 0;

for (let i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener("click", () => {
    priceNum = price[i].textContent.replace("$", "").replaceAll(",", "");
    countAddItemAll = ++countItem[i].value;
    sellButton[i].style.backgroundColor = "red";
    totalAmount.textContent = totalCount - countAddItemAll * priceNum;
    totalAll = Number(totalAmount.textContent);
  });
}
for (let i = 0; i < sellButton.length; i++) {
  sellButton[i].addEventListener("click", () => {
    if (countItem[i].value > 0) {
      let countRemoveItemAll = --countItem[i].value;
      hasil = countAddItemAll - countRemoveItemAll;
      totalAmount.textContent = totalAll + hasil * priceNum;
    }
    if (countItem[i].value == 0) {
      sellButton[i].style.backgroundColor = "rgb(220, 220, 220)";
    }
  });
}
