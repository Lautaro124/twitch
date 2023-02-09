import React from 'react'
import LiveChannels from '~/components/liveChannels/liveChannles'

export default function Home (): JSX.Element {
  return (
    <main className=' absolute left-[64px] xl:left-[240px]'>
      <section id='hero' className='p-2 md:p-8'>
        <div className='relative overflow-hidden w-full pt-[56.25%]'>
          <iframe
            className=' absolute top-0 left-0 right-0 w-full h-full'
            src="https://www.youtube.com/embed/g1e7JxSbaGs?start=154"
            frameBorder='0'
            allowFullScreen
          >
          </iframe>
        </div>
      </section>
      <LiveChannels />
    </main>
  )
}
