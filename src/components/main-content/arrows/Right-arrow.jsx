export default function RightArrow({ id }) {
  const rightArrow = () => {
    const carousel = document.querySelectorAll(
      ".container-sale-items__container-sliders"
    );

    switch (parseInt(id)) {
      case 0:
        carousel[id].scrollLeft += carousel[id].offsetWidth;
        break;
      case 1:
        carousel[id].scrollLeft += carousel[id].offsetWidth;
        break;
      case 2:
        carousel[id].scrollLeft += carousel[id].offsetWidth;
        break;
    }
  };

  return (
    <img
      className="container-sale__buttons button-right"
      src="./src/assets/images/icons/Vector(1).png"
      alt="icone botao para direita"
      onClick={rightArrow}
      id={id}
    />
  );
}
