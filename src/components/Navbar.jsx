import React from "react";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <ul>
          <li onClick={() => navigate("/")}>Inventory</li>

          <li onClick={() => navigate("/department")}>Department</li>
          <li onClick={() => navigate("/departments/all")}>
            Product listing{" "}
          </li>
        
        </ul>
      </div>
    </div>
  );
};
