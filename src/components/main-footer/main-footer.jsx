export default function MainFooter() {
  return (
    <footer className="main-footer">
      <div className="main-footer__container-main-footer">
        <div className="container-main-footer__container-information">
          <div className="container-information__about-the-company">
            <div className="about-the-company__about-us">
              <h3 className="about-us__title">Sobre nós</h3>

              <ul className="about-us__list-about-us">
                <li>
                  <a className="list-about-us__items" href="/">
                    Conheça
                  </a>
                </li>
                <li>
                  <a className="list-about-us__items" href="/">
                    Como comprar
                  </a>
                </li>
                <li>
                  <a className="list-about-us__items" href="/">
                    Indicação e desconto
                  </a>
                </li>
              </ul>

              <ul className="about-us__icons-nets">
                <li>
                  <img
                    className="icons-nets__icon"
                    src="./src/assets/images/icons/023-facebook.png"
                    alt="icone facebook"
                  />
                </li>
                <li>
                  <img
                    className="icons-nets__icon"
                    src="./src/assets/images/icons/044-instagram.png"
                    alt="icone instagram"
                  />
                </li>
                <li>
                  <img
                    className="icons-nets__icon"
                    src="./src/assets/images/icons/116-youtube.png"
                    alt="icone youtube"
                  />
                </li>
              </ul>
            </div>

            <div className="about-the-company__miscellaneous-information">
              <h3 className="miscellaneous-information__title">
                Informações úteis
              </h3>

              <ul className="miscellaneous-information__list-miscellaneous-information">
                <li>
                  <a className="list-miscellaneous-information__items" href="/">
                    Fale conosco
                  </a>
                </li>
                <li>
                  <a className="list-miscellaneous-information__items" href="/">
                    Dúvidas
                  </a>
                </li>
                <li>
                  <a className="list-miscellaneous-information__items" href="/">
                    Prazos de entrega
                  </a>
                </li>
                <li>
                  <a className="list-miscellaneous-information__items" href="/">
                    Formas de pagamento
                  </a>
                </li>
                <li>
                  <a className="list-miscellaneous-information__items" href="/">
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <a className="list-miscellaneous-information__items" href="/">
                    Trocas e devoluções
                  </a>
                </li>
              </ul>
            </div>

            <div className="about-the-company__payment-methods">
              <h3 className="payment-methods__title">Formas de pagamento</h3>

              <ul className="payment-methods__list-payment-methods">
                <li>
                  <img
                    className="list-payment-methods__items"
                    src="./src/assets/images/icons/形状_1_3_.png"
                    alt="icone meio de pagamento/visa"
                  />
                </li>
                <li>
                  <img
                    className="list-payment-methods__items"
                    src="./src/assets/images/icons/elo.png"
                    alt="icone meio de pagamento/elo"
                  />
                </li>
                <li>
                  <img
                    className="list-payment-methods__items"
                    src="./src/assets/images/icons/alelo.png"
                    alt="icone meio de pagamento/alelo"
                  />
                </li>
                <li>
                  <img
                    className="list-payment-methods__items"
                    src="./src/assets/images/icons/dinners.png"
                    alt="icone meio de pagamento/dinners"
                  />
                </li>
                <li>
                  <img
                    className="list-payment-methods__items"
                    src="./src/assets/images/icons/ifood.png"
                    alt="icone meio de pagamento/ifood"
                  />
                </li>
                <li>
                  <img
                    className="list-payment-methods__items"
                    src="./src/assets/images/icons/mastercard.png"
                    alt="icone meio de pagamento/mastercard"
                  />
                </li>
                <li>
                  <img
                    className="list-payment-methods__items"
                    src="./src/assets/images/icons/pix.png"
                    alt="icone meio de pagamento/pix"
                  />
                </li>
                <li>
                  <img
                    className="list-payment-methods__items"
                    src="./src/assets/images/icons/amex.png"
                    alt="icone meio de pagamento/amex"
                  />
                </li>
                <li>
                  <img
                    className="list-payment-methods__items"
                    src="./src/assets/images/icons/ticket.png"
                    alt="icone meio de pagamento/ticket"
                  />
                </li>
                <li>
                  <img
                    className="list-payment-methods__items"
                    src="./src/assets/images/icons/sodexo.png"
                    alt="icone meio de pagamento/sodexo"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="container-information__container-receive-offers">
            <div className="container-receive-offers__receive-offers">
              <div className="receive-offers__label">
                Cadastre-se e Receba nossas
              </div>
              <div className="receive-offers__label">novidades e promoções</div>
              <p className="receive-offers__parag">
                Excepteur sint occaecat cudatat non ent, sunt in culpa qui
                officia lorem ipsum
              </p>

              <div className="receive-offers__container-input">
                <input
                  className="container-input__input"
                  type="text"
                  placeholder="Seu e-mail"
                />

                <button className="container-input__button">Ok</button>
              </div>
            </div>
          </div>
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
