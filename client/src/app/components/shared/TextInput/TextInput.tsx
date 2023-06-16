import React, { ChangeEvent, FunctionComponent } from 'react';
import style  from './TextInput.module.css';
const TextInput:FunctionComponent<
{
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
> = ({value,onChange}) => {
  return (
    <div>
    <input className={style.input} type="text" value={value} onChange={onChange} />
   </div>
  )
}

export default TextInput