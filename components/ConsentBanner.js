import { useState, useEffect } from 'react';

const ConsentBanner = () => {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    try {
      const accepted = window.localStorage.getItem('cookies-accepted');
      console.log('Cookies acceptance status:', accepted);
      
      if (accepted === null) {
        setShow(true);
      }
    } catch (e) {
      console.error('LocalStorage error, showing banner by default', e);
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      window.localStorage.setItem('cookies-accepted', 'true');
    } catch (e) {
      console.error('Failed to set localStorage', e);
    }
    setShow(false);
  };

  const handleReject = () => {
    try {
      window.localStorage.setItem('cookies-accepted', 'false');
    } catch (e) {
      console.error('Failed to set localStorage', e);
    }
    setShow(false);
  };

  if (!mounted || !show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#2b373b',
      color: '#fff',
      padding: '1rem',
      textAlign: 'center',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      <span>Usamos cookies para mejorar tu experiencia.</span>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={handleAccept}
          style={{
            background: '#4CAF50',
            color: 'white',
            padding: '6px 12px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Aceptar
        </button>
        <button
          onClick={handleReject}
          style={{
            background: '#f44336',
            color: 'white',
            padding: '6px 12px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;