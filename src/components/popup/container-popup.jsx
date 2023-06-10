import { useEffect, useState } from "react";

export default function Popup() {
  const [popUp, setPopUp] = useState([]);

  let counter = 0;

  useEffect(() => {
    fetch(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    )
      .then((response) => response.json())
      .then((response) => response.products)
      .then(setPopUp);
  }, []);

  const closeModal = () => {
    const popUp = document.querySelector(".popup");
    const containerPopUp = document.querySelectorAll(".popup__container-popup");
    popUp.classList.add("hidden-content");

    for(let i = 0; i < containerPopUp.length; i++) {
      containerPopUp[i].classList.add("hidden-content");
    }

  
  };


  return (
    <div className="popup hidden-content">
      {popUp.map((item) => {
        const { productName, price, descriptionShort } = item;

        return (
          <div className="popup__container-popup hidden-content" key={counter++}>
            <div className="container-popup__container-img">
              <img
                className="container-img__img"
                src="./src/assets/images/Grupo de máscara 20 1.png"
                alt="figura ilustrativa do produto, o celular"
              />
            </div>

            <div className="container-popup__product-information">
              <div
                className="product-information__container-button-close"
                onClick={closeModal}
              >
                <div className="product-information__button-close"></div>
                <div className="product-information__button-close"></div>
              </div>

              <div className="product-information__label">{productName}</div>

              <div className="product-information__value">{price}</div>

              <div className="product-information__description">{descriptionShort}</div>

              <a href="/" className="product-information__link">
                Veja mais detalhes do produto &gt;
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
