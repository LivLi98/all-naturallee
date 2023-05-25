import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://makeup-api.herokuapp.com/api/v1/products.json"
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          const uniqueProducts = getUniqueProducts(data, 10);
          setProducts(uniqueProducts);
          console.log(uniqueProducts)
        } else {
          console.log("Invalid data format");
        }
      } catch (error) {
        console.log("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  const getUniqueProducts = (data, count) => {
    const uniqueProducts = [];
    const allProducts = [...data];

    while (uniqueProducts.length < count) {
      const randomIndex = Math.floor(Math.random() * allProducts.length);
      const randomProduct = allProducts[randomIndex];

      if (!uniqueProducts.some((product) => product.id === randomProduct.id)) {
        uniqueProducts.push(randomProduct);
      }
    }

    return uniqueProducts;
  };

  return (
    <section>
      <h1 className="petit-script">Product List</h1>
      <ProductList products={products} />
      {products.map((product) => (
        <div className="productGroup" key={product.id}>
          <p className="productN">Name: {product.name}</p>
          <p className="productB">Brand: {product.brand}</p>
          <p className="ProductP">Price: {product.price}</p>
          <p className="ProductL">Product Link: {product.product_link}</p>
          <img src={product.image_link} alt="Product" />
        </div>
      ))}
    </section>
  );
};

export default Products;

