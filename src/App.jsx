import { useState } from "react";
import "./App.css";
import InfoBoxOne from "./Componentes/infoBoxOne";
import InfoBox2 from "./Componentes/infoBox2";
import InfoBox3, { InfoBox4 } from "./Componentes/infoBox3";
import InfoBox5 from "./Componentes/infoBox4";

function App() {
  

  return (
    <>
      <InfoBoxOne />
      <div class="general-wrapper">
        <div class="data-wrapper">
          <h1>Bill</h1>
        <InfoBox3/>
          <h2>Select Tip %</h2>
          <InfoBox2/>
          <h2>Number of People</h2>
          <InfoBox4/>
        </div>
        <div class="result-wrapper">
          <InfoBox5/>
          <button type="button" id="reset-button" class="reset-button">
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
