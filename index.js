const totalAmount = document.getElementById("totalAmount");
const card = document.querySelectorAll(".card");
const receipt = document.querySelector(".receipt");
const items = document.getElementById("items");
const names = document.querySelectorAll(".card > h3");
const sellButton = document.querySelectorAll(".buttons > button:first-child");
const buyButton = document.querySelectorAll(".buttons > button:last-child");
const countItem = document.querySelectorAll(".buttons > input");
const price = document.querySelectorAll(".card>h4");

var totalAll = 0;
var countAddItemAll = 0;
let totalMoneyAmount = 187000000000;

//totaldiv
let totalDiv = document.createElement("div");
totalDiv.id = "totalDiv";
let totalName = document.createElement("h3");
totalName.textContent = "Total";
let totalValue = document.createElement("h3");
totalValue.textContent = "$0.00";
// totalValue.textContent = totalCount - totalAll;
totalDiv.append(totalName, totalValue);

for (let i = 0; i < card.length; i++) {
  buyButton[i].addEventListener("click", () => {
    receipt.style.display = "block";
    const priceNum = parseFloat(
      price[i].textContent.replace("$", "").replaceAll(",", "")
    );
    countAddItemAll = ++countItem[i].value;
    sellButton[i].style.backgroundColor = "red";
    const itemPrice = priceNum;

    //check
    const existingItemDiv = document.getElementById(`item-${i}`);
    if (existingItemDiv) {
      // Update existing item div
      const itemCount = existingItemDiv.querySelector(".item-count");
      const itemPriceElement = existingItemDiv.querySelector(".item-price");
      itemCount.textContent = countAddItemAll;
      itemPriceElement.textContent = priceNum * countAddItemAll;
    } else {
      //itemdiv
      let itemDiv = document.createElement("div");
      itemDiv.id = `item-${i}`;

      let itemName = document.createElement("h3");
      itemName.textContent = names[i].textContent;

      let itemCount = document.createElement("h3");
      itemCount.textContent = countAddItemAll;
      itemCount.classList.add("item-count");

      let itemPriceElement = document.createElement("h3");
      itemPriceElement.textContent = "$" + priceNum * countAddItemAll;
      itemPriceElement.classList.add("item-price");

      // // line
      // let line = document.createElement("div");
      // line.style.width = "80%";
      // line.style.margin = "auto";
      // line.style.height = "1px";
      // line.style.borderBottom = "1px dashed rgb(255, 255, 255)";
      //append
      itemDiv.append(itemName, itemCount, itemPriceElement);
      items.appendChild(itemDiv);
      items.append(totalDiv);
    }
    const totalCount = parseFloat(
      totalAmount.textContent.replace("$", "").replaceAll(",", "")
    );
    //update
    totalAll += itemPrice;
    totalAmount.textContent = "$" + (totalCount - itemPrice);
    totalValue.textContent = "$" + totalAll;
  });

  sellButton[i].addEventListener("click", () => {
    if (countItem[i].value > 0) {
      let countRemoveItemAll = --countItem[i].value;
      const priceNum = parseFloat(
        price[i].textContent.replace("$", "").replaceAll(",", "")
      );
      const itemPrice = priceNum * countRemoveItemAll;
      totalAll -= priceNum;
      totalAmount.textContent =
        "$" +
        (parseFloat(
          totalAmount.textContent.replace("$", "").replaceAll(",", "")
        ) +
          priceNum);
      //check
      const existingItemDiv = document.getElementById(`item-${i}`);
      if (existingItemDiv) {
        // Update
        const itemCount = existingItemDiv.querySelector(".item-count");
        const itemPriceElement = existingItemDiv.querySelector(".item-price");
        itemCount.textContent = countRemoveItemAll;
        itemPriceElement.textContent = itemPrice;
        // Remove item div if count becomes 0
        if (countRemoveItemAll === 0) {
          existingItemDiv.remove();
        }
      }
    }
    if (countItem[i].value == 0) {
      sellButton[i].style.backgroundColor = "rgb(220, 220, 220)";
    }
    // Update total div
    totalValue.textContent = "$" + totalAll;
  });
}
