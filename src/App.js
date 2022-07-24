import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 400.99,
  },
  {
    id: "c2",
    date: new Date(2021, 11, 25),
    description: "MacBook",
    amount: 1254.72,
  },
  {
    id: "c3",
    date: new Date(2021, 3, 1),
    description: "Джинсы",
    amount: 49.99,
  },
  {
    id: "c4",
    date: new Date(2019, 3, 1),
    description: "Часы",
    amount: 120.99,
  },
  {
    id: "c5",
    date: new Date(2020, 11, 12),
    description: "Телевизор",
    amount: 219.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
