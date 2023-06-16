'use client'
import React, { FunctionComponent, useState } from 'react'
import styles from './Avatar.module.css'
import Card from '@/app/components/shared/Card'
import Button from '@/app/components/shared/Button'
import Image from 'next/image'
const Avatar:FunctionComponent<
{
  handleOnNext():void;
}
> = ({handleOnNext}) => {
  const [image, setImage] = useState("/img/monkey-avatar.png");
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title={`Okay,${name}`} icon="monkey-emoji">
          <p className={styles.subHeading}>How’s this photo?</p>
          <div className={styles.avatarWrapper}>
            <Image height={100} width={100} src={image} alt="avatar" />
          </div>
          <div>
            <input
              id="avatarInput"
              type="file"
              className={styles.avatarInput}
            />
            <label className={styles.avatarLabel} htmlFor="avatarInput">
              Choose a different photo
            </label>
          </div>
          <div>
            <Button text="Next" />
          </div>
        </Card>
      </div>
    </>
  )
}

export default Avatar;