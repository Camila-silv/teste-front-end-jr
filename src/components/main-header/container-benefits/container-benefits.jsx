import Image from "../../shared/image.jsx";

export default function ContainerBenefits() {
  return (
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
  );
}
