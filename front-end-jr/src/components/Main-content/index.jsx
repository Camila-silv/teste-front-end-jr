import {Banner, ContainerProducts, Partners, Carousel} from "../index";

export default function MainContent({ content, funcModal }) {
  return (
    <main className="main-content">
      <Banner />

      <section className="main-content__section-navbar">
        <div className="section-navbar__selection-category">
          <div className="selection-category__category-box category-box--selected">
            <img
              src="./src/assets/images/monitorar-tablet-e-smartohone 1.png"
              alt="icone aparelhos"
            />
          </div>
          <div className="selection-category__label label--selected">
            Tecnologia
          </div>
        </div>

        <div className="section-navbar__selection-category">
          <div className="selection-category__category-box">
            <img
              src="./src/assets/images/supermercados 1.png"
              alt="icone supermercado"
            />
          </div>
          <div className="selection-category__label">Supermercado</div>
        </div>

        <div className="section-navbar__selection-category">
          <div className="selection-category__category-box">
            <img src="./src/assets/images/whiskey.png" alt="icone bebidas" />
          </div>
          <div className="selection-category__label">Bebidas</div>
        </div>

        <div className="section-navbar__selection-category">
          <div className="selection-category__category-box">
            <img
              src="./src/assets/images/ferramentas 1.png"
              alt="icone ferramentas"
            />
          </div>
          <div className="selection-category__label">Ferramentas</div>
        </div>

        <div className="section-navbar__selection-category">
          <div className="selection-category__category-box">
            <img
              src="./src/assets/images/cuidados-de-saude 1.png"
              alt="icone saúde"
            />
          </div>
          <div className="selection-category__label">Saúde</div>
        </div>

        <div className="section-navbar__selection-category">
          <div className="selection-category__category-box">
            <img
              src="./src/assets/images/corrida 1.png"
              alt="icone esportes e fitness"
            />
          </div>
          <div className="selection-category__label">Esportes e Fitness</div>
        </div>

        <div className="section-navbar__selection-category">
          <div className="selection-category__category-box">
            <img src="./src/assets/images/moda 1.png" alt="cione moda" />
          </div>
          <div className="selection-category__label">Moda</div>
        </div>
      </section>

      <ContainerProducts title="Produtos relacionados">
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

        <Carousel content={content} funcModal={funcModal}/>

        <Partners />
      </ContainerProducts>

      <ContainerProducts title="Produtos relacionados">
        <div className="section-products__label-see-all">Ver todos</div>

        <Carousel content={content} funcModal={funcModal}/>

        <Partners />
      </ContainerProducts>

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

      <ContainerProducts title="Produtos relacionados">
        <div className="section-products__label-see-all">Ver todos</div>

        <Carousel content={content} funcModal={funcModal}/>
      </ContainerProducts>
    </main>
  );
}
