import React from 'react';
import Image from 'next/image';
import styles from '../styles/GaleriaSection.module.css';

const servicios = [
  {
    titulo: 'Limpieza de pisos vacacionales',
    descripcion: 'Prepara tu piso vacacional para la próxima reserva. Limpieza a fondo, rápida y eficiente, para que cada huésped disfrute de un espacio reluciente.',
    imagen: '/imagenes/limpieza-vacacionales.png',
    
  },
  {
    titulo: 'Limpieza de Oficinas ',
    descripcion: 'Una oficina limpia impulsa la productividad. Nos encargamos de cada detalle, desde el escritorio hasta las zonas comunes, para un ambiente laboral agradable.',
    imagen: '/imagenes/limpieza-oficina.png ',
    
  },
  {
    titulo: 'Limpieza domestica',
    descripcion: 'Relájate en casa sin preocuparte por la limpieza. Ofrecemos un servicio personalizado para que disfrutes de un hogar limpio y acogedor siempre.',
    imagen: '/imagenes/limpieza-domestica.png',
    
  },
  {
    titulo: 'Limpieza de Portales',
    descripcion: 'Portales limpios y relucientes para una primera impresión impecable, Confía en nuestros expertos para mantener la entrada de tu edificio en perfectas condiciones.',
    imagen: '/imagenes/limpieza-portales.png',
    
  },
  {
    titulo: 'Limpieza de Comercios',
    descripcion: 'Tu negocio es tu carta de presentación. Permite que nuestros profesionales mantengan tu comercio reluciente y atractivo para tus clientes.',
    imagen: '/imagenes/limpieza-comercios.jpg',
    
  }
];

const GaleriaSection = () => {
  return (
    <section className={styles.galeriaContainer}>
      <header className={styles.header}>
        <h1>Nuestra Galería de Servicios</h1>
      </header>

      <div className={styles.gridServicios}>
        {servicios.map((servicio, index) => (
          <article key={index} className={styles.servicioCard}>
            <div className={styles.imagenWrapper}>
              <Image
                src={servicio.imagen}
                alt={servicio.titulo}
                fill
                className={styles.imagen}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className={styles.cardContenido}>
              <h2>{servicio.titulo}</h2>
              <p>{servicio.descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GaleriaSection;

