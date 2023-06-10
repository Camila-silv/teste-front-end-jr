import { useEffect, useState } from "react";

export default function ContainerSaleItems() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    )
      .then((response) => response.json())
      .then((response) => response.products)
      .then(setContent);
  }, []);

  const openModal = (e) => {

    const popUp = document.querySelector(".popup");
    const containerPopUp = document.querySelectorAll(".popup__container-popup");
    window.scrollTo(0, 10);
    const button = document.querySelectorAll(".slider__button");
    popUp.classList.remove("hidden-content");

    const event = parseInt(e.target.id);

    switch (event) {
      case 0:

      case 9:

      case 18:
        containerPopUp[event].classList.remove("hidden-content");
        break;

      case 1:

      case 10:

      case 19:
        containerPopUp[event].classList.remove("hidden-content");
        break;

      case 2:

      case 11:

      case 20:
        containerPopUp[event].classList.remove("hidden-content");
        break;
      case 3:

      case 12:

      case 21:
        containerPopUp[event].classList.remove("hidden-content");
        break;

      case 4:

      case 13:

      case 22:
        containerPopUp[event].classList.remove("hidden-content");
        break;
      case 5:

      case 14:

      case 23:
        containerPopUp[event].classList.remove("hidden-content");
        break;
      case 6:

      case 15:

      case 24:
        containerPopUp[event].classList.remove("hidden-content");
        break;
      case 7:

      case 16:

      case 25:
        containerPopUp[event].classList.remove("hidden-content");
        break;
      case 8:

      case 17:

      case 26:
        containerPopUp[event].classList.remove("hidden-content");
        break;
    }

  };

  let counter = 0;
  let counterId = 0;

  if (!content || !content.length) return null;

  return (
    <div className="container-sale__container-sale-items">
      <div className="container-sale-items__container-sliders aqui">
        {content.map((iten) => {
          const { productName, price } = iten;

          return (
            <div className="container-sliders__slider" key={counter++}>
              <img
                className="slider__img"
                src="./src/assets/images/Grupo de máscara 20 1.png"
                alt="figura representativa do produto, o celular"
              />

              <p className="slider__parag">{productName}</p>

              <div className="slider__previous-value">
                R${" "}
                {(price + 1000).toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                })}
              </div>
              <div className="slider__current-value">
                R$ {price.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
              </div>
              <div className="slider__value-in-installments">
                ou 2x de R${" "}
                {(price / 2).toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                })}{" "}
                sem juros
              </div>
              <div className="slider__label">Frete grátis</div>

              <button
                id={counterId++}
                className="slider__button"
                onClick={openModal}
                
              >
                Comprar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
