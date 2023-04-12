import IconsNets from "./icons-nets/icons-nets.jsx";

export default function AboutUs() {
  return (
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

      <IconsNets />
    </div>
  );
}
