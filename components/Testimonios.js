import React, { useState, useEffect } from 'react';
import styles from '../styles/Testimonios.module.css';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Testimonios = () => {
  const testimonios = [
    {
      id: 1,
      nombre: "Javier Martinez",
      texto: "He recurrido a IntegraClean en varias ocasiones y siempre he quedado satisfecho. El personal es eficiente y se nota que están bien entrenados. ¡Mis ventanas nunca han estado tan limpias!",
      rating: 5
    },
    {
      id: 2,
      nombre: "Ana Serrano",
      texto: "¡Estoy encantada con el servicio de Integra Clean! El equipo fue puntual, amable y dejó mi hogar impecable. Su atención al detalle superó todas mis expectativas. ¡Los recomiendo sin dudarlo!",
      rating: 5
    },
    {
      id: 3,
      nombre: "Carlos Rodríguez",
      texto: "Puntuales, profesionales y con atención al detalle. Llevo 2 años usando sus servicios mensuales y nunca me han defraudado.",
      rating: 5
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonio();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextTestimonio = () => {
    setTransition(true);
    setActiveIndex((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonio = () => {
    setTransition(true);
    setActiveIndex((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
  };

  const goToTestimonio = (index) => {
    setTransition(true);
    setActiveIndex(index);
  };

  // Calculate card positions based on screen size
  const getCardStyle = (index) => {
    const position = index - activeIndex;
    const isActive = position === 0;
    const isMobile = windowWidth <= 768;
    
    if (isMobile) {
      // Mobile - single card view
      return {
        transform: `translateX(${position * 100}%)`,
        opacity: isActive ? 1 : 0,
        zIndex: isActive ? 10 : 1,
        transition: transition ? 'all 0.5s ease-in-out' : 'none',
      };
    } else {
      // Desktop - show adjacent cards
      const visibleRange = 1; // Show 1 card on each side
      const isVisible = Math.abs(position) <= visibleRange;
      
      return {
        transform: `translateX(${position * 90}%)`,
        opacity: isVisible ? (isActive ? 1 : 0.6) : 0,
        zIndex: isActive ? 10 : 5 - Math.abs(position),
        transition: transition ? 'all 0.5s ease-in-out' : 'none',
        scale: isActive ? '1' : '0.9',
        pointerEvents: isVisible ? 'auto' : 'none',
      };
    }
  };

  return (
    <section className={styles.testimoniosSection} aria-label="OPINIONES DE CLIENTES">
      <div className={styles.container}>
        <h2 className={styles.tituloSeccion}>LO QUE OPINAN NUESTROS CLIENTES</h2>
        
        <div className={styles.carruselWrapper}>
          <button 
            onClick={prevTestimonio} 
            className={styles.navButton} 
            aria-label="Testimonio anterior"
          >
            <ChevronLeft fontSize="large" />
          </button>
          
          <div className={styles.carruselContainer}>
            <div className={styles.carruselTrack}>
              {testimonios.map((testimonio, index) => (
                <div 
                  key={testimonio.id}
                  className={`${styles.testimonioCard} ${
                    index === activeIndex ? styles.active : styles.inactive
                  }`}
                  style={getCardStyle(index)}
                  aria-hidden={index !== activeIndex}
                  onClick={() => !(index === activeIndex) && goToTestimonio(index)}
                >
                  <div className={styles.contenidoTestimonio}>
                    <p className={styles.textoTestimonio}>"{testimonio.texto}"</p>
                    <div className={styles.firmaTestimonio}>
                      <span className={styles.nombreCliente}>{testimonio.nombre}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextTestimonio} 
            className={styles.navButton} 
            aria-label="Siguiente testimonio"
          >
            <ChevronRight fontSize="large" />
          </button>
        </div>

        <div className={styles.puntosNavegacion}>
          {testimonios.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonio(index)}
              className={`${styles.punto} ${
                index === activeIndex ? styles.active : ''
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
