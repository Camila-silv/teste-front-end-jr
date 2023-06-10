import MainNavbar from "./main-navbar/main-navbar.jsx";
import ContainerSearch from "./container-search/container-search.jsx";
import ContainerBenefits from "./container-benefits/container-benefits.jsx";

export default function MainHeader() {
  return (
    <header className="main-header">
      <div className="main-header__container-header">
        
        <ContainerBenefits />

        <ContainerSearch/>

        <MainNavbar />
      </div>
    </header>
  );
}
