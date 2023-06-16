import React, { FunctionComponent } from 'react'
import Card from '../components/shared/Card';
import TextInput from '../components/shared/TextInput/TextInput';
import Button from '../components/shared/Button';
const Otp:FunctionComponent<{
  handleOnNext():void;
}> = ({handleOnNext}) => {
  return (
    <>
   <div className='flex justify-center items-center mt-40'>
     <Card title='Enter the code we just texted you' icon='lock-emoji'>
        <TextInput/>
        <div className='mt-2'>
          <Button text='Next'/>
        </div>
        <p style={{ color: '#c4c5c5', width: '70%', margin: '0 auto', marginTop: '10px' }}>
        By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
        </p>
     </Card>
   </div>
    </>
  )
}

export default Otp