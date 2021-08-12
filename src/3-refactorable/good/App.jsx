// NPM Packages
import { useState, useReducer } from "react";

// Project files
import Cart from "./components/Cart";
import CurrencySelector from "./components/CurrencySelector";
import Inventory from "./components/Inventory";
import CurrencyConverter from "./scripts/currency-converter";
import { CartContext } from "./scripts/cartContext";
import cartReducer from "./scripts/cartReducer";

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [localCurrency, setLocalCurrency] = useState("usd");

  const inventory = [
    {
      id: 1,
      product: "Flashlight",
      image: "/flashlight.jpg",
      description: "A really great flashlight",
      price: 100,
      currency: "usd",
    },
    {
      id: 2,
      product: "Tin can",
      image: "/tin_can.jpg",
      description: "Pretty much what you would expect from a tin can",
      price: 32,
      currency: "usd",
    },
    {
      id: 3,
      product: "Cardboard Box",
      image: "/cardboard_box.png",
      description: "It holds things",
      price: 5,
      currency: "usd",
    },
  ];
  // Most likely we would fetch this from an external source if this were a real app
  const currencyConversions = {
    usd: {
      rupee: 66.78,
      yuan: 6.87,
      usd: 1,
    },
  };

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <div>
        <h2>3 Good</h2>
        <CurrencySelector
          localCurrency={localCurrency}
          setLocalCurrency={setLocalCurrency}
        />
        <Inventory
          currencyConverter={new CurrencyConverter(currencyConversions)}
          inventory={inventory}
          localCurrency={localCurrency}
        />
        <Cart
          currencyConverter={new CurrencyConverter(currencyConversions)}
          inventory={inventory}
          localCurrency={localCurrency}
        />
      </div>
    </CartContext.Provider>
  );
}
