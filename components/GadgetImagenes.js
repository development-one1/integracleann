import React from "react";
import Image from "next/image";
import styles from "../styles/Gadget.module.css";

const GadgetImagenes = () => {
  const imagenes = [
    {
      id: 1,
      src: "/antes/antes1.jpeg",
      alt: "Cocina antes",
      titulo: "Cocina - ANTES",

    },
    {
      id: 2,
      src: "/antes/antes2.jpeg",
      alt: "Comedor antes",
      titulo: "Comedor - ANTES",
      
    },
    {
      id: 3,
      src: "/antes/antes3.jpeg",
      alt: "Habitación individual antes",
      titulo: "Habitación Individual - ANTES",
    },
    {
      id: 4,
      src: "/antes/antes4.jpeg",
      alt: "Habitación principal antes",
      titulo: "Habitación Principal - ANTES",
      
    },

    {
      id: 5,
      src: "/antes/antes5.jpeg",
      alt: "Habitación principal antes",
      titulo: "Habitación Principal - ANTES",
    },
    {
      id: 6,
      src: "/antes/antes6.jpeg",
      alt: "Habitación principal antes",
      titulo: "Habitación Principal - ANTES",
    },
    {
      id: 7,
      src: "/antes/antes7.jpeg",
      alt: "Habitación principal antes",
      titulo: "Habitación Principal - ANTES",
    },
    {
      id: 8,
      src: "/antes/antes8.jpeg",
      alt: "Habitación principal antes",
      titulo: "Habitación Principal - ANTES",
    },
    {
      id: 9,
      src: "/antes/antes9.jpeg",
      alt: "Habitación principal antes",
      titulo: "Habitación Principal - ANTES",
    },
    {
      id: 10,
      src: "/antes/antes10.jpeg",
      alt: "Habitación principal antes",
      titulo: "Habitación Principal - ANTES",
    },
    {
      id: 11,
      src: "/antes/antes11.jpeg",
      alt: "Habitación principal antes",
      titulo: "Habitación Principal - ANTES",
    },
    {
      id: 12,
      src: "/antes/antes12.jpeg",
      alt: "Habitación principal antes",
      titulo: "Habitación Principal - ANTES",
    }
    // Puedes agregar más imágenes aquí
  ];

  return (
    <div className={styles.gadgetContainer}>
      <h2 className={styles.gadgetTitle}>Galería</h2>
      <p>Conoce más sobre nuestros trabajos realizados.</p>
      <p className={styles.gadgetSubtitle}>Antes:</p>

      <div className={styles.gadgetGrid}>
        {imagenes.map((item) => (
          <div key={item.id} className={styles.gadgetCard}>
            <div className={styles.imageContainer}>
              <Image
                src={item.src}
                alt={item.alt}
                width={50}
                height={50}
                className={styles.gadgetImage}
                layout="responsive"
              />
              <div className={styles.overlay}>
                <span className={styles.productTitle}>{item.titulo}</span>
              </div>
            </div>
            <div className={styles.gadgetInfo}>
              <p className={styles.description}>{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GadgetImagenes;

