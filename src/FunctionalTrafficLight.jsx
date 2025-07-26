import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [index, setIndex] = useState(0)
  const lightColors = ['red', 'green', 'yellow']
  const trafficLight = lightColors[index]

  const btnNext = () => {
    if(index < 2) {
      setIndex(index + 1)
    } else setIndex(0)
  }
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${trafficLight === 'red' ? 'red' : 'black'}`}></div>
        <div className={`circle ${trafficLight === 'yellow' ? 'yellow' : 'black'}`}></div>
        <div className={`circle ${trafficLight === 'green' ? 'green' : 'black'}`}></div>
      </div>
      <button onClick={btnNext} className="next-state-button">Next State</button>
    </div>
  );
};



