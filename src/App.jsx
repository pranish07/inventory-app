import React from "react";
import { Route, Routes } from "react-router";
import { DepartmentPage } from "./pages/DepartmentPage";
import { InventoryPage } from "./pages/InventoryPage";
import { ProductListPage } from "./pages/ProductListPage";
import { ProductMgtPage } from "./pages/ProductMgtPage";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/department" element={<DepartmentPage />} />
        <Route path="/" element={<InventoryPage />} />

        <Route path="/departments/:productDept" element={<ProductListPage />} />
       
        <Route path="/productMgt" element={<ProductMgtPage />} />
        {/* <Route path="/product/:productId" exact component={DetailedProductPage} /> */}
      </Routes>
    </div>
  );
};
