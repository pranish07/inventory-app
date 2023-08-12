import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import "./styles.css"

export const DepartmentPage = () => {
  return (
    <div className="grid">
      <div>
        <Navbar />
      </div>
      <div>
        {" "}
        <h2>Department page</h2>
        <Link to="/departments/kitchen">Kitchen</Link> ||
        <Link to="/departments/clothing">Clothing</Link> ||
        <Link to="/departments/toys">Toys</Link> ||
      </div>
    </div>
  );
};
