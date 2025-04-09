import { FaShieldAlt, FaHeadset, FaCalendarCheck, FaStar } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Comentarios from "./Comentarios";
import styles from '../styles/index.module.css';

const Home = () => {
  const videoRef = useRef(null);

  // Componente de Cookies
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
        <button
          onClick={acceptCookies}
          className={styles.cookieButton}
        >
          Aceptar
        </button>
      </div>
    );
  };

  // Configuración del Video
  useEffect(() => {
    const video = videoRef.current;

    const handleVideoLoad = () => {
      video.play()
        .catch(error => {
          video.muted = true;
          video.play().catch(e => console.log("No se pudo reproducir el video:", e));
        });
    };

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
    }

    video.addEventListener('loadedmetadata', handleVideoLoad);
    
    return () => {
      video.removeEventListener('loadedmetadata', handleVideoLoad);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Banner de Cookies */}
      <CookieBanner />

      {/* Sección Hero con Video */}
      <div className={styles.heroSection}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className={styles.heroVideo}
        >
          <source
            src="https://videocdn.cdnpk.net/videos/8e9e6d84-875f-4d77-99f3-286f30c52338/horizontal/previews/clear/large.mp4?token=exp=1743996054~hmac=81f9098fe727a33a4328201245b96e84e5e2ded563f37237644bdeb168dc9256"
            type="video/mp4"
          />
          <p className={styles.videoFallback}>
            Tu navegador no soporta videos HTML5
          </p>
        </video>

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
        <h2 className={styles.benefitsHeading}>
          🏆 ¿Por qué elegirnos? 🏆
        </h2>

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
