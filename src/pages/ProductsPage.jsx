import React from "react";
import { useParams } from "react-router";
import { Navbar } from "../components/Navbar";
import { useInventory } from "../contexts/InventoryContext";
import "./styles.css";

export const ProductsPage = () => {
  const {
    state: { inventoryData },
  } = useInventory();
  const { productId } = useParams();
  const selectedProduct = inventoryData.find(
    (product) => product.id === Number(productId)
  );
const {price,id,name,department,description,sku,stock,delivered,imageUrl,supplier}=selectedProduct
  return (
    <div className="grid">
      <div>
        <Navbar />
      </div>
      <div>
      <h2>{name}</h2>
        {selectedProduct && (
          <div>
            <img
              src={imageUrl}
              alt={name}
              height={200}
              width={200}
            />
            
            <p>Price: {price}</p>
            <p>Stock:{stock}</p>
            <p>Supplier:{supplier}</p>
            <p>Department:{department}</p>
            <p>SKU:{sku}</p>
            <p>Delivered:{delivered}</p>
            <p>Description: {description}</p>
          </div>
        )}
      </div>
    </div>
  );
};
