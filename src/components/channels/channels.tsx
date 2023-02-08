import React from 'react'
import Image from 'next/image'
import { BsDot } from 'react-icons/bs'

interface Props {
  channels: Array<{
    avatar: string
    username: string
    game_name: string
    rank: number
  }>
}

function Channels ({ channels }: Props): JSX.Element {
  return (
    <>
      {channels.map((channel, index) => (
        <div key={index} className='inline-flex items-center w-full py-[2px]'>
          <div>
            <Image
              src={channel.avatar}
              alt={'No show'}
              width={50}
              height={50}
            />
          </div>
          <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>{channel.username}</p>
              <p className=' text-gray-400'>{channel.game_name}</p>
            </div>
            <p className=' flex items-center'><BsDot size={40} color='red' /> {channel.rank}K</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Channels
