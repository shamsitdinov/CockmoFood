import React, { useState } from "react";
import Order from "./components/Order";
import { foods, locations } from "./components/data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Triple from "./components/Triple";
import Location from "./components/Location";
const App = () => {
  const [goods, setGoods] = useState(foods);
  const [selectedGoods, setSelectedGoods] = useState([]);
  const [order, setOrder] = useState(false);
  const [location, setLocation] = useState(locations);
  const [destinationIndex, setDestinationIndex] = useState(0);

  const selectLocation = (loc) => {
    location.find((item, index) => {
      if (index === loc) {
        setDestinationIndex(index);
      }
    });
  };

  const addOrder = (item) => {
    const isItemAdded = selectedGoods.some((good) => good.id === item.id);

    if (!isItemAdded) {
      const newFood = goods.find((good) => item.id === good.id);
      const newSelectedGoods = [...selectedGoods];
      newSelectedGoods.push({ ...newFood, added: true });
      setSelectedGoods(newSelectedGoods);

      toast.info(" Товар добавлен! ", {
        autoClose: 1000,
        position: "top-center",
        type: "success",
        theme: "colored",
      });
    }
  };
  const deleteGood = (index) => {
    const updatedSelectedGoods = [...selectedGoods];
    updatedSelectedGoods.splice(index, 1);
    setSelectedGoods(updatedSelectedGoods);
  };

  const incrementQuantity = (goodId) => {
    let newGoods = [...selectedGoods];
    newGoods.map((item) => {
      if (item.id === goodId.id) {
        item.quant = item.quant + 1;
      }
    });
    setSelectedGoods(newGoods);
  };
  const decrementQuantity = (goodId) => {
    let newGoods = [...selectedGoods];
    newGoods.map((item) => {
      if (item.id === goodId.id) {
        if (item.quant > 1) {
          return (item.quant = item.quant - 1);
        }
      }
    });
    setSelectedGoods(newGoods);
  };
  const openOrder = () => {
    setOrder(!order);
  };
  return (
    <div className="bg-gray">
      <Routes>
        <Route
          path="/"
          element={
            <Triple
              openOrder={openOrder}
              selectedGoods={selectedGoods}
              addOrder={addOrder}
              goods={goods}
            />
          }
        />

        <Route
          path="/deliver"
          element={
            <Location
              destinationIndex={destinationIndex}
              selectLocation={selectLocation}
              location={location}
            />
          }
        />
        <Route
          path="/next"
          element={
            <Order
              selectLocation={selectLocation}
              destinationIndex={destinationIndex}
              location={location}
              openOrder={openOrder}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              selectedGoods={selectedGoods}
              deleteGood={deleteGood}
              setSelectedGoods={setSelectedGoods}
            />
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
