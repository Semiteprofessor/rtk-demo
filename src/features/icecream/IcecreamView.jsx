import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  console.log(numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div className="icecream">
      <h1>Icecream View {numOfIcecream}</h1>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Icecream</button>
    </div>
  );
};

export default IcecreamView;
