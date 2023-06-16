"use client"
import React, { FunctionComponent, useState } from 'react'
import Card from '../components/shared/Card';
import TextInput from '../components/shared/TextInput/TextInput';
import Button from '../components/shared/Button';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
const PhoneNumber: FunctionComponent<{
  handleOnNext(): void;
}> = ({ handleOnNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  function submit(){
    
  }
  return (
    <>
    <div className='flex w-full h-screen justify-center items-center'>
      <Card icon='phone' title='Enter your Phone number'>
        <TextInput
           value={phoneNumber}
           onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div className='mt-2'>
          <Button text='Next' click={submit} />
        </div>
        <p style={{ color: '#c4c5c5', width: '70%', margin: '0 auto', marginTop: '10px' }}>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </Card>
      </div>
    </>

  )
}

{/* <button onClick={(e)=>handleOnNext()}>next</button> */ }
export default PhoneNumber;