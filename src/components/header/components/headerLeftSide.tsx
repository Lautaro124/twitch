'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logo from '~/assets/logo.png'
import { Menu } from '@headlessui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'

function HeaderLeftSide (): JSX.Element {
  return (
    <div className='flex grow items-center justify-start'>
        <Link href='/'>
          <Image
            src={logo}
            alt='Logo not find'
            width={36}
            height={36}
            className='cursor-pointer z-10'
          />
        </Link>
        <p className='p-4'>
          Browser
        </p>
        <div className='p-4'>
          <Menu>
            <Menu.Button>
              <BsThreeDotsVertical size={20} />
            </Menu.Button>
            <Menu.Items className='origin-top-right flex flex-col absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={active ? 'bg-gray-400' : ''}
                    href='/account-settings'
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={active ? 'bg-gray-400' : ''}
                    href='/account-settings'
                  >
                    Documentation
                  </a>
                )}
              </Menu.Item>
              <Menu.Item disabled>
                <span className='opacity-75'>Invite a friend (coming soon!)</span>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
  )
}

export default HeaderLeftSide
