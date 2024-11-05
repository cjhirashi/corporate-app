import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Brain, Handshake, Lightbulb } from 'lucide-react'
import styles from './Containers.module.css'
import Image from 'next/image'



export const AboutComponent = () => {

  const iconStyle = {
    
    width: '100px',
    height: '100px',
    strokeWidth: '2px',
  }

  return (
    <>

      {/* COMPONENTE: About*/}
      <div className={`${styles.background1}`}>
        <div className={`${styles.containerB}`}>
          <h1 className={`${styles.title}`}>Acerca de Atom Controles</h1>
          
          <p className='text-lg text-center'>
          En Atom Controles, somos expertos en el diseño, desarrollo e implementación de sistemas de control de climatización inteligentes.  Fundada en 2013 por Carlos Jiménez Hirashi y Marcelo Piña Neria, nuestra empresa cuenta con una sólida trayectoria en el sector,  respaldada por la experiencia de nuestros fundadores, quienes suman más de 30 años  en el desarrollo de soluciones de climatización de vanguardia.
          </p>

          <p className='text-lg text-center'>
          Nos impulsa la innovación, buscando siempre las tecnologías más avanzadas para optimizar el confort y la eficiencia energética de nuestros clientes.  Nuestra experiencia nos permite ofrecer soluciones a medida, adaptadas a las necesidades específicas de cada proyecto. Y nuestro compromiso con la excelencia nos guía en cada paso, desde el diseño hasta la implementación.
          </p>

          <p className='text-lg text-center'>
          En Atom Controles, combinamos la experiencia con la innovación para ofrecer soluciones de climatización a medida que satisfagan las necesidades de cada cliente.
          </p>

          <Button>
              <Link href="#contact">
              Contactar con nuestros expertos
              </Link>
          </Button>
          
          <div className={`${styles.horizontal}`}>
              <div className={`${styles.card}`}>
                <div className={`${styles.user}`}>
                  <Image src="/img/auth/carlos.jpg" alt="Carlos Jiménez Hirashi" width={160} height={160}/>
                </div>
                <div className={`${styles.title3}`}>
                Carlos Jiménez Hirashi
                </div>
              </div>

              <div className={`${styles.card}`}>
                <div className={`${styles.user}`}>
                  <Image src="/img/auth/marcelo.jpg" alt="Carlos Jiménez Hirashi" width={160} height={160}/>
                </div>
                <div className={`${styles.title3}`}>
                Marcelo Piña Neria
                </div>
              </div>
          </div>

          <div className={`${styles.horizontal}`}>
              <div className={`${styles.valores}`}>
                  <Lightbulb style={iconStyle}/>
                  <h2 className={`${styles.subtitle}`}>Innovación</h2>
              </div>
              <div className={`${styles.valores}`}>
                  <Brain style={iconStyle}/>
                  <h2 className={`${styles.subtitle}`}>Experiencia</h2>
              </div>
              <div className={`${styles.valores}`}>
                  <Handshake style={iconStyle}/>
                  <h2 className={`${styles.subtitle}`}>Compromiso</h2>
              </div>
          </div>

        </div>

      </div>
    </>
  )
}