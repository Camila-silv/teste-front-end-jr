export default function MainNavbar() {
  return (
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
  );
}
