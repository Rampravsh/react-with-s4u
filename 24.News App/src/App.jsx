import React from "react";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import Category from "./components/Category";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="sticky top-20 z-10">
        <Category />
      </div>
      <News />
      <Footer />
    </>
  );
};

export default App;
