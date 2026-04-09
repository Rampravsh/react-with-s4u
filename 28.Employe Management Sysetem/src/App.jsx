import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import List from "./components/List";
import EditPopup from "./components/popup/EditPopup";
import DeletePopup from "./components/popup/DeletePopup";
import { useDispatch } from "react-redux";
import { getEmployees } from "./store/features/employee/employee.thunk";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);

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
