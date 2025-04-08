import Layout from "../components/Layout";
import styles from "../styles/Mision.module.css";
import { Typewriter } from "react-simple-typewriter";

export default function Mision() {
  return (
    <Layout>
      <div className={styles.container}>
            <h2 className={styles.title}>
                <span className={styles.target}>🎯</span> 
                Nuestra Misión
            </h2>

        <div className={styles.card}>
          <p className={styles.text}>
            <strong>
              <Typewriter
                words={['En Integra Clean ofrecemos un servicio de limpieza profesional, confiable y cercano']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={40}
                deleteSpeed={30}
                delaySpeed={1000}
              />
              <span className={styles.broom}>🧹</span>
            </strong>
            <br /><br />
            Nos especializamos en propiedades vacacionales, comercios y comunidades 🏠.<br /><br />
            Nuestro equipo está formado y comprometido con resultados impecables 💼.<br /><br />
            Tu satisfacción es nuestra mayor prioridad 😊.
          </p>
        </div>
      </div>
    </Layout>
  );
}
