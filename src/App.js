import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DashBoard from "./Page/DashBoard/DashBoard";
import Income from "./Page/Income/Income";
import Home from "./Page/Home/Home";
import Promote from "./Page/Promote/Promote";
import Product from "./Page/Product/Product";
import Customers from "./Page/Customers/Customers";
import Help from "./Page/Help/Help";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="income" element={<Income />} />
          <Route path="customer" element={<Customers />} />
          <Route path="help" element={<Help />} />
          <Route path="product" element={<Product />} />
          <Route path="promote" element={<Promote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
