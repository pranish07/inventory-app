import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const DepartmentPage = () => {
  return (
    <div>
      <h2>Department page</h2>
      <Navbar />
      <Link to="/departments/kitchen">Kitchen</Link> ||
      <Link to="/departments/clothing">Clothing</Link> ||
      <Link to="/departments/toys">Toys</Link> ||
    </div>
  );
};
