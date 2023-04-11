import AboutUs from "./about-us/about-us.jsx";
import MiscellaneousInformation from "./miscellaneous-information/miscellaneous-information.jsx";
import PaymentMethods from "./payment-methods/payment-methods.jsx";
import ReceiveOffers from "./receive-offers/receive-offers.jsx";

export default function MainFooter() {
  return (
    <footer className="main-footer">
      <div className="main-footer__container-main-footer">
        <div className="container-main-footer__container-information">
          <div className="container-information__about-the-company">
            <AboutUs />

            <MiscellaneousInformation />

            <PaymentMethods />
          </div>

          <ReceiveOffers />
        </div>
      </div>

      <div className="main-footer__bottom-footer">
        <div className="bottom-footer__container-bottom-footer">
          <div className="container-bottom-footer__copyright">
            <p className="copyright__parag">
              Copyright © 2019. Todos os direitos reservados. Todas as marcas e
              suas imagens são de propriedade de seus respectivos donos.
            </p>
            <p className="copyright__parag">
              É vedada a reprodução, total ou parcial, de qualquer conteúdo sem
              expressa autorização.
            </p>
          </div>

          <div className="container-bottom-footer__companies">
            <img
              className="companies__img"
              src="./src/assets/images/Grupo 1999.png"
              alt="logo Econverse"
            />

            <img
              className="companies__img"
              src="./src/assets/images/Group.png"
              alt="logo Vtex"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
