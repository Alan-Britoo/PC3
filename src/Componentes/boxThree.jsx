import React from 'react'

export  function BoxThree({ide,la,cla,idee,ty,va,min}) {
  return (
    <>
          <span id={ide}></span>
          <label for={la}>
            <input
              class={cla}
              id={idee}
              type={ty}
              value={va}
              min={min}
            />
          </label>
      
    </>
  )
}
