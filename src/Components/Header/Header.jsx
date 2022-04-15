import "./header.css";
import Button from "../Button/Button";

const Header = ({ showProducts, inputValue, setInputValue }) => {
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
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
        />
        <Button onClick={() => showProducts(inputValue)}>Pesquisar</Button>
      </div>
    </header>
  );
};

export default Header;
