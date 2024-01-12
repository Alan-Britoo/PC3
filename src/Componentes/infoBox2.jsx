import {BoxTwo} from './box2'
import React, { useState } from "react";


export default function InfoBox2() {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleButtonClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <>
      <ul>
        <BoxTwo
          ide={"percentage-5"}
          valor={"5"}
          tex={"5%"}
          onButtonClick={() => handleButtonClick(5)}
          selected={selectedValue === 5}
        />
        <BoxTwo
          ide={"percentage-10"}
          valor={"10"}
          tex={"10%"}
          onButtonClick={() => handleButtonClick(10)}
          selected={selectedValue === 10}
        />
        <BoxTwo
          ide={"percentage-15"}
          valor={"15"}
          tex={"15%"}
          onButtonClick={() => handleButtonClick(15)}
          selected={selectedValue === 15}
        />
        <BoxTwo
          ide={"percentage-25"}
          valor={"25"}
          tex={"25%"}
          onButtonClick={() => handleButtonClick(25)}
          selected={selectedValue === 25}
        />
        <BoxTwo
          ide={"percentage-50"}
          valor={"50"}
          tex={"50%"}
          onButtonClick={() => handleButtonClick(50)}
          selected={selectedValue === 50}
        />
        <li>
          <input
            type="number"
            placeholder="Custom"
            id="custom-percentage-button"
            className="percentage-button"
          />
        </li>
      </ul>
    </>
  );
}

