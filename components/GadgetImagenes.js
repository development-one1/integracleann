import React from "react";
import Image from "next/image";
import styles from "../styles/Gadget.module.css";

const GadgetImagenes = () => {
  const imagenesAntes = [
    {
      id: 1,
      src: "/antes/antes1.jpeg",
      alt: "Cocina antes",
    },
    {
      id: 2,
      src: "/despues/despues1.jpeg",
      alt: "Comedor antes",
    },
    {
      id: 3,
      src: "/antes/antes2.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 4,
      src: "/despues/despues2.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 5,
      src: "/antes/antes3.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 6,
      src: "/despues/despues3.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 7,
      src: "/antes/antes4.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 8,
      src: "/despues/despues4.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 9,
      src: "/antes/antes5.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 10,
      src: "/despues/despues5.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 11,
      src: "/antes/antes6.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 12,
      src: "/despues/despues6.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 13,
      src: "/antes/antes7.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 14,
      src: "/despues/despues7.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 15,
      src: "/antes/antes8.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 16,
      src: "/despues/despues8.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 17,
      src: "/antes/antes9.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 18,
      src: "/despues/despues9.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 19,
      src: "/antes/antes10.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 20,
      src: "/despues/despues10.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 21,
      src: "/antes/antes11.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 22,
      src: "/despues/despues11.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 23,
      src: "/antes/antes12.jpeg",
      alt: "Habitación individual antes",
    },
    {
      id: 24,
      src: "/despues/despues12.jpeg",
      alt: "Habitación individual antes",
    },
  ];

  return (
    <div className={styles.gadgetContainer}>
      <h2 className={styles.gadgetTitle}>Galería</h2>
      <p style={{ textAlign: "center" }}>
        Conoce más sobre nuestros trabajos realizados.
      </p>

      <p className={styles.gadgetSubtitle}>Antes y después: </p>
      <div className={styles.gadgetGrid}>
        {imagenesAntes.map((item) => (
          <div key={item.id} className={styles.gadgetCard}>
            <div className={styles.imageContainer}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {item.titulo && (
                <div className={styles.overlay}>
                  <span className={styles.productTitle}>{item.titulo}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GadgetImagenes;


