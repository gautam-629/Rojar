'use client'
import React, { useState } from 'react';
import UserName from '@/app/steps/UserName';
import Avatar from '@/app/steps/Avatar/Avatar';

const steps: { [key: number]: React.FunctionComponent<{ handleOnNext(): void }> | (() => React.ReactElement) } = {
  1: UserName,
  2: Avatar,
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