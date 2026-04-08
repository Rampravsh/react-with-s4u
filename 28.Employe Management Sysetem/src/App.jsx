import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import List from "./components/List";
import EditPopup from "./components/popup/EditPopup";
import DeletePopup from "./components/popup/DeletePopup";

const App = () => {
  return (
    <div>
      <EditPopup />
      <DeletePopup />
      <Navbar />
      <List />
      <Footer />
    </div>
  );
};

export default App;
