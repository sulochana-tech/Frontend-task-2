"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  if (products.length === 0)
    return (
      <div className="bg-[#1b1b1b] min-h-screen flex justify-center items-center text-white">
        No Data Found
      </div>
    );

  return (
    <div className="bg-[#1b1b1b] min-h-screen pt-12">

      <div className="border border-gray-500 w-[720px] h-[420px] ml-24 p-6">

        <div className="flex gap-8">

          {products.slice(0, 3).map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>

              <div className="border border-gray-500 w-[100px] h-[150px] p-2 cursor-pointer">

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-[70px] h-[60px] mx-auto object-cover border border-gray-500"
                />

                <h2 className="text-[10px] text-center text-white mt-2 truncate">
                  {product.title}
                </h2>

                <p className="text-[10px] text-center text-white">
                  ${product.price}
                </p>

                <div className="flex justify-center gap-1 mt-2">
                  {product.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="border border-gray-500 text-[8px] text-white px-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Home;