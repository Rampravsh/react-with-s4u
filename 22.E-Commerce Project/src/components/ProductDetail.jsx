import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const product = useLoaderData();

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:items-start lg:gap-x-12">
          {/* Product Image */}
          <div className="lg:flex-1">
            <div className="aspect-square overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 lg:flex-1">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-indigo-600 uppercase tracking-widest">
                {product.category}
              </span>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {product.title}
              </h1>

              <div className="mt-4 flex items-center">
                <p className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </p>
                <div className="ml-4 border-l border-gray-300 pl-4">
                  <span className="text-sm text-gray-500">
                    Rating: {product.rating?.rate} ({product.rating?.count}{" "}
                    reviews)
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                  Add to Cart
                </button>
                <button className="flex-1 bg-white border border-gray-300 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                  Wishlist
                </button>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900 mr-2">
                      Availability:
                    </span>{" "}
                    In Stock
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900 mr-2">
                      SKU:
                    </span>{" "}
                    PROD-{product.id}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
