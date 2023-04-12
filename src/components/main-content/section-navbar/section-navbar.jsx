export default function SectionNavbar() {
  return (
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
  );
}
