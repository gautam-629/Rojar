import React, { FunctionComponent, MouseEventHandler } from 'react';
import Image from 'next/image';
import style from './Button.module.css'
const Button:FunctionComponent<
  {
     text: string;
     click: MouseEventHandler<HTMLButtonElement>;
  }
> = ({text,click}) => {
  return (
    <button className={style.button} onClick={click}>
    <span>{text}</span>
    <Image width={20} height={20} className={style.arrow} src="/img/arrow-forward.png" alt="arrow" />
  </button>
  )
}

export default Button