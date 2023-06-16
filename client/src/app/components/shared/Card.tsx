import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import style from './Card.module.css';
const Card:FunctionComponent<
{
    title:string;
    icon:string;
    children:any;
}
> = ({title,icon,children}) => {
  return (
    <div className={style.card}>
    <div className={style.headingWrapper}>
     <Image width={20} height={20} src={`/img/${icon}.png`} alt="logo" />
     <h1 className={style.heading}>{title}</h1>
    </div>
    {children}
  </div>
  )
}

export default Card