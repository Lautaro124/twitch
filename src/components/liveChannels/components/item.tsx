import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

interface Props {
  img: StaticImageData
  profileImg: string
  title: string
  user: string
  game: string
}

function Item ({ img, profileImg, title, user, game }: Props): JSX.Element {
  return (
    <div className='p-2'>
      <Image src={img} width={555} height={315} alt='No render' />
      <div className='flex pt-2'>
        <div className='pr-2'>
          <Image
            src={profileImg}
            alt='/'
            width='60'
            height='60'
            className='rounded-full'
          />
        </div>
        <div>
          <p className='text-sm font-bold'>{title}</p>
          <p className='text-sm text-gray-500'>{user}</p>
          <p className='text-sm text-gray-500'>{game}</p>
        </div>
      </div>
    </div>
  )
}

export default Item
