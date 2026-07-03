"use client";

import { useEffect, useState } from "react";

const ProductDetail = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${params.id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading)
    return (
      <div className="bg-[#1b1b1b] min-h-screen flex justify-center items-center text-white">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="bg-[#1b1b1b] min-h-screen flex justify-center items-center text-red-500">
        {error}
      </div>
    );

  return (
    <div className="bg-[#1b1b1b] min-h-screen flex justify-end items-center pr-32">

      <div className="border border-gray-500 w-[280px] h-[250px] p-8 text-white">

        <h1 className="text-lg font-semibold">
          {product.title}
        </h1>

        <p className="mt-4 text-sm">
          {product.description}
        </p>

        <div className="mt-5 text-sm">
          <p><strong>Dimensions</strong></p>
          <p>Width : {product.dimensions?.width}</p>
          <p>Height : {product.dimensions?.height}</p>
          <p>Depth : {product.dimensions?.depth}</p>
        </div>

      </div>

    </div>
  );
};

export default ProductDetail;