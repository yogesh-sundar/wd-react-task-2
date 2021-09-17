import "./App.css";
import Navigation from "./Components/Navigation";
import Card from "./Components/Card";
import React, { useState } from "react";


const itemDetails = [
  {
    name: "Fancy Product",
    price: "20.00$ - 40.00$",
    disable : false
  },
  {
    name: "Special Item",
    price: "18.00$",
    actualPrice: "20.00$",
    disable : false
  },
  {
    name: "Sale Item",
    price: "25.00$",
    actualPrice: "50.00$",
    disable : false
  },
  {
    name: "Popular Item",
    price: "40.00$",
    disable : false
  },
  {
    name: "Sale Item",
    price: "25.00$",
    actualPrice: "50.00$",
    disable : false
  },
  {
    name: "Fancy Product",
    price: "20.00$ - 40.00$",
    disable : false
  },
  {
    name: "Special Item",
    price: "18.00$",
    actualPrice: "20.00$",
    disable : false
  },
  {
    name: "Popular Item",
    price: "40.00$",
    disable : false
  }
];

function App() {
  const [count, setCount] = useState(0);
  const [detail, setDetails] = useState(itemDetails);

  const showCount = (index) => {
    setCount(count + 1);
    detail[index].disable = true;
    setDetails(detail);

  };
  return (
    <div>
      <Navigation value={count} />
      <Card showCount={showCount}
      detail = {detail} />
    </div>
  );
}

export default App;
