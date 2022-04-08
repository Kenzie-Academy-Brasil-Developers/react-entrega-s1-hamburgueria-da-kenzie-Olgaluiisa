import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Carrinho from "./Components/Main/Carrinho/Carrinho";
import MenuContainer from "./Components/Main/MenuContainer/MenuContainer";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: "14.00",
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: "16.00",
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: "18.00",
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: "5.00",
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca-Cola",
      category: "Bebidas",
      price: "4.99",
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milkshake Ovomaltine",
      category: "Bebidas",
      price: "4.99",
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);
  let [currentSale, setCurrentSale] = useState([]);

  let [isTrue, setIsTrue] = useState(true);

  function handleClick(id) {
    setIsTrue(false);
    const addItem = products.find((product) => {
      if (product.id === id) {
        return product.id;
      }
    });
    setCurrentSale([...currentSale, addItem]);
  }
  function handleRemove(id) {
    const RemoveItem = currentSale.filter((product) => product.id !== id);
    setCurrentSale(RemoveItem);
    if (RemoveItem.length === 0) {
      setIsTrue(true);
    }
  }

  function showProducts(inputValue) {
    const filtrados = products.filter((product) => product.name === inputValue);
    setProducts(filtrados);
  }

  return (
    <div className="container-Global">
      <Header showProducts={showProducts} />
      <MenuContainer products={products} handleClick={handleClick} />
      <Carrinho
        currentSale={currentSale}
        handleRemove={handleRemove}
        isTrue={isTrue}
      />
    </div>
  );
}

export default App;
