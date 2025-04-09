import React from 'react';
import Image from 'next/image';
import styles from '../styles/GaleriaSection.module.css';

const servicios = [
  {
    titulo: 'Limpieza de Oficinas',
    descripcion: 'Ambientes de trabajo limpios y seguros.',
    imagen: '/imagenes/limpieza-oficina.png',
    etiqueta: '✓ Listo para nuevos huéspedes'
  },
  {
    titulo: 'Limpieza de Comercios',
    descripcion: 'Presentación impecable para tus clientes.',
    imagen: '/imagenes/limpieza-comercios.jpg',
    etiqueta: '✓ Listo para nuevos huéspedes'
  },
  {
    titulo: 'Limpieza de Portales',
    descripcion: 'Renueva tus espacios con limpieza profunda.',
    imagen: '/imagenes/limpieza-portales.png',
    etiqueta: ' ✓ Listo para nuevos huéspedes'
  },
  {
    titulo: 'Limpieza domestica',
    descripcion: 'Tu hogar limpio, cómodo y seguro.',
    imagen: '/imagenes/limpieza-domestica.png',
    etiqueta: '✓ Listo para nuevos huéspedes'
  },
  {
    titulo: 'Limpieza de pisos vacacionales',
    descripcion: 'Deja todo listo después de la construcción.',
    imagen: '/imagenes/limpieza-vacacionales.png',
    etiqueta: '✓ Listo para nuevos huéspedes'
  }
];

const GaleriaSection = () => {
  return (
    <section className={styles.galeriaContainer}>
      <header className={styles.header}>
        <h1>Nuestra Galería de Servicios</h1>
        <p>Resultados profesionales que hacen la diferencia</p>
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
              <span className={styles.etiqueta}>{servicio.etiqueta}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GaleriaSection;
