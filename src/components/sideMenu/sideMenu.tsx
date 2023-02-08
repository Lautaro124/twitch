import React from 'react'
import { RiMovieLine } from 'react-icons/ri'
import REC_CHANNELS from '~/data/channels.json'
import TOP_CHANNELS from '~/data/topChannels.json'
import Channels from '../channels/channels'

function SideMenu (): JSX.Element {
  return (
    <div className='fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#0e0e10]'>
      <div>
        <p className='hidden xl:flex uppercase font-bold text-sm pb-4'> Recomended channels</p>
        <p><RiMovieLine size={20} className=' xl:hidden justify-center w-full'/></p>
      </div>
      <Channels channels={REC_CHANNELS} />
      <div>
        <p className='hidden xl:flex uppercase font-bold text-sm py-4'> Top channels</p>
        <p><RiMovieLine size={20} className=' xl:hidden justify-center w-full'/></p>
      </div>
      <Channels channels={TOP_CHANNELS} />
    </div>
  )
}

export default SideMenu
