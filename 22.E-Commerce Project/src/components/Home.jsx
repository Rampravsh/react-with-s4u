import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, Award } from "lucide-react";
import { useLoaderData, Link } from "react-router-dom";

const Home = () => {
  const products = useLoaderData();

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-gray-50 to-gray-100">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Find Your Next Favorite Thing
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
          Discover a world of quality products, curated just for you. Shop the
          latest trends and timeless classics, all in one place.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Shop Now <ShoppingCart className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* Why Shop With Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Shop With Us?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We provide an unparalleled shopping experience.
            </p>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-1 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Lightning Fast Shipping
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Get your orders delivered to your doorstep in record time.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Top-Quality Products
              </h3>
              <p className="mt-2 text-base text-gray-500">
                We source only the best products to ensure your satisfaction.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Easy & Secure Checkout
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Our checkout process is simple, secure, and protects your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Ready to Start Shopping?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Create an account today and get access to exclusive deals and
            offers.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-white text-gray-800 hover:bg-gray-200"
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
