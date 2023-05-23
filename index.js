const totalAmount = document.getElementById("totalAmount");
const sellButton = document.querySelectorAll(".buttons > button:first-child");
const buyButton = document.querySelectorAll(".buttons > button:last-child");
const countItem = document.querySelectorAll(".buttons > input");
const receipt = document.querySelector(".receipt");
const price = document.querySelectorAll(".card>h4");
const items = document.getElementById("items");
const names = document.querySelectorAll(".card > h3");

const total = totalAmount.textContent.replace("$", "").replaceAll(",", "");
const totalCount = Number(total);
var totalAll = 0;
var countAddItemAll = 0;
let count = 0;

//totaldiv
let totalDiv = document.createElement("div");
totalDiv.id = "totalDiv";
let totalName = document.createElement("h3");
totalName.textContent = "Total";
let totalValue = document.createElement("h3");
totalValue.textContent = "$0.00";
totalDiv.append(totalName, totalValue);
items.prepend(totalDiv);

for (let i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener("click", () => {
    receipt.style.display = "block";
    const priceNum = price[i].textContent.replace("$", "").replaceAll(",", "");
    const countAddItemAll = ++countItem[i].value;
    sellButton[i].style.backgroundColor = "red";

    const itemPrice = priceNum * countAddItemAll;
    const existingDiv = document.getElementById(`item-${i}`);
    if (existingDiv) {
      const itemCount = existingDiv.querySelector(".item-count");
      const itemPriceElement = existingDiv.querySelector(".item-price");
      itemCount.textContent = countAddItemAll;
      itemPriceElement.textContent = itemPrice;
    } else {
      //itemdiv
      let itemDiv = document.createElement("div");
      itemDiv.id = `item-${i}`;
      let itemName = document.createElement("h3");
      itemName.textContent = names[i].textContent;
      let itemCount = document.createElement("h3");
      itemCount.classList.add("item-count");
      itemCount.textContent = countAddItemAll;
      let itemPriceElement = document.createElement("h3");
      itemPriceElement.textContent = itemPrice;
      itemPriceElement.classList.add("item-price");
      itemDiv.append(itemName, itemCount, itemPriceElement);
      items.appendChild(itemDiv);
    }

    // line
    // let line = document.createElement("div");
    // line.style.width = "80%";
    // line.style.margin = "auto";
    // line.style.height = "1px";
    // line.style.borderBottom = "1px dashed rgb(255, 255, 255)";

    const totalCount = Number(
      totalAmount.textContent.replace("$", "").replaceAll(",", "")
    );
    totalAll += itemPrice;
    totalAmount.textContent = "$" + (totalCount - totalAll).toFixed(2);
    totalValue.textContent = "$" + totalAll.toFixed(2);
  });
  sellButton[i].addEventListener("click", () => {
    if (countItem[i].value > 0) {
      let countRemoveItemAll = --countItem[i].value;
      const priceNum = Number(
        price[i].textContent.replace("$", "").replaceAll(",", "")
      );
      const itemPrice = priceNum * countRemoveItemAll;
      totalAll -= priceNum;
      totalAmount.textContent =
        "$" +
        (
          Number(totalAmount.textContent.replace("$", "").replaceAll(",", "")) +
          priceNum
        ).toFixed(2);

      const existingDiv = document.getElementById(`item-${i}`);
      if (existingDiv) {
        const itemCount = existingDiv.querySelector(".item-count");
        const itemPriceElement = existingDiv.querySelector(".item-price");
        itemCount.textContent = countRemoveItemAll;
        itemPriceElement.textContent = itemPrice;
        if (countRemoveItemAll === 0) {
          existingDiv.remove();
        }
      }
    }
    if (countItem[i].value == 0) {
      sellButton[i].style.backgroundColor = "rgb(220, 220, 220)";
    }
    totalValue.textContent = "$" + totalAll.toFixed(2);
  });
}

function reset() {
  itemName.textContent = "";
  itemCount.textContent = "";
  itemPrice.textContent = "";
  totalName.textContent = "";
  total.textContent = "";
}
