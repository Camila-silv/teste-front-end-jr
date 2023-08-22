import {AboutCompany, BottomFooter, Form} from "../../index";

export default function MainFooter() {
  return (
    <footer className="main-footer">
      <div className="main-footer__container-main-footer">
        <div className="container-main-footer__container-information">
          <AboutCompany />

          <Form />
        </div>
      </div>

      <BottomFooter />
    </footer>
  );
}
