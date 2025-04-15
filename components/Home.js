
// Importaciones de Material-UI
import { 
  ReceiptLong as ReceiptLongIcon,
  CleanHands as CleanHandsIcon,
  Diversity3 as Diversity3Icon 
} from '@mui/icons-material';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import Comentarios from "./Comentarios";
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
          <div className={styles.blueOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Limpieza que inspira confianza</h1>
          <p className={styles.heroSubtitle}>
            Limpieza profesional y compromiso garantizado
          </p>
        </div>
      </div>

      {/* Sección de Beneficios */}
      <div className={styles.benefitsGrid}>
        {/* Tarjeta 1 - Presupuesto */}
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <ReceiptLongIcon fontSize="large" />
          </div>
          <h3 className={styles.benefitTitle}>Presupuesto <br/>Personalizado</h3>
          <p className={styles.benefitText}>
            Ofrecemos soluciones de limpieza a medida, que se ajustan a tus necesidades y presupuesto.
          </p>
          <button 
            onClick={() => manejarSolicitudCotizacion(1)}
            className={styles.botonPresupuesto}
            aria-label="Solicitar presupuesto personalizado"
          >
            Solicitar Presupuesto
          </button>
        </div>

        {/* Tarjeta 2 - Calidad */}
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <CleanHandsIcon fontSize="large" />
          </div>
          <h3 className={styles.benefitTitle}>Calidad de Servicio</h3>
          <p className={styles.benefitText}>
            La calidad de servicio de IntegraClean proviene de años de experiencia y un enfoque profesional en cada detalle.
          </p>
          <button 
            onClick={() => manejarSolicitudCotizacion(1)}
            className={styles.botonPresupuesto}
            aria-label="Solicitar información sobre calidad de servicio"
          >
            Solicitar Presupuesto
          </button>
        </div>

        {/* Tarjeta 3 - Equipo */}
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <Diversity3Icon fontSize="large" />
          </div>
          <h3 className={styles.benefitTitle}>Equipo Experto</h3>
          <p className={styles.benefitText}>
            Nuestra experiencia se potencia gracias a un equipo humano comprometido y altamente capacitado.
          </p>
          <button 
            onClick={() => manejarSolicitudCotizacion(1)}
            className={styles.botonPresupuesto}
            aria-label="Solicitar información sobre nuestro equipo"
          >
            Solicitar Presupuesto
          </button>
        </div>
      </div>

      {/* Sección: Compromiso y excelencia */}
      <QuienesSomos />

      {/* Sección de Comentarios */}
      <Comentarios />
    </div>
  );
};

export default Home;
