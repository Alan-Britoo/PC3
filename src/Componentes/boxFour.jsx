import React from 'react'

export function BoxFour({nom,per,sim,num,nom2}) {
  return (
    <>
      
            <div class="text-amount">
              <div>
                <h2>{nom}</h2>
                <p>{per}</p>
              </div>
              <h3>
                {sim}<span id="tip-amount">{num}</span>
              </h3>
            </div>
            <div class="total-amount">
              <div>
                <h2>{nom2}</h2>
                <p>{per}</p>
              </div>
              <h3>
                {sim}<span id="total">{num}</span>
              </h3>
            </div>
          

    </>
  )
}
