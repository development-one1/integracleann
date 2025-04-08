import { FaShieldAlt, FaHeadset, FaCalendarCheck, FaStar } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Comentarios from "./Comentarios";

const Home = () => {
  const videoRef = useRef(null);

  // 1. Componente de Cookies
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
      <div style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: '#2b373b',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center',
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <span>Usamos cookies para mejorar tu experiencia.</span>
        <button
          onClick={acceptCookies}
          style={{
            background: '#fff',
            color: '#000',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Aceptar
        </button>
      </div>
    );
  };

  // 2. Configuración del Video
  useEffect(() => {
    const video = videoRef.current;

    const handleVideoLoad = () => {
      video.play()
        .catch(error => {
          // Fallback para navegadores que bloquean autoplay
          video.muted = true;
          video.play().catch(e => console.log("No se pudo reproducir el video:", e));
        });
    };

    // Configuración especial para iOS/Safari
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
    }

    video.addEventListener('loadedmetadata', handleVideoLoad);
    
    return () => {
      video.removeEventListener('loadedmetadata', handleVideoLoad);
    };
  }, []);

  // 3. Animaciones CSS
  const styles = `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    .float { animation: float 3s ease-in-out infinite; }
    .pulse { animation: pulse 2s ease infinite; }
    .rotate { animation: rotate 4s linear infinite; }
    .bounce { animation: bounce 1.5s ease infinite; }
  `;

  // 4. Renderizado Principal
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', position: 'relative' }}>
      <style>{styles}</style>
      
      {/* Banner de Cookies */}
      <CookieBanner />

      {/* Sección Hero con Video */}
      <div style={{
        position: 'relative',
        height: '90vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '0 2px 4px rgba(0,0,0,0.7)'
      }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: -1,
            backgroundColor: '#000'
          }}
        >
          <source
            src="https://videocdn.cdnpk.net/videos/8e9e6d84-875f-4d77-99f3-286f30c52338/horizontal/previews/clear/large.mp4?token=exp=1743996054~hmac=81f9098fe727a33a4328201245b96e84e5e2ded563f37237644bdeb168dc9256"
            type="video/mp4"
          />
          <p style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white'
          }}>
            Tu navegador no soporta videos HTML5
          </p>
        </video>

        <div style={{ textAlign: 'center', zIndex: 1, padding: '0 20px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Integra Clean</h1>
          <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
            Limpieza profesional y compromiso garantizado
          </p>
        </div>
      </div>

      {/* Resto del contenido */}
      <div style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#f5f9ff' }}>
        <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#2A5CAA' }}>
          ✨ Ofrecemos los mejores servicios de limpieza ✨
        </p>
      </div>

      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px' }}>
          🏆 ¿Por qué elegirnos? 🏆
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {[
            { icon: <FaShieldAlt />, color: '#2A5CAA', title: 'Profesionales Certificados', text: 'Nuestro equipo está completamente capacitado y certificado.' },
            { icon: <FaHeadset />, color: '#4CAF50', title: 'Soporte 24/7', text: 'Servicio al cliente disponible en todo momento.' },
            { icon: <FaCalendarCheck />, color: '#FF9800', title: 'Horarios Flexibles', text: 'Nos adaptamos a tu horario y necesidades.' },
            { icon: <FaStar />, color: '#D32F2F', title: 'Satisfacción Garantizada', text: 'No paramos hasta que estés completamente satisfecho.' }
          ].map((item, index) => (
            <div key={index} style={{
              padding: '25px',
              borderRadius: '8px',
              backgroundColor: 'white',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div className={['float', 'pulse', 'rotate', 'bounce'][index]} style={{ 
                fontSize: '40px', 
                color: item.color 
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: '15px 0' }}>{item.title}</h3>
              <p style={{ color: '#666' }}>{item.text}</p>
            </div>
          ))}
        </div>
        
      </div>
      <Comentarios />
    </div>
  );
};

export default Home;