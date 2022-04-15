import "./menuContainer.css";
import Product from "../Product/Product";
import Button from "../../Button/Button";

const MenuContainer = ({
  products,
  handleClick,
  filteredProducts,
  inputValue,
}) => {
  return (
    <section className="container-products products">
      {filteredProducts.length > 0 ? (
        <>
          <h1 className="text-products ">
            Resultados para: <span className="sub-text">{inputValue} </span>
          </h1>
          {filteredProducts.map(({ id, img, name, category, price }) => (
            <div className="card-product" key={id}>
              <Product
                img={img}
                name={name}
                category={category}
                price={price}
              />
              <Button onClick={() => handleClick(id)}>Adicionar</Button>
            </div>
          ))}
        </>
      ) : (
        products.map(({ id, img, name, category, price }) => (
          <div className="card-product" key={id}>
            <Product img={img} name={name} category={category} price={price} />
            <Button onClick={() => handleClick(id)}>Adicionar</Button>
          </div>
        ))
      )}
    </section>
  );
};

export default MenuContainer;
