import { useEffect, useState } from "react";
import { MainHeader, MainContent, MainFooter, Popup } from "./index";

export default function App() {
  const [content, setContent] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    )
      .then((response) => response.json())
      .then((response) => response.products)
      .then(setContent);
  }, []);
  return (
    <>
      {modal === true && (
        <Popup
          content={content}
          value={modal}
          funcModal={(value) => {
            setModal(value);
          }}
        />
      )}
      <MainHeader />
      <MainContent
        content={content}
        value={modal}
        funcModal={(value) => {
          setModal(value);
        }}
      />
      <MainFooter />
    </>
  );
}
