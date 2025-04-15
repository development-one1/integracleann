import React from "react";
import Image from "next/image";
import styles from "../styles/Gadget.module.css";

const GadgetImagenes = () => {
  const imagenesAntes = [
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
    },
  ];

  const imagenesDespues = [
    {
      id: 13,
      src: "/despues/despues1.jpeg",
      alt: "Cocina después",
      titulo: "Cocina - DESPUÉS",
    },
    {
      id: 14,
      src: "/despues/despues2.jpeg",
      alt: "Comedor después",
      titulo: "Comedor - DESPUÉS",
    },
    {
      id: 15,
      src: "/despues/despues3.jpeg",
      alt: "Cocina después",
      titulo: "Cocina - DESPUÉS",
    },
    {
      id: 16,
      src: "/despues/despues4.jpeg",
      alt: "Comedor después",
      titulo: "Comedor - DESPUÉS",
    },
    {
      id: 17,
      src: "/despues/despues5.jpeg",
      alt: "Comedor después",
      titulo: "Comedor - DESPUÉS",
    },
    {
      id: 18,
      src: "/despues/despues6.jpeg",
      alt: "Comedor después",
      titulo: "Comedor - DESPUÉS",
    },
    {
      id: 19,
      src: "/despues/despues7.jpeg",
      alt: "Cocina después",
      titulo: "Cocina - DESPUÉS",
    },
    {
      id: 20,
      src: "/despues/despues8.jpeg",
      alt: "Comedor después",
      titulo: "Comedor - DESPUÉS",
    },
    {
      id: 21,
      src: "/despues/despues9.jpeg",
      alt: "Comedor después",
      titulo: "Comedor - DESPUÉS",
    },
    {
      id: 22,
      src: "/despues/despues10.jpeg",
      alt: "Comedor después",
      titulo: "Comedor - DESPUÉS",
    }
    // Agrega más imágenes después aquí si las tienes...
  ];

  return (
    <div className={styles.gadgetContainer}>
      <h2 className={styles.gadgetTitle}>Galería</h2>
      <p>Conoce más sobre nuestros trabajos realizados.</p>

      <p className={styles.gadgetSubtitle}>Antes:</p>
      <div className={styles.gadgetGrid}>
        {imagenesAntes.map((item) => (
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
          </div>
        ))}
      </div>

      <p className={styles.gadgetSubtitle}>Después:</p>
      <div className={styles.gadgetGrid}>
        {imagenesDespues.map((item) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default GadgetImagenes;


