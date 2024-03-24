import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function IcecreamContainer() {
  // const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  //! more optimize way to use useSelector
  const numOfIceCream = useSelector(({ iceCream }) => iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy iceCream</button>
    </div>
  );
}

export default IcecreamContainer;
