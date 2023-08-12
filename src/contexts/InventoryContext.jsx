import React, { createContext, useContext, useReducer } from "react";
import { inventoryData } from "../data";

export const InventoryContext = createContext();

const initialState = {
  inventoryData: inventoryData,
};

const inventoryReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      
      return {
        ...state,
        inventoryData: [...state.inventoryData, action.payload],
      };
  
    default:
      return state;
  }
};

export const InventoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  return (
    <InventoryContext.Provider value={{ state, dispatch }}>
      {children}
    </InventoryContext.Provider>
  );
};
export const useInventory = () => useContext(InventoryContext);
