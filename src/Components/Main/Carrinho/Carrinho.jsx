import CarProduct from "../CarProduct/CarProduct";
import "./carrinho.css";

const Carrinho = ({ currentSale, handleRemove, isTrue }) => {
  return (
    <section className="container-carrinho carrinho">
      <div className="bloco-Titulo">
        <h2>Carrinho de compras</h2>
      </div>
      <div className="bloco-carrinho">
        {isTrue ? (
          <div className="text-carrinho">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        ) : (
          currentSale.map(({ id, img, name, category }) => (
            <div key={id} className="container-card">
              <CarProduct img={img} name={name} category={category} />
              <a key={id} onClick={() => handleRemove(id)} href="#">
                Remover
              </a>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
export default Carrinho;
