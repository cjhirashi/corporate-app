export default function AuthLayout({ children }: { children: React.ReactNode; }) {

  return (
    <div className={`flex flex-col items-center w-screen h-screen`}>

      {/* SECCION: Header*/}
      <div className={`flex w-screen z-20`}>

      </div>

      {/* SECCION: Body*/}
      <div className={`flex flex-col h-full w-full gap-8 justify-center items-center overflow-hidden `}>
        <h1 className={`text-2xl`}>Sistema de autentificación</h1>

        { children }

      </div>

      {/* SECCION: Footer*/}
      <div className={`flex w-screen`}>

      </div>

    </div>
  );
}