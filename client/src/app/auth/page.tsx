    "Use client"
import React, { FunctionComponent, useState } from 'react'
import PhoneNumber from '../steps/PhoneNumber';
import Otp from '../steps/Otp';
import UserName from '../steps/UserName';
import Avatar from '../steps/Avatar';

const steps: Steps={
     1:PhoneNumber,
    //  2:Otp,
    //  3:UserName,
    //  4:Avatar
}

const [step,setStep]=useState(1)
const Step:FunctionComponent=steps[step as keyof Steps];
const page = () => {
    function onNext(){
        setStep(step+1);
    }
  return (
    <div>
        <Step click={onNext}/>
    </div>
  )
}

export default page