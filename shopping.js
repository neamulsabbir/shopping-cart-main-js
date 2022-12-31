function productUpdate(productInputArea, updatePrice, price, isAdd) {
  const phoneInputField = document.getElementById(productInputArea);
  let productInput = parseInt(phoneInputField.value);
  const btn = document.getElementById("phone-button-plus");
  if (isAdd == true && productInput < 5) {
    productInput = productInput + 1;
  } else if (productInput > 0) {
    productInput = productInput - 1;
  }

  phoneInputField.value = productInput;

  const productPriceField = document.getElementById(updatePrice);
  const productPrice = parseInt(productPriceField.innerText);

  productPriceField.innerText = productInput * price;
}

function getInputValue(product) {
  const productInputfield = document.getElementById(product);
  const productInput = parseInt(productInputfield.value);
  return productInput;
}
function updateProductPrice() {
  const phoneTotal = getInputValue("phone-input") * 1219;
  const caseTotal = getInputValue("case-input") * 59;
  const subTotal = phoneTotal + caseTotal;
  const taxTotal = subTotal / 10;
  const total = subTotal + taxTotal;

  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-total").innerText = taxTotal;
  document.getElementById("total").innerText = total;
}

document
  .getElementById("phone-button-plus")
  .addEventListener("click", function () {
    productUpdate("phone-input", "phone-price", 1219, true);
    updateProductPrice();
  });

document
  .getElementById("phone-button-minus")
  .addEventListener("click", function () {
    productUpdate("phone-input", "phone-price", 1219, false);
    updateProductPrice();
  });

document
  .getElementById("case-button-plus")
  .addEventListener("click", function () {
    productUpdate("case-input", "case-price", 59, true);
    updateProductPrice();
  });

document
  .getElementById("case-button-minus")
  .addEventListener("click", function () {
    productUpdate("case-input", "case-price", 59, false);
    updateProductPrice();
  });
