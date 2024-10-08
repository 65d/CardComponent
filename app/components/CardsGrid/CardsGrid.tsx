"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id} 
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}