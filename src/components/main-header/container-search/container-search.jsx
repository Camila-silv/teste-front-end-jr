export default function ContainerSearch() {
  return (
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
  );
}
