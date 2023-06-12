   "use client"
import React, { FunctionComponent } from 'react'
const PhoneNumber:FunctionComponent<{
  handleOnNext():void;
}> = ({handleOnNext}) => {
  return (
      <div>
        <h1>PhoneNumber</h1>
        <button onClick={(e)=>handleOnNext()}>next</button>
      </div>
  )
}

export default PhoneNumber;