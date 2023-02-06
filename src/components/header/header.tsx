import React from 'react'
import HeaderLeftSide from './components/headerLeftSide'
import HeaderMidSide from './components/headerMidSide'
import HeaderMobileMenu from './components/HeaderMobileMenu'
import HeaderRightSide from './components/headerRigthSide'

function Header (): JSX.Element {
  return (
    <header className=' fixed h-14 w-full bg-[#0e0e10] flex flex-nowrap items-center p-4 mb-[2px] z-10'>
      <HeaderLeftSide />
      <HeaderMidSide />
      <HeaderRightSide />
      <HeaderMobileMenu />
    </header>
  )
}

export default Header
