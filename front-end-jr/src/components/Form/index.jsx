export default function Form() {
  return (
    <div className="container-information__container-receive-offers">
      <div className="container-receive-offers__receive-offers">
        <div className="receive-offers__label">Cadastre-se e Receba nossas</div>
        <div className="receive-offers__label">novidades e promoções</div>
        <p className="receive-offers__parag">
          Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
          lorem ipsum
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
  );
}
