import React from 'react'
import { BoxTwo } from './boxTwo'


export default function InfoBox2() {
const valor=(zz)=>{
  console.log(zz)
}

  return (
    <>
    <ul>
        <BoxTwo
      ide={'percentage-5'}
      valor={'5'}
      tex={'5%'}
      prueba={()=>valor(5)}
      />
      <BoxTwo
      ide={'percentage-10'}
      valor={'10'}
      tex={'10%'}
      prueba={()=>valor(10)}
      />
      <BoxTwo
      ide={'percentage-15'}
      valor={'15'}
      tex={'15%'}
      prueba={()=>valor(15)}
      />
      <BoxTwo
      ide={'percentage-25'}
      valor={'25'}
      tex={'25%'}
      prueba={()=>valor(25)}
      />
      <BoxTwo
      ide={'percentage-50'}
      valor={'50'}
      tex={'50%'}
      prueba={()=>valor(50)}
      />
       <li><input type="number" placeholder="Custom" id="custom-percentage-button" class="percentage-button"/></li>
      </ul>
     
    </>
  )
}
