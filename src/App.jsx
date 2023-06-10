import MainHeader from "./components/main-header/main-header.jsx";
import MainContent from "./components/main-content/main-content.jsx";
import MainFooter from "./components/main-footer/main-footer.jsx";
import Popup from "./components/popup/container-popup.jsx";

export default function App() {
  return (
    <>
      <Popup />
      <MainHeader />
      <MainContent />
      <MainFooter />
    </>
  )
}