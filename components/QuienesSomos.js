import React from "react";
import styles from "../styles/Compromiso.module.css";
import Image from "next/image"; // Importa el componente Image de Next.js

const QuienesSomos = () => {
  return (
    <div className={styles["qs-container"]}>
      <div className={styles["qs-content-wrapper"]}>
        {/* Columna de la imagen */}
        <div className={styles["qs-image-column"]}>
          <Image
            src="/compromiso.png" // Reemplaza con la ruta correcta de tu imagen
            alt="Equipo de profesionales"
            width={400} // Ajusta según necesites
            height={500} // Ajusta según necesites
            className={styles["qs-image"]}
          />
        </div>

        {/* Columna del contenido */}
        <div className={styles["qs-text-column"]}>
          <div className={styles["qs-subtitulo"]}>Quienes somos</div>
          <div className={styles["qs-titulo"]}>Compromiso y excelencia</div>
          
          <div className={styles["qs-texto"]}>
            Somos un equipo de profesionales comprometidos con los resultados de
            excelencia que nuestros clientes requieren, con más de 20 años de
            experiencia y un respeto absoluto por lograr metas en conjunto.
          </div>
          
          <div className={styles["qs-stats"]}>
            <div className={styles["qs-stat-item"]}>
              <div className={styles["qs-stat-number"]}>20+</div>
              <div className={styles["qs-stat-label"]}>Años de experiencia</div>
            </div>
            
            <div className={styles["qs-stat-item"]}>
              <div className={styles["qs-stat-number"]}>800+</div>
              <div className={styles["qs-stat-label"]}>Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
