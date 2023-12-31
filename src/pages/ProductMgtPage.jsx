import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Navbar } from "../components/Navbar";
import { useInventory } from "../contexts/InventoryContext";
import "./styles.css";

export const ProductMgtPage = () => {
  const { dispatch } = useInventory();
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });
  const handleAddProduct = () => {
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    navigate(`/departments/${newProduct.department}`);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  return (
    <div className="grid">
      <div>
        <Navbar />
      </div>
      <div>
        <h2>ProductMgtPage</h2>

        <form>
          <label>
            Department:
            <select
              name="department"
              value={newProduct.department}
              onChange={handleInputChange}
            >
              <option value="kitchen">Kitchen</option>
              <option value="clothing">Clothing</option>
              <option value="toys">Toys</option>
            </select>
          </label>
          <br />

          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Stock:
            <input
              type="number"
              name="stock"
              value={newProduct.stock}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            SKU:
            <input
              type="text"
              name="sku"
              value={newProduct.sku}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Supplier:
            <input
              type="text"
              name="supplier"
              value={newProduct.supplier}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Delivered:
            <input
              type="number"
              name="delivered"
              value={newProduct.delivered}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={newProduct.imageUrl}
              onChange={handleInputChange}
            />
          </label>
          <br />
        </form>
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};
