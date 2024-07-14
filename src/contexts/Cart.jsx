// Cart.js
import React, { useReducer, useEffect, createContext, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingProductIndex > -1) {
        // If the product already exists in the cart, update its quantity
        const updatedCart = state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        return updatedCart;
      } else {
        // If the product does not exist in the cart, add it with its quantity
        return [...state, action.payload];
      }
      case "REMOVE_FROM_CART":
        return state.filter(item => item.id !== action.payload);
      case "INCREMENT_QUANTITY":
        return state.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        case "DECREMENT_QUANTITY":
      return state.map(item =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      case "CLEAR_CART":
      return [];
    default:
      return state;
  
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const existingCart = localStorage.getItem("cart");
    return existingCart ? JSON.parse(existingCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const incrementQuantity = (productId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: productId });
  };

  const decrementQuantity = (productId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const cartSubTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.current_price[0].NGN[0] * item.quantity, 0);
    return subtotal;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,incrementQuantity, decrementQuantity, clearCart, cartSubTotal }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
