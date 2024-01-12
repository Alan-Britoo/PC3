import React, { useState } from "react";

import { BoxThree } from "./box3";

export default function InfoBox3() {
  const [imput1, setimput1] = useState(0);
  
  const valorImp = (e) => {
    setimput1(parseInt(e.target.value));
    
  };
  
  return (
    <>
      <BoxThree
        ide={"intentob"}
        la={"input-bill"}
        cla={"input-bill"}
        idee={"input-bill"}
        ty={"number"}
        onChange={valorImp}
        value={imput1}
        min={"0"}
      />
    </>
  );
}
export function InfoBox4() {
  const [imput2, setimput2] = useState(0);
const valorImp2 = (o) => {
    setimput2(parseInt(o.target.value));
    
  };
  return (
    <>
      <BoxThree
        ide={"intento"}
        la={"input-people"}
        cla={"input-people"}
        idee={"input-people"}
        ty={"number"}
        onChange={valorImp2}
        value={imput2}
        min={"1"}
      />
    </>
  );
}
