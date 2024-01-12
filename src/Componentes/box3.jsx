import React from 'react'

export  function BoxThree({ide,la,cla,idee,ty,min}) {
  return (
    <>
          <span id={ide}></span>
          <label for={la}>
            <input
              class={cla}
              id={idee}
              type={ty}
              min={min}
            />
          </label>
      
    </>
  )
}
