import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Product = () => {
  const products = useLoaderData();

  return (
    <div className="bg-white text-gray-800">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">All Products</h2>
            <p className="mt-4 text-lg text-gray-500">
              Browse our collection of high-quality products.
            </p>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                  <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">{product.title}</h3>
                    <p className="mt-2 text-xl font-bold text-gray-800">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;

