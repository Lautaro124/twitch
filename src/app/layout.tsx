import React from 'react'
import Header from '~/components/header/header'
import SideMenu from '~/components/sideMenu/sideMenu'
import './globals.css'

interface Props {
  children: React.ReactNode
  session: any
}

export default function RootLayout ({ children }: Props): JSX.Element {
  return (
    <html lang="en">
      <head />
        <body className='w-screen h-screen'>
          <Header />
          <div className='pt-[60px] flex w-full'>
            <SideMenu />
            {children}
          </div>
        </body>
    </html>
  )
}
