
// Importaciones de Material-UI
import { 
  ReceiptLong as ReceiptLongIcon,
  CleanHands as CleanHandsIcon,
  Diversity3 as Diversity3Icon 
} from '@mui/icons-material';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import Testimonios from "./Testimonios";
import styles from '../styles/index.module.css';
import QuienesSomos from './QuienesSomos';

const Home = () => {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const emailDestino = "mariaelena.zamora@gmail.com";

  const servicios = [
    { id: 1, titulo: "Presupuesto Personalizado" },
  ];

  const manejarSolicitudCotizacion = (servicioId) => {
    const servicio = servicios.find(s => s.id === servicioId);
    setServicioSeleccionado(servicioId);

    const subject = `Cotización para servicio: ${servicio.titulo}`;
    const body = `Hola,\n\nEstoy interesado/a en el servicio de ${servicio.titulo}.\n\nPor favor, envíenme información sobre:\n- Precios\n- Disponibilidad\n- Detalles del servicio\n\nMis datos de contacto son:\nNombre: \nTeléfono: \n\nGracias.`;

    window.location.href = `mailto:${emailDestino}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
          aria-label="Aceptar cookies"
        >
          Aceptar
        </button>
      </div>
    );
  };

  return (
    <main className={styles.container}> {/* Cambiado a <main> para semántica HTML5 */}
      <CookieBanner />

      {/* ==================== SECCIÓN HERO ==================== */}
      <section className={styles.heroSection} aria-label="PRESENTACIÓN PRINCIPAL">
        <div className={styles.imageWrapper}>
          <Image 
            src="/people.png"
            alt="Fondo de Limpiezas Integrales"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.blueOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>LIMPEZA QUE INSPIRA CONFIANZA</h1>
          <p className={styles.heroSubtitle}>
            LIMPIEZA PROFESIONAL Y COMPROMISO GARANTIZADO
          </p>
        </div>
      </section>

      {/* ==================== SECCIÓN BENEFICIOS ==================== */}
      <section className={styles.benefitsGrid} aria-label="NUESTROS BENEFICIOS">
        {/* Tarjeta 1 - Presupuesto */}
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <ReceiptLongIcon fontSize="large" />
          </div>
          <h3 className={styles.benefitTitle}>PRESUPUESTO <br/>PERSONALIZADO</h3>
          <p className={styles.benefitText}>
            OFRECEMOS SOLUCIONES DE LIMPIEZA A MEDIDA, QUE SE AJUSTAN A TUS NECESIDADES Y PRESUPUESTO.
          </p>
          <button 
            onClick={() => manejarSolicitudCotizacion(1)}
            className={styles.botonPresupuesto}
            aria-label="SOLICITAR PRESUPUESTO PERSONALIZADO"
          >
            Solicitar Presupuesto
          </button>
        </div>

        {/* Tarjeta 2 - Calidad */}
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <CleanHandsIcon fontSize="large" />
          </div>
          <h3 className={styles.benefitTitle}>CALIDAD DE SERVICIO</h3>
          <p className={styles.benefitText}>
            LA CALIDAD DE SERVICIO DE INTEGRACLEAN PROVIENE DE AÑOS DE EXPERIENCIA Y UN ENFOQUE PROFESIONAL EN CADA DETALLE.
          </p>
          <button 
            onClick={() => manejarSolicitudCotizacion(1)}
            className={styles.botonPresupuesto}
            aria-label="SOLICITAR INFORMACIÓN SOBRE CALIDAD DE SERVICIO"
          >
            Solicitar Presupuesto
          </button>
        </div>

        {/* Tarjeta 3 - Equipo */}
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <Diversity3Icon fontSize="large" />
          </div>
          <h3 className={styles.benefitTitle}>EQUIPO EXPERTO</h3>
          <p className={styles.benefitText}>
            Nuestra experiencia se potencia gracias a un equipo humano comprometido y altamente capacitado.
          </p>
          <button 
            onClick={() => manejarSolicitudCotizacion(1)}
            className={styles.botonPresupuesto}
            aria-label="SOLICITAR INFORMACIÓN SOBRE NUESTRO EQUIPO"
          >
            Solicitar Presupuesto
          </button>
        </div>
      </section>

      {/* ==================== SECCIÓN QUIÉNES SOMOS ==================== */}
      <section aria-label="SOBRE NOSOTROS">
        <QuienesSomos />
      </section>

      {/* ==================== SECCIÓN COMENTARIOS ==================== */}
      <section aria-label="OPINIONES DE CLIENTES">
        <Testimonios />
      </section>
    </main>
  );
};

export default Home;
