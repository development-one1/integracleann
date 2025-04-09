import { FaShieldAlt, FaHeadset, FaCalendarCheck, FaStar } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // ✅ Asegúrate de importar esto
import Comentarios from "./Comentarios";
import styles from '../styles/index.module.css';

const Home = () => {
  const videoRef = useRef(null);

  const CookieBanner = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      const accepted = localStorage.getItem('cookies-accepted');
      if (!accepted) setShow(true);
    }, []);

    const acceptCookies = () => {
      localStorage.setItem('cookies-accepted', 'true');
      setShow(false);
    };

    if (!show) return null;

    return (
      <div className={styles.cookieBanner}>
        <span>Usamos cookies para mejorar tu experiencia.</span>
        <button onClick={acceptCookies} className={styles.cookieButton}>
          Aceptar
        </button>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <CookieBanner />

      {/* Sección Hero con fondo local */}
      <div className={styles.heroSection}>
  <div className={styles.imageWrapper}>
    <Image 
      src="/people.png"
      alt="Fondo de Limpiezas Integrales"
      fill
      priority
      style={{ objectFit: 'cover' }}
    />
    <div className={styles.blueOverlay}></div> {/* 👉 Capa animada */}
  </div>
  <div className={styles.heroContent}>
    <h1 className={styles.heroTitle}>Integra Clean</h1>
    <p className={styles.heroSubtitle}>
      Limpieza profesional y compromiso garantizado
    </p>
  </div>
</div>

      {/* Sección de Servicios */}
      <div className={styles.servicesSection}>
        <p className={styles.servicesTitle}>
          ✨ Ofrecemos los mejores servicios de limpieza ✨
        </p>
      </div>

      {/* Sección de Beneficios */}
      <div className={styles.benefitsSection}>
        <h2 className={styles.benefitsHeading}>🏆 ¿Por qué elegirnos? 🏆</h2>
        <div className={styles.benefitsGrid}>
          {[
            {
              icon: <FaShieldAlt />,
              color: '#2A5CAA',
              title: 'Profesionales Certificados',
              text: 'Nuestro equipo está completamente capacitado y certificado.',
              animation: 'float'
            },
            {
              icon: <FaHeadset />,
              color: '#4CAF50',
              title: 'Soporte 24/7',
              text: 'Servicio al cliente disponible en todo momento.',
              animation: 'pulse'
            },
            {
              icon: <FaCalendarCheck />,
              color: '#0abdd1',
              title: 'Horarios Flexibles',
              text: 'Nos adaptamos a tu horario y necesidades.',
              animation: 'rotate'
            },
            {
              icon: <FaStar />,
              color: '#ff9800',
              title: 'Satisfacción Garantizada',
              text: 'No paramos hasta que estés completamente satisfecho.',
              animation: 'bounce'
            }
          ].map((item, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={`${styles.benefitIcon} ${item.animation}`} style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3 className={styles.benefitTitle}>{item.title}</h3>
              <p className={styles.benefitText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Comentarios />
    </div>
  );
};

export default Home;

  );
};

export default Home;
