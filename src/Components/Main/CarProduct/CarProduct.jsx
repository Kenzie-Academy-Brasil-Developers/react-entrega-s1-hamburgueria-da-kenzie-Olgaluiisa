const CarProduct = ({ img, name, category }) => {
  return (
    <div className="infos">
      <figure className="imagem">
        <img src={img} alt={name} />
      </figure>
      <div>
        <h2>{name}</h2>
        <span>{category}</span>
      </div>
    </div>
  );
};

export default CarProduct;
