import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function IcecreamContainer() {
  const [number, setNumber] = useState(1);
  // const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  //! more optimize way to use useSelector
  const numOfIceCream = useSelector(({ iceCream }) => iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCream - {numOfIceCream}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyIceCream(number))}>
        Buy {number} iceCream
      </button>
    </div>
  );
}

export default IcecreamContainer;
