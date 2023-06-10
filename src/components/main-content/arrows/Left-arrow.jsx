export default function LeftArrow({ id }) {
  const leftArrow = () => {
    const carousel = document.querySelectorAll(
      ".container-sale-items__container-sliders"
    );

    switch (parseInt(id)) {
      case 0:
        carousel[id].scrollLeft -= carousel[id].offsetWidth;
        break;
      case 1:
        carousel[id].scrollLeft -= carousel[id].offsetWidth;
        break;
      case 2:
        carousel[id].scrollLeft -= carousel[id].offsetWidth;
        break;
    }
  };

  return (
    <img
      className="container-sale__buttons button-left"
      src="./src/assets/images/icons/Vector.png"
      alt="icone botao para esquerda"
      onClick={leftArrow}
      id={id}
    />
  );
}
