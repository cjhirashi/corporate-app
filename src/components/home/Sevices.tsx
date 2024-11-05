import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ChartNetwork, DraftingCompass, HardHat, PocketKnife, SquareCode, Wrench } from 'lucide-react'
import styles from './Containers.module.css'


export const ServicesComponent = () => {

  return (
    <>

      {/* COMPONENTE: Services*/}
      <div className={`${styles.background2}`}>
        <div className={`${styles.containerB}`}>

          <h1 className={`${styles.title}`}>
          Soluciones de Climatización a Medida
          </h1>

          <p>
          En Atom Controles, entendemos que cada espacio y cada cliente tiene necesidades únicas. Por eso, nos especializamos en el diseño a medida de sistemas de control de climatización inteligentes para una amplia gama de sectores: Farma, Oficinas, Industria, Comercios, Hoteles y más. Nuestro servicio integral abarca desde el diseño inicial hasta el mantenimiento, garantizando un control total y un confort absoluto en cada proyecto.
          </p>

          <div className={`${styles.horizontal}`}>
            <div className={`${styles.card} ${styles.cardColor2}`}>
                <ChartNetwork />
                <DraftingCompass />
                <h1>
                Diseño:
                </h1>
                <p>
                En Atom Controles, el diseño es la piedra angular de nuestro servicio. Nuestro equipo de expertos trabaja en estrecha colaboración con cada cliente para entender sus necesidades y crear sistemas de control de climatización a medida. Utilizamos tecnología de vanguardia y las últimas tendencias en diseño para ofrecer soluciones innovadoras, eficientes y personalizadas que se adaptan a cualquier espacio y necesidad.
                </p>
            </div>

            <div className={`${styles.card} ${styles.cardColor2}`}>
                <SquareCode />
                <HardHat />
                <h1>
                Ingeniería, Instalación, Programación & Pruebas:
                </h1>

                <p>
                Una vez definido el diseño, nuestro equipo de ingenieros se encarga de desarrollar e implementar el sistema de control. Realizamos la instalación con precisión y cuidado, programamos el sistema para un funcionamiento óptimo y llevamos a cabo pruebas exhaustivas para garantizar su correcto funcionamiento.
                </p>
            </div>

            <div className={`${styles.card} ${styles.cardColor2}`}>
                <PocketKnife />
                <Wrench />
                <h1>
                Mantenimiento & Capacitación:
                </h1>

                <p>
                En Atom Controles, no solo nos preocupamos por la implementación, sino también por el mantenimiento a largo plazo de sus sistemas. Ofrecemos servicios de mantenimiento preventivo y correctivo para garantizar un rendimiento óptimo y una larga vida útil de sus equipos. Además, brindamos capacitación al personal del cliente para el correcto manejo y operación de los sistemas.
                </p>
            </div>


          </div>
            
          <Button>
            <Link href="#contact">
              Solicitar un presupuesto
            </Link>
          </Button>

        </div>

      </div>
    </>
  )
}