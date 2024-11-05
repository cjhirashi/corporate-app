import Link from 'next/link';
import React from 'react'
import { Button } from '../ui/button';
import { DarkMode } from '../darkMode';

export interface HeroInterface {
  name?: string
  children?: React.ReactNode;
}

export const HeroComponent = ({name,children}:HeroInterface) => {

  return (
    <>

      {/* COMPONENTE: Hero*/}
      <div 
            className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-center text-white"
            style={{ backgroundImage: 'url(/img/fondos/fondo-1.png)' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Innovación que transforma la climatización.</h1>
            <p className="text-lg md:text-xl mb-8">Diseñamos, desarrollamos e implementamos sistemas de control de climatización inteligentes.</p>
            <div className="flex gap-4">
                <Button  >
                    <Link href="#contact">
                        Contactar con nuestros expertos
                    </Link>
                </Button>
                <DarkMode />
                
            </div>
        </div>
    </>
  )
}