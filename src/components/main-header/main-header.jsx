import Image from "../shared/image.jsx";

export default function MainHeader() {
  return (
    <header className="main-header">
      <div className="main-header__container-header">
        <div className="container-header__container-benefits">
          <div className="container-benefits__benefits">
            <img
              className="benefits__icons"
              src="./src/assets/images/icons/ShieldCheck.png"
              alt="icone verificado"
            />

            <div className="benefits__benefit-tag">
              Compra <span>100% segura</span>
            </div>
          </div>

          <div className="container-benefits__benefits">
            <Image
              className="benefits__icons"
              src="./src/assets/images/icons/Truck.png"
              alt="icone de entrega"
            />

            <div className="benefits__benefit-tag">
              <span>Frete grátis</span> acima de R$ 200
            </div>
          </div>

          <div className="container-benefits__benefits">
            <Image
              className="benefits__icons"
              src="./src/assets/images/icons/CreditCard.png"
              alt="icone de cartão"
            />

            <div className="benefits__benefit-tag">
              <span>Parcele</span> suas compras
            </div>
          </div>
        </div>

        <div className="container-header__container-search">
          <img
            className="container-search__logo"
            src="./src/assets/images/Group 35.png"
            alt="logo da VTex"
          />

          <div className="container-search__container-input">
            <input
              className="container-input__input"
              type="text"
              placeholder="O que você está buscando?"
            />

            <img
              className="container-input__icon"
              src="./src/assets/images/icons/MagnifyingGlass.png"
              alt=""
            />
          </div>

          <div className="container-search__container-user">
            <img
              className="container-user__icons"
              src="./src/assets/images/icons/Group.png"
              alt="icone de itens"
            />

            <img
              className="container-user__icons"
              src="./src/assets/images/icons/Heart.png"
              alt="icone de favoritos"
            />

            <img
              className="container-user__icons"
              src="./src/assets/images/icons/UserCircle.png"
              alt="icone usuário"
            />

            <img
              className="container-user__icons"
              src="./src/assets/images/icons/ShoppingCart.png"
              alt="icone carrinho"
            />
          </div>
        </div>

        <nav className="container-header__main-navbar">
          <ul className="main-navbar__container-nav">
            <li>
              <a className="container-nav__links" href="/">
                Todas categorias
              </a>
            </li>

            <li>
              <a className="container-nav__links" href="/">
                Supermercado
              </a>
            </li>

            <li>
              <a className="container-nav__links" href="/">
                Livros
              </a>
            </li>

            <li>
              <a className="container-nav__links" href="/">
                Moda
              </a>
            </li>

            <li>
              <a className="container-nav__links" href="/">
                Lançamentos
              </a>
            </li>

            <li>
              <a
                className="container-nav__links container-nav__links--selected"
                href="/"
              >
                Ofertas do dia
              </a>
            </li>

            <li>
              <a className="container-nav__links" href="/">
                <img
                  src="./src/assets/images/icons/CrownSimple.png"
                  alt="icone de assinatura/coroa"
                />
                Assinatura
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
