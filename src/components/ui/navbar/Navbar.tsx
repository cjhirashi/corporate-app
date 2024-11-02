import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { MenuComponent } from './Menu'
import { DarkMode } from '@/components/darkMode'


export const NavbarComponent = () => {

  return (
    <>

      {/* COMPONENTE: Navbar*/}
      <nav className={`container mx-auto`}>
        <div className={`flex m-2 items-center`}>
            <div className={``}>Logo</div>
            <div className={`flex-1 flex justify-center`}><MenuComponent/></div>
            <div className={`flex gap-4`}>
                <DarkMode/>
                <UserButton/>
            </div>    
        </div>
      </nav>
    </>
  )
}