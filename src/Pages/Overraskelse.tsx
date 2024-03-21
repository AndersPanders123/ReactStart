import React, { useState } from "react";
import ovn from "../public/ovn.png";
import ovn2 from "../public/ovn2.png";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [img, setImg] = useState(ovn);

  const increaseCounter = () => {
    setCounter(counter + 10);
  };

  const decreaseCounter = () => {
    if (counter === 0) return;
    setCounter(counter - 10);
  };

  const onChange = () => {
    if (counter >= 210) setImg(ovn2);
    else setImg(ovn);
  };

  React.useEffect(() => {
    onChange();
  }, [counter]);

  return (
    <div className="row">
      <div>
        <button className="button" onClick={increaseCounter}>
          Increase
        </button>
        <button className="button" onClick={decreaseCounter}>
          Decrease
        </button>
      </div>
      <div>
        <img src={img} alt="ovn" />
      </div>
    </div>
  );
}

export default Counter;
