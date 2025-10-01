import React, { useState } from "react";
import Footer from "./components/Footer";
import Headers from "./components/Header";
import Layout from "./components/Layout";

const App = () => {
  const [data, setData] = useState(
    <div className="text-xl text-blue-700"> ye app se aa raha hai</div>
  );
  return (
    <div className="text-7xl">
      <Headers data={data} />
      <Layout data={data} />
      <Footer data={data} />
    </div>
  );
};

export default App;
