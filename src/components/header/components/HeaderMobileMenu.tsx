'use client'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

const links = [
  {
    route: '/',
    text: 'Home'
  },
  {
    route: '/',
    text: 'Live channels'
  },
  {
    route: '/',
    text: 'Top categories'
  },
  {
    route: '/',
    text: 'Account'
  }
]

function HeaderMobileMenu (): JSX.Element {
  const [isHidden, setHidden] = useState<boolean>(false)
  const animationSlideMenu = isHidden ? 'left-0' : 'left-[100%]'

  const handleMenu = (): void => {
    setHidden(!isHidden)
  }

  return (
    <>
      <div onClick={handleMenu} className='block md:hidden z-10 cursor-pointer duration-200'>
          {
            !isHidden
              ? <AiOutlineMenu size={25}/>
              : <AiOutlineClose size={25}/>
          }
        </div>
      <div className={`fixed md:hidden top-0 ${animationSlideMenu} w-full h-screen flex flex-row ${isHidden ? '' : 'blur-sm'} ease-in duration-200`}>
        <div
          onClick={handleMenu}
          className={` duration-150 ${isHidden ? 'w-1/4' : 'w-1.5'} h-full opacity-50 bg-[#0e0e10]`}>
        </div>
        <ul className='text-center w-3/4 bg-[#0e0e10] h-full flex flex-col justify-center items-center'>
          {isHidden}
          {links.map(link => (
            <Link
              href={link.route}
              key={link.text}
            >
              <li className='p-4 text-3xl font-bold'>
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  )
}

export default HeaderMobileMenu
