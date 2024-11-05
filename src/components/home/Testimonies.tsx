import React from 'react'
import styles from './Containers.module.css'


export const TestimoniesComponent = () => {

  return (
    <>

      {/* COMPONENTE: Testimonies*/}
      <div className={`${styles.background1}`}>
        <div className={`${styles.containerB}`}>

            <h1 className={`${styles.title}`}>
            Testimonios
            </h1>

            <div className={`${styles.horizontal}`}>
                <div>
                    <p>Ing. Ana López	</p>
                    <p>Gerente de Operaciones, Farmaceutica XYZ</p>
                    <p>Foto una mujer de mediana edad, con una imagen profesional y amigable</p>
                    <p>Atom Controles nos ayudó a diseñar e implementar un sistema de control de climatización de última generación para nuestra planta de producción. El sistema nos ha permitido mantener una temperatura y humedad óptimas en todo momento, lo que ha mejorado la calidad de nuestros productos y la eficiencia de nuestros procesos. ¡Estamos muy satisfechos con el servicio!</p>
                </div>

                <div>
                    <p>Arq. Juan Pérez</p>
                    <p>Director de Proyectos, Constructora ABC</p>
                    <p>Un hombre joven, con una imagen moderna y dinámica.</p>
                    <p>La experiencia de Atom Controles en el diseño de sistemas de climatización para edificios de oficinas es inigualable. Nos brindaron una solución a medida que se ajustó perfectamente a nuestras necesidades, logrando un ambiente de trabajo confortable y productivo. ¡Los recomiendo ampliamente!</p>
                </div>

                <div>
                    <p>Lic. María García</p>
                    <p>Gerente de Mantenimiento, Hotel Grand</p>
                    <p>Una mujer de edad madura, con una imagen elegante y sofisticada.</p>
                    <p>El servicio de mantenimiento de Atom Controles nos ha dado mucha tranquilidad. Siempre están disponibles para atender cualquier problema y se aseguran de que nuestros sistemas de climatización funcionen a la perfección. ¡Su profesionalismo y atención al cliente son excelentes!</p>
                </div>

            </div>

        </div>

      </div>
    </>
  )
}