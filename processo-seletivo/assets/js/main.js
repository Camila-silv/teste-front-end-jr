

const buttonRight = document.querySelectorAll(".button-right");
const buttonLeft = document.querySelectorAll(".button-left");
const sliders = document.querySelectorAll(".container-sale-items__container-sliders");
const popUp = document.querySelector(".popup");
const buttonPopUp = document.querySelector(".product-information__container-button-close");
const buttonSlider = document.querySelectorAll(".slider__button");



let toAssign0 = 0;
let toAssign1 = 0;
let toAssign2 = 0;
let click = false;


rightArrow();
leftArrow();
closeModal();
openModal();
scroll();




let productsName = "";
let productValue = "";
let productDescription = "";




const products = [
    {
        productName: "Iphone 11 PRO MAX BRANCO 1",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 1",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 15000
    },
    {
        productName: "IPHONE 13 MINI 1",
        descriptionShort: "IPHONE 13 MINI 1",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 9000
    },
    {
        productName: "Iphone 11 PRO MAX BRANCO 2",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 2",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 14990
    },
    {
        productName: "IPHONE 13 MINI 2",
        descriptionShort: "IPHONE 13 MINI 2",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 12000
    },
    {
        productName: "Iphone 11 PRO MAX BRANCO 3",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 3",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 4550
    },
    {
        productName: "IPHONE 13 MINI 3",
        descriptionShort: "IPHONE 13 MINI 3",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 38000
    },
    {
        productName: "Iphone 11 PRO MAX BRANCO 4",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 4",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 42000
    },
    {
        productName: "IPHONE 13 MINI 4",
        descriptionShort: "IPHONE 13 MINI 4",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 520
    },
    {
        productName: "Iphone 11 PRO MAX BRANCO 5",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 5",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 149990
    }

]

function scroll() {
    for(let i = 0; i < buttonSlider.length; i++) {
        buttonSlider[i].addEventListener("click", (e) => {
    
       
            window.scrollTo(0, 10);
           
            
           
        })
    }
}


function rightArrow() {

    for (let i = 0; i < buttonRight.length; i++) {
        buttonRight[i].addEventListener("click", () => {

            click = true;


            while (click) {

                switch (i) {
                    case 0:


                        if (toAssign0 < 1600) {

                            toAssign0 += 300;
                            sliders[i].style.right = `${toAssign0}px`;

                            if (toAssign0 == 1800) {
                                toAssign0 -= 200;
                                sliders[i].style.right = `${toAssign0}px`;
                            }

                        }
                        break;

                    case 1:

                        if (toAssign1 < 1600) {

                            toAssign1 += 300;
                            sliders[i].style.right = `${toAssign1}px`;

                            if (toAssign1 == 1800) {
                                toAssign1 -= 200;
                                sliders[i].style.right = `${toAssign1}px`;
                            }

                        }
                        break;

                    case 2:

                        if (toAssign2 < 1600) {
                            toAssign2 += 300;
                            sliders[i].style.right = `${toAssign2}px`;

                            if (toAssign2 == 1800) {
                                toAssign2 -= 200;
                                sliders[i].style.right = `${toAssign2}px`;
                            }
                        }


                        break;
                }
                click = false;
            }


        })
    }


}

function leftArrow() {

    for (let i = 0; i < buttonLeft.length; i++) {
        buttonLeft[i].addEventListener("click", () => {
            click = true;

            while (click) {



                switch (i) {


                    case 0:

                        if (toAssign0 > 0) {
                            toAssign0 -= 300;
                            sliders[i].style.right = `${toAssign0}px`;

                            if (toAssign0 < 0) {
                                toAssign0 = 0;
                                sliders[i].style.right = `${toAssign0}px`;
                            }
                        }
                        break;

                    case 1:
                        if (toAssign1 > 0) {
                            toAssign1 -= 300;
                            sliders[i].style.right = `${toAssign1}px`;

                            if (toAssign1 < 0) {
                                toAssign1 = 0;
                                sliders[i].style.right = `${toAssign1}px`;
                            }
                        }
                        break;

                    case 2:
                        if (toAssign2 > 0) {
                            toAssign2 -= 300;
                            sliders[i].style.right = `${toAssign2}px`;

                            if (toAssign2 < 0) {
                                toAssign2 = 0;
                                sliders[i].style.right = `${toAssign2}px`;
                            }
                        }
                        break;
                }
                click = false;
            }
        })
    }



}

function closeModal() {
    buttonPopUp.addEventListener("click", () => {
        popUp.classList.add("hidde-content");
    })
}

function openModal() {
    for (let i = 0; i < buttonSlider.length; i++) {
        buttonSlider[i].addEventListener("click", () => {
            popUp.classList.remove("hidde-content");

            productsName = document.querySelector(".product-information__label");
            productValue = document.querySelector(".product-information__value");
            productDescription = document.querySelector(".product-information__description");
            

            


            switch (i) {

                case 0:


                case 9:


                case 18:

                    addContentInModal(0);
                    break;

                case 1:


                case 10:


                case 19:

                    addContentInModal(1);
                    break;

                case 2:


                case 11:


                case 20:

                    addContentInModal(2);
                    break;
                case 3:


                case 12:


                case 21:

                    addContentInModal(3);
                    break;

                case 4:


                case 13:


                case 22:

                    addContentInModal(4);
                    break;
                case 5:


                case 14:


                case 23:

                    addContentInModal(5);
                    break;
                case 6:


                case 15:


                case 24:

                    addContentInModal(6);
                    break;
                case 7:


                case 16:


                case 25:

                    addContentInModal(7);
                    break;
                case 8:


                case 17:


                case 26:

                    addContentInModal(8);
                    break;

            }

        })
    }
}



function addContentInModal(indice) {
    productsName.innerText = products[indice].productName;
    productValue.innerText = `R$ ${products[indice].price.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
    productDescription.innerText = products[indice].descriptionShort;
}




// --------- REACT ---------

const createElement = React.createElement;
let productsNameCard = document.querySelectorAll(".slider__parag");
let productValueCard = document.querySelectorAll(".slider__current-value");
let produtoParceladoCard = document.querySelectorAll(".slider__value-in-installments");
let valorParcelado;
let previousValueCard = document.querySelectorAll(".slider__previous-value");
let card = document.querySelectorAll(".container-sliders__slider");


contentCounter();

function addContentCard(indice, indiceProduto) {


    let convertedValue = products[indiceProduto].price;
    let convertedInstallmentValue = products[indiceProduto].price / 2;
    let valueWithoutDiscount = products[indiceProduto].price + 1000;
    

    class ProductsNameCard extends React.Component {
        render() {
            return createElement("div", {}, `${products[indiceProduto].productName}`);
        }
    }

    class ProductValueCard extends React.Component {
        render() {
            return createElement("div", {}, ` R$ ${convertedValue.toLocaleString('pt-br', {minimumFractionDigits: 2})}`);
        }
    }

    class ProdutoParceladoCard extends React.Component {
        render() {
            return createElement("div", {}, `ou 2x de R$ ${convertedInstallmentValue.toLocaleString('pt-br', {minimumFractionDigits: 2})} sem juros`);
        }
    }

    class PreviousValueCard extends React.Component {
        render() {
            return createElement("div", {}, `R$ ${valueWithoutDiscount.toLocaleString('pt-br', {minimumFractionDigits: 2})}`);
        }
    }


    ReactDOM.render(createElement(ProductsNameCard), productsNameCard[indice]);
    ReactDOM.render(createElement(ProductValueCard), productValueCard[indice]);
    ReactDOM.render(createElement(ProdutoParceladoCard), produtoParceladoCard[indice]);
    ReactDOM.render(createElement(PreviousValueCard), previousValueCard[indice]);

}

function contentCounter() {
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


