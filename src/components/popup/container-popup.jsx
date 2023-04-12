import { CloseModal} from "./popup.jsx";

export default function Popup() {
  
  return (
    <div className="popup hidde-content">
      <div className="popup__container-popup">
        <div className="container-popup__container-img">
          <img
            className="container-img__img"
            src="./src/assets/images/Grupo de máscara 20 1.png"
            alt="figura ilustrativa do produto, o celular"
          />
        </div>

        <div className="container-popup__product-information">
          <div className="product-information__container-button-close" onClick={CloseModal}>
            <div className="product-information__button-close"></div>
            <div className="product-information__button-close"></div>
          </div>

          <div className="product-information__label">...</div>

          <div className="product-information__value">...</div>

          <div className="product-information__description">...</div>

          <a href="/" className="product-information__link">
            Veja mais detalhes do produto &gt;
          </a>
        </div>
      </div>
    </div>
  );
}
