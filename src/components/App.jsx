import Banner from "./Banner";
import Carte from "./Carte.jsx";
import logo from "../assets/logo.png";
import Footer from "./Footer.jsx";
import ShoppingList from "./ShoppingList.jsx";
import '../styles/Layout.css'
import { useState } from "react";

function App() {
  const [carte,updateCarte]=useState([])

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Carte carte={carte} updateCarte={updateCarte}/>
        <ShoppingList carte={carte} updateCarte={updateCarte} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
