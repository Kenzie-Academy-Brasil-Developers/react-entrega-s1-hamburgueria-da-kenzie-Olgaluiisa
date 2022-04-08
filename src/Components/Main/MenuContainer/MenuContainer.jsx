import "./menuContainer.css";
import Product from "../Product/Product";
import Button from "../../Button/Button";

const MenuContainer = ({ products, handleClick }) => {
  return (
    <section className="container-products products">
      {products.map(({ id, img, name, category, price }) => (
        <div className="card-product" key={id}>
          <Product img={img} name={name} category={category} price={price} />
          <Button onClick={() => handleClick(id)}>Adicionar</Button>
        </div>
      ))}
    </section>
  );
};

export default MenuContainer;
