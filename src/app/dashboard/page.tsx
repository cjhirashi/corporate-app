import { UserButton, useUser } from '@clerk/nextjs'

export const metadata = {
  title: 'Dashboard',
  description: 'Página dashboard',
};

const pageData = {
  name: 'Dashboard',
  description: 'Página dashboard',
}

export default function DashboardPage() {

    // solo funciona en un 'use client'
    // const { isLoaded, isSignedIn, user } = useUser()

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex flex-col h-screen `}>

        {/* SECCION: Header */}
        <div className={`flex-none`}>



        </div>

        {/* SECCION: Body */}
        <div className={`flex-1 flex flex-col text-background-tx items-center overflow-y-auto `}>
            <UserButton />
            
          <h1 className={`my-auto text-3xl text-background-tx font-bold opacity-60`}>{pageData.name}
          <small className={`text-primary-bg `}> page</small></h1>

        </div>

        {/* SECCION: Footer */}
        <div className={`flex-none`}>



        </div>

      </div>

    </>
  );
}