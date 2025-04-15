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
