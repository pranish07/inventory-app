import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Navbar } from "../components/Navbar";
import { useInventory } from "../contexts/InventoryContext";

export const ProductListPage = () => {
  const [sortType, setSortType] = useState("name"); // Default sorting by name
  const [sortOrder, setSortOrder] = useState("asc"); // Default ascending order
  const [showLowStock, setShowLowStock] = useState(false);

  const {
    state: { inventoryData },
  } = useInventory();
  const { productDept } = useParams();
  const navigate = useNavigate();

  const filteredProducts =
    productDept === "all"
      ? inventoryData
      : inventoryData.filter(
          (product) => product.department.toLowerCase() === productDept
        );

  // Sort products based on user selection
  const filteredAndSortedProducts = filteredProducts.filter((product) => {
    if (showLowStock) {
      return product.stock <= 20;
    }
    return true;
  });

  const sortedProducts = filteredAndSortedProducts.slice().sort((a, b) => {
    if (sortType === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortType === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    } else if (sortType === "stock") {
      return sortOrder === "asc" ? a.stock - b.stock : b.stock - a.stock;
    }
    // Default sorting by name
    return a.name.localeCompare(b.name);
  });

  const handleSortChange = (event) => {
    const selectedSortType = event.target.value;
    setSortType(selectedSortType);
  };

  const handleSortOrderChange = (event) => {
    const selectedSortOrder = event.target.value;
    setSortOrder(selectedSortOrder);
  };

  const handleLowStockChange = (event) => {
    const isChecked = event.target.checked;
    setShowLowStock(isChecked);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div>
          Sort by:
          <select value={sortType} onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
          </select>
          <select value={sortOrder} onChange={handleSortOrderChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <label>
            Show Low Stock:
            <input
              type="checkbox"
              checked={showLowStock}
              onChange={handleLowStockChange}
            />
          </label>
          <button onClick={() => navigate("/productMgt")}>New</button>
        </div>

        {sortedProducts.map((product) => (
          <div key={product.id}>
            <img
              src={product.imageUrl}
              alt={product.name}
              height={200}
              width={200}
            />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
