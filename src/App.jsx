import { useState } from "react";

export default function App() {
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Pizza",
      quantity: 25,
      owner: "Roommate A",
      approvedFor: null,
      spoiled: false,
    },
    {
      id: 2,
      name: "Ketchup",
      quantity: 100,
      owner: "Roommate B",
      approvedFor: null,
      spoiled: false,
    },
    {
      id: 3,
      name: "Ketchup",
      quantity: 100,
      owner: "Roommate C",
      approvedFor: null,
      spoiled: false,
    },
  ]);

  // Scenario 1
  const requestPortion = (id, roommate) => {
    setFoods(prev =>
      prev.map(food => {
        if (food.id === id) {
          if (food.quantity <= 0) {
            alert("No food left");
            return food;
          }

          if (food.approvedFor) {
            alert("Portion already approved for someone else");
            return food;
          }

          return {
            ...food,
            approvedFor: roommate,
          };
        }
        return food;
      })
    );
  };

  // Consume approved portion
  const consumeFood = (id) => {
    setFoods(prev =>
      prev.map(food => {
        if (food.id === id && food.approvedFor) {
          return {
            ...food,
            quantity: food.quantity - 25,
            approvedFor: null,
          };
        }
        return food;
      })
    );
  };

  // Scenario 2
  const spoilFood = (id) => {
    setFoods(prev =>
      prev.map(food => {
        if (food.id === id) {
          return {
            ...food,
            spoiled: true,
            approvedFor: null,
            quantity: 0,
          };
        }
        return food;
      })
    );
  };

  // Scenario 4
  const correctInventory = (id) => {
    setFoods(prev =>
      prev.map(food => {
        if (food.id === id) {
          return {
            ...food,
            quantity: 0,
            approvedFor: null,
          };
        }
        return food;
      })
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>FridgePolice</h1>

      {foods.map(food => (
        <div
          key={food.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{food.name}</h3>

          <p>ID: {food.id}</p>

          <p>Owner: {food.owner}</p>

          <p>Quantity Left: {food.quantity}%</p>

          <p>
            Approved For:{" "}
            {food.approvedFor ? food.approvedFor : "Nobody"}
          </p>

          <p>Spoiled: {food.spoiled ? "Yes" : "No"}</p>

          <button onClick={() => requestPortion(food.id, "Roommate B")}>
            Request (B)
          </button>

          <button onClick={() => requestPortion(food.id, "Roommate C")}>
            Request (C)
          </button>

          <button onClick={() => consumeFood(food.id)}>
            Consume Approved Portion
          </button>

          <button onClick={() => spoilFood(food.id)}>
            Mark Spoiled
          </button>

          <button onClick={() => correctInventory(food.id)}>
            Correct Inventory
          </button>
        </div>
      ))}
    </div>
  );
}
