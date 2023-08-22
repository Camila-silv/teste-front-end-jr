export default function Popup({ content, funcModal }) {
  let counter = 0;

 

  return (
    <div className="popup">
      {/* {content.map((item) => {
        const { productName, price, descriptionShort } = item;

        return ( */}
          <div className="popup__container-popup" >
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
                onClick={() => {
                  funcModal(false);
                }}
              >
                <div className="product-information__button-close"></div>
                <div className="product-information__button-close"></div>
              </div>

              <div className="product-information__label">teste</div>

              <div className="product-information__value">teste</div>

              <div className="product-information__description">
                teste
              </div>

              <a href="/" className="product-information__link">
                Veja mais detalhes do produto &gt;
              </a>
            </div>
          </div>
        {/* );
      })} */}
    </div>
  );
}
