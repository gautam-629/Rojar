   "use client"
import React, { FunctionComponent } from 'react'
import Card from '../components/shared/Card'
import TextInput from '../components/shared/TextInput/TextInput'
import Button from '../components/shared/Button'

const UserName:FunctionComponent<{
  handleOnNext(): void;
}> = (handleOnNext) => {
  return (
    <>
      <div className='flex justify-center items-center mt-44'>
        <Card title="What’s your full name?" icon="goggle-emoji">
          <TextInput />
          <p style={{ color: '#c4c5c5', width: '70%', margin: '0 auto', marginTop: '10px' }}>
            People use real names at Sayogi thanks :) 
          </p>
          <Button text='Next'/>
        </Card>
      </div>
    </>
  )
}

export default UserName