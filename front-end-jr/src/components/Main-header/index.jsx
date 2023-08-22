import ContainerBenefits from "../Container-benefits";
import ContainerNavbar from "../Container-navbar";
import ContainerSearch from "../Container-search";
import Image from "../Image";

export default function MainHeader() {
  return (
    <header className="main-header">
      <div className="main-header__container-header">
        <div className="container-header__container-benefits">
          <ContainerBenefits
            src="./src/assets/images/icons/ShieldCheck.png"
            alt="icone verificado"
          >
            Compra <span>100% segura</span>
          </ContainerBenefits>

          <ContainerBenefits
            src="./src/assets/images/icons/Truck.png"
            alt="icone de entrega"
          >
            <span>Frete grátis</span> acima de R$ 200
          </ContainerBenefits>

          <ContainerBenefits
            src="./src/assets/images/icons/CreditCard.png"
            alt="icone de cartão"
          >
            <span>Parcele</span> suas compras
          </ContainerBenefits>
        </div>

        <ContainerSearch />

        <ContainerNavbar />
      </div>
    </header>
  );
}
