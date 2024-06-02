import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake, restocked } from "./cakeSlice";

const CakeView = () => {
  const [value, setValue] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numberOfCakes);
  console.log(numOfCakes);
  const dispatch = useDispatch();
  return (
    <div className="cake">
      <h1>Cake View {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Cakes</button>
    </div>
  );
};

export default CakeView;
