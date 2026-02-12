import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log("error,fetching-products", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-2">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-pink-500 text-shadow-white text-shadow-xs rounded-xl shadow h-fit m-4 flex flex-col gap-4 relative overflow-hidden group"
        >
          <div className="h-[150px] -full">
            <img
              src={product.image}
              alt="product"
              className="w-full h-full object-cover group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-3 px-4 py-2">
            <h2>Title: {product.title}</h2>
            <h2>Description: {product?.description?.slice(0, 40)}...</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
