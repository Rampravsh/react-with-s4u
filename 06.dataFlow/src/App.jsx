import React from "react";
import Footer from "./components/Footer";
import Headers from "./components/Header";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div className="text-7xl">
      <Headers />
      <Layout />
      <Footer />
    </div>
  );
};

export default App;
