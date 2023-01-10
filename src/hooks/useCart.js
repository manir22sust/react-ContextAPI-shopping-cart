import { useContext } from "react";
import { Cart } from "../context/Context";

export const useCart = () => {
  const context = useContext(Cart);

  if (context === undefined) {
    throw new Error("the useContext ");
  }
  return context;
};
