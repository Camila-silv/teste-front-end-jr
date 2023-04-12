import ContainerPartners from "./container-partners/container-partners.jsx";
import ContainerSaleItems from "./container-sale-items/container-sale-items.jsx";
import RightArrow from "./arrows/button-right.jsx";
import LeftArrow from "./arrows/button-left.jsx";
import SectionNavbar from "./section-navbar/section-navbar.jsx";
import SectionBanner from "./section-banner/section-banner.jsx";

export default function MainContent() {
  return (
    <main className="main-content">
      <SectionBanner />

      <SectionNavbar />

      <section className="main-content__section-products">
        <div className="section-products__container-title">
          <hr className="container-title__line" noshade="true" />
          <h2 className="container-title__title">Produtos relacionados</h2>
          <hr className="container-title__line" noshade="true" />
        </div>

        <ul className="section-products__categories">
          <li className="categories__selection-items selection-items--selected">
            Celular
          </li>
          <li className="categories__selection-items">Acessórios</li>
          <li className="categories__selection-items">Tablets</li>
          <li className="categories__selection-items">Notebooks</li>
          <li className="categories__selection-items">Tvs</li>
          <li className="categories__selection-items">Ver todos</li>
        </ul>

        <div className="section-products__container-sale">
          <LeftArrow />

          <ContainerSaleItems />

          <RightArrow />
        </div>

        <ContainerPartners />
      </section>

      <section className="main-content__section-products">
        <div className="section-products__container-title">
          <hr className="container-title__line" noshade="true" />
          <h2 className="container-title__title">Produtos relacionados</h2>
          <hr className="container-title__line" noshade="true" />
        </div>

        <div className="section-products__label-see-all">Ver todos</div>

        <div className="section-products__container-sale">
          <LeftArrow />

          <ContainerSaleItems />

          <RightArrow />
        </div>

        <ContainerPartners />
      </section>

      <section className="main-content__brands-section">
        <h2 className="brands-section__title">Navegue por marcas</h2>

        <ul className="brands-section__container-brands">
          <li className="container-brands__brands">
            <img
              src="./src/assets/images/Group 35.png"
              alt="imagem dos parceiros"
            />
          </li>
          <li className="container-brands__brands">
            <img
              src="./src/assets/images/Group 35.png"
              alt="imagem dos parceiros"
            />
          </li>
          <li className="container-brands__brands">
            <img
              src="./src/assets/images/Group 35.png"
              alt="imagem dos parceiros"
            />
          </li>
          <li className="container-brands__brands">
            <img
              src="./src/assets/images/Group 35.png"
              alt="imagem dos parceiros"
            />
          </li>
          <li className="container-brands__brands">
            <img
              src="./src/assets/images/Group 35.png"
              alt="imagem dos parceiros"
            />
          </li>
        </ul>
      </section>

      <section className="main-content__section-products section-products--margin">
        <div className="section-products__container-title">
          <hr className="container-title__line" noshade="true" />
          <h2 className="container-title__title">Produtos relacionados</h2>
          <hr className="container-title__line" noshade="true" />
        </div>

        <div className="section-products__label-see-all">Ver todos</div>

        <div className="section-products__container-sale">
          <LeftArrow />

          <ContainerSaleItems />

          <RightArrow />
        </div>
      </section>
      
    </main>
  );
}


