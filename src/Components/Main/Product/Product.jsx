const Product = ({ img, name, category, price }) => {
  return (
    <>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <h2>{name}</h2>
      <span>{category}</span>
      <p>R$ {price}</p>
    </>
  );
};

export default Product;
