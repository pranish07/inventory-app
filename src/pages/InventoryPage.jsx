import React from "react";
import { Navbar } from "../components/Navbar";
import { useInventory } from "../contexts/InventoryContext";
import "./styles.css"


export const InventoryPage = () => {
  const {
    state: { inventoryData },
  } = useInventory();
  const totalStock = inventoryData.reduce(
    (total, product) => total + product.stock,
    0
  );
  const totalDelivered = inventoryData.reduce(
    (total, product) => total + product.delivered,
    0
  );
  const lowStockItems = inventoryData.filter((product) => product.stock <= 10);

  return (
    <div className="grid">
      <div>
        <Navbar />
      </div>
      <div>
        <h2> InventoryPage </h2>

        <div>Total Stock: {totalStock}</div>
        <div>Total Delivered: {totalDelivered}</div>
        <div>Low Stock Items: {lowStockItems.length}</div>
      </div>
    </div>
  );
};
