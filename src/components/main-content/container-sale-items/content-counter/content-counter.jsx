import Products from "../products/products.jsx";



let productsNameCard = document.querySelectorAll(".slider__parag");
let productValueCard = document.querySelectorAll(".slider__current-value");
let produtoParceladoCard = document.querySelectorAll(
  ".slider__value-in-installments"
);
let previousValueCard = document.querySelectorAll(".slider__previous-value");
let card = document.querySelectorAll(".container-sliders__slider");



function addContentCard(indice, indiceProduto) {
  let convertedValue = Products[indiceProduto].price;
  let convertedInstallmentValue = Products[indiceProduto].price / 2;
  let valueWithoutDiscount = Products[indiceProduto].price + 1000;

  productsNameCard[indice].innerText = Products[indiceProduto].productName;

  productValueCard[
    indice
  ].innerText = ` R$ ${convertedValue.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  })}`;
  

  produtoParceladoCard[
    indice
  ].innerText = `ou 2x de R$ ${convertedInstallmentValue.toLocaleString(
    "pt-br",
    {
      minimumFractionDigits: 2,
    }
  )} sem juros`;


  previousValueCard[
    indice
  ].innerText = `R$ ${valueWithoutDiscount.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  })}`;


  
}

export default function contentCounter() {
    
  for (let i = 0; i < card.length; i++) {
    switch (i) {
      case 0:

      case 9:

      case 18:
        addContentCard(i, 0);
        break;

      case 1:

      case 10:

      case 19:
        addContentCard(i, 1);
        break;

      case 2:

      case 11:

      case 20:
        addContentCard(i, 2);
        break;
      case 3:

      case 12:

      case 21:
        addContentCard(i, 3);
        break;

      case 4:

      case 13:

      case 22:
        addContentCard(i, 4);
        break;
      case 5:

      case 14:

      case 23:
        addContentCard(i, 5);
        break;
      case 6:

      case 15:

      case 24:
        addContentCard(i, 6);
        break;
      case 7:

      case 16:

      case 25:
        addContentCard(i, 7);
        break;
      case 8:

      case 17:

      case 26:
        addContentCard(i, 8);
        break;
    }
  }
}
contentCounter();



