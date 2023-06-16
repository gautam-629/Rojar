"use client"
import React, { useState } from 'react';
import Image from 'next/image';
const SlideBar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <div>
        <div className={`bg-secBackColor duration-300 h-screen ${open ? "w-72" : "w-20"} p-5 pt-8 relative`}>
          <Image onClick={(e) => setOpen(!open)} className={`absolute -right-3 top-9 ${!open && 'rotate-180'} cursor-pointer`} src={'/img/arrowUp.png'} width={30} height={20} alt='arrow' />

          {/* logo */}
          <div className='flex gap-x-4'>
            <Image className={`${open && 'rotate-90'} duration-500`} src={'/img/logo.png'} width={30} height={20} alt='logo' />
            <h1 className={`text-textColor duration-300 text-3xl ${!open && 'scale-0'} font-bold`}>Sayogi</h1>
          </div>

          {/* list item */}
          <ul className='mt-3 gap-y-2'>
            <li className='flex gap-x-3 items-center pt-2 '>
              <Image src={'/img/home.png'} height={10} width={25} alt='Home page' />
              <span className={`text-textColor ${!open && 'hidden'} cursor-pointer hover:border-b-4 border-blue text-xl font-bold`}>Home</span>
            </li>

            <li className='flex gap-x-3 items-center pt-3'>
              <Image src={'/img/createProfile.png'} height={10} width={25} alt='create porfile' />
              <span className={`text-textColor ${!open && 'hidden'} cursor-pointer hover:border-b-4 border-blue text-xl font-bold`}>Create Profile</span>
            </li>

            <li className='flex gap-x-3 items-center pt-3'>
              <Image src={'/img/serviceRequest.png'} height={10} width={25} alt='create porfile' />
              <span className={`text-textColor ${!open && 'hidden'} cursor-pointer hover:border-b-4 border-blue text-xl font-bold`}>Service Request</span>
            </li>

            <li className='flex gap-x-3 items-center pt-3'>
              <Image src={'/img/searUp.png'} height={10} width={25} alt='create porfile' />
              <span className={`text-textColor ${!open && 'hidden'} cursor-pointer hover:border-b-4 border-blue text-xl font-bold`}>Service Seeker</span>
            </li>

            <li className='flex gap-x-3 items-center pt-3'>
              <Image src={'/img/history.png'} height={10} width={25} alt='create porfile' />
              <span className={`text-textColor ${!open && 'hidden'} cursor-pointer hover:border-b-4 border-blue text-xl font-bold`}>History</span>
              {open &&
                <Image className={`${subMenuOpen && "rotate-180 duration-200"}`} onClick={(e) => { setSubMenuOpen(!subMenuOpen) }} src={'/img/downarrow.png'} height={10} width={25} alt='downarrow' />
              }
            </li>

            {/* submenu */}
            {subMenuOpen && open &&
              <ul className='pl-5 pt-1 duration-200 '>
                <li className='flex items-center duration-200 gap-2 pt-2'>
                  <Image src={'/img/subHis.png'} height={10} width={20} alt='downarrow' />
                  <span className='text-textColor font-bold text-lg cursor-pointer hover:border-b-4 border-blue'>Service Receiver</span>
                </li>
                <li className='flex items-center duration-200 gap-2 pt-2'>
                  <Image src={'/img/subHis.png'} height={10} width={20} alt='downarrow' />
                  <span className='text-textColor font-bold text-lg cursor-pointer hover:border-b-4 border-blue'>Service Provider</span>
                </li>
                <li className='flex items-center duration-200 gap-2 pt-2'>
                  <Image src={'/img/subHis.png'} height={10} width={20} alt='downarrow' />
                  <span className='text-textColor font-bold text-lg cursor-pointer hover:border-b-4 border-blue'>Service History</span>
                </li>
              </ul>
            }
          </ul>
        </div>

       
      </div>
    </>
  )
}

export default SlideBar;