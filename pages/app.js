import { useState, useEffect } from 'react';
import '../styles/global.css';
import Preloader from '../components/Preloader';
import ConsentBanner from '../components/ConsentBanner';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ConsentBanner /> {/* Mostrar SIEMPRE sin importar si carga el resto */}
      {loading ? <Preloader /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;



