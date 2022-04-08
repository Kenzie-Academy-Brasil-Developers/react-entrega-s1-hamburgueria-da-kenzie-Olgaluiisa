import "./header.css";
import { useState } from "react";
import Button from "../Button/Button";

const Header = ({ showProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  function handleInputChange(event) {
    setFilteredProducts(event.target.value);
  }
  return (
    <header className="cointainer-Header header">
      <div className="logo">
        <h1>Burguer</h1>
        <p>Kenzie</p>
      </div>
      <div className="pesquisa">
        <input
          type="text"
          placeholder="Digitar pesquisa"
          onChange={handleInputChange}
          value={filteredProducts}
        />
        <Button onClick={() => showProducts(filteredProducts)}>
          Pesquisar
        </Button>
      </div>
    </header>
  );
};

export default Header;
