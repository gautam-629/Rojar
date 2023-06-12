import React, { FunctionComponent } from 'react'

const Otp:FunctionComponent<{
  handleOnNext():void;
}> = ({handleOnNext}) => {
  return (
    <>
    <div>Otp</div>
    <button onClick={(e)=>handleOnNext()}>next</button>
    </>
  )
}

export default Otp