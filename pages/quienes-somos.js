import Layout from "../components/Layout";
import styles from "../styles/QuienesSomos.module.css";
import { useEffect, useState } from "react";

export default function quienessomos() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Evita el error de hidratación al montar la animación solo en el cliente
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>🧼 ¿Quiénes somos?</h2>
        <div className={styles.card}>
          {isClient && (
            <p className={`${styles.text} ${styles.typing}`}>
              🧼 Somos un equipo de profesionales apasionados por la limpieza y el mantenimiento...
            </p>
          )}

          <p className={styles.text}>
            📅 Con más de <strong>
              20 años de experiencia</strong>,
               trabajamos cada día con responsabilidad, respeto y dedicación para lograr objetivos en conjunto.
            <br />
            <br />
            <span className={styles.bubble}>💬</span> 
            Creemos en la comunicación clara, la confianza mutua y en construir relaciones duraderas con cada cliente.
            <br /><br />
            <span className={styles.sparkle}>✨</span> 
            Nuestro propósito es simple: ofrecer servicios de limpieza que marquen la diferencia y dejen huella positiva en cada espacio que tocamos.
          </p>
        </div>
      </div>
    </Layout>
  );
}


