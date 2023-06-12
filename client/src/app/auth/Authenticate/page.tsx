'use client'
import React, { useState } from 'react';
import PhoneNumber from '@/app/steps/PhoneNumber';
import Otp from '@/app/steps/Otp';

const steps: { [key: number]: React.FunctionComponent<{ handleOnNext(): void }> | (() => React.ReactElement) } = {
  1: PhoneNumber,
  2: Otp,
};

const page = () => {
  const [step, setStep] = useState(1)
  const Step = steps[step];
  function onNext() {
    setStep(step + 1);
  }
  return (
    <div>
      <Step handleOnNext={onNext} />
    </div>
  )
}

export default page