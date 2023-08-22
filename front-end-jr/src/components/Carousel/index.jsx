import { useRef } from "react";

export default function Carousel({ content, funcModal }) {
  const carousel = useRef(null);
  
  let counter = 0;

  const scrollRight = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const scrollLeft = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  return (
    <div className="section-products__container-sale">
      <div className="section-products__container-sale">
        <img
          className="container-sale__buttons button-left"
          src="./src/assets/images/icons/Vector.png"
          alt="icone botao para esquerda"
          onClick={scrollLeft}
        />

        <div className="container-sale__container-sale-items">
          <div
            className="container-sale-items__container-sliders"
            ref={carousel}
          >
            {content.map((item) => {
              const { productName, price } = item;

              return (
                <div className="container-sliders__slider" key={counter++}>
                  <img
                    className="slider__img"
                    src="./src/assets/images/Grupo de máscara 20 1.png"
                    alt="figura representativa do produto, o celular"
                  />

                  <p className="slider__parag">{productName}</p>

                  <div className="slider__previous-value">
                    R$
                    {(price + 1000).toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </div>
                  <div className="slider__current-value">
                    R$
                    {price.toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </div>
                  <div className="slider__value-in-installments">
                    ou 2x de R$
                    {(price / 2).toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                    sem juros
                  </div>
                  <div className="slider__label">Frete grátis</div>

                  <button
                    className="slider__button"
                    onClick={() => {funcModal(true)}}
                  >
                    Comprar
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <img
          className="container-sale__buttons button-right"
          src="./src/assets/images/icons/Vector(1).png"
          alt="icone botao para direita"
          onClick={scrollRight}
        />
      </div>
    </div>
  );
}
