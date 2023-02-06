import Link from 'next/link'
import React from 'react'
import { BsPerson } from 'react-icons/bs'

function HeaderRightSide (): JSX.Element {
  return (
    <div className='hidden md:flex grow items-center justify-end'>
      <div className='flex items-center'>
        <Link href={'/'} >
          <button className='px-4 py-[6px] rounded-md bg-[#9147ff]'>
            Account
          </button>
        </Link>
        <BsPerson size={30} />
      </div>
    </div>
  )
}

export default HeaderRightSide
