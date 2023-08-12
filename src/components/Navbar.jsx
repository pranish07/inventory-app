import React from "react";
import { useNavigate } from "react-router";

import "./navbar.css"
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div>
        <ul className="nav">
          <li onClick={() => navigate("/")}>Inventory</li>
          <li onClick={() => navigate("/department")}>Department</li>
          <li onClick={() => navigate("/departments/all")}>Product listing </li>
        </ul>
      </div>
    </div>
  );
};
