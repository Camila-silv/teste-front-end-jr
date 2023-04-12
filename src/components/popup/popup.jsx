import Products from "../products/products.jsx";

const popUp = document.querySelector(".popup");
const buttonPopUp = document.querySelector(".product-information__container-button-close");
const buttonSlider = document.querySelectorAll(".slider__button");
let productsName = "";
let productValue = "";
let productDescription = "";

function closeModal() {
    buttonPopUp.addEventListener("click", () => {
        popUp.classList.add("hidde-content");
    })
}

function openModal() {
    for (let i = 0; i < buttonSlider.length; i++) {
        buttonSlider[i].addEventListener("click", () => {
            console.log("oii")
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
    productsName.innerText = Products[indice].productName;
    productValue.innerText = `R$ ${Products[indice].price.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
    productDescription.innerText = Products[indice].descriptionShort;
}

function scroll() {
    for(let i = 0; i < buttonSlider.length; i++) {
        buttonSlider[i].addEventListener("click", (e) => {
    
       
            window.scrollTo(0, 10);
           
            
           
        })
    }
}

closeModal();
openModal();
scroll();

