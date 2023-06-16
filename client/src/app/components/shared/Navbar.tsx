import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
      <div className='mt-4 flex justify-between'>
          <div>
            <label>
              <Image className='inline' width={20} height={20} src={'/img/inputSearch.png'} alt='search' />
            </label>
            <input className='bg-secBackColor w-56 py-1 pl-4 border-none outline-none rounded-lg text-textColor' type='text' placeholder='search...' />
          </div>

          <div>
            <Image className='inline mr-20' width={25} height={25} src={'/img/notification.png'} alt='notification' />
            <span className='text-textColor mr-20 cursor-pointer text-lg font-bold'>login</span>
          </div>

        </div>
    </>
  )
}

export default Navbar