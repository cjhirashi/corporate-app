import { NavbarComponent } from "@/components/ui/navbar/Navbar";

export default function PublicLayout({ children }: { children: React.ReactNode; }) {

  return (
    <div className={`flex flex-col items-center w-screen h-screen`}>

      {/* SECCION: Header*/}
      <div className={`flex w-screen z-20 `}>
        <NavbarComponent />
      </div>

      {/* SECCION: Body*/}
      <div className={`flex flex-col h-full w-full overflow-hidden `}>

        { children }

      </div>

      {/* SECCION: Footer*/}
      <div className={`flex w-screen`}>

      </div>

    </div>
  );
}