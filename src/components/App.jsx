import Banner from "./Banner";
import Carte from "./Carte";
import logo from "../assets/logo.png";
import Footer from "./Footer.jsx";
import ShoppingList from "./ShoppingList.jsx";
import '../styles/Layout.css'

function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Carte />
        <ShoppingList />
      </div>

      <Footer />
    </div>
  );
}

export default App;
