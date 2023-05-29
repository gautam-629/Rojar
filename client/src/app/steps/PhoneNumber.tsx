import React, { FunctionComponent } from 'react'

const PhoneNumber:FunctionComponent<{
  click:Function
}> = ({click}) => {
  return (
      <div>
        <h1>PhoneNumber</h1>
        <button onClick={(e)=>click()}>next</button>
      </div>
  )
}

export default PhoneNumber