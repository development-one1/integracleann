import React, { useState, useEffect } from 'react';
import styles from '../styles/Testimonios.module.css';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const TestimoniosCarrusel = () => {
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
              {testimonios.map((testimonio, index) => {
                // Calcula la posición relativa para mostrar varios testimonios
                const position = index - activeIndex;
                const isActive = position === 0;
                const isVisible = Math.abs(position) <= 1; // Muestra el activo y 1 adyacente

                return (
                  <div 
                    key={testimonio.id}
                    className={`${styles.testimonioCard} ${
                      isActive ? styles.active : styles.inactive
                    }`}
                    style={{
                      transform: `translateX(${position * 100}%)`,
                      opacity: isVisible ? 1 : 0,
                      zIndex: isActive ? 10 : 1,
                      transition: transition ? 'all 0.5s ease-in-out' : 'none',
                      scale: isActive ? '1' : '0.9'
                    }}
                    aria-hidden={!isVisible}
                  >
                    <div className={styles.contenidoTestimonio}>
                      <p className={styles.textoTestimonio}>"{testimonio.texto}"</p>
                      <div className={styles.firmaTestimonio}>
                        <span className={styles.nombreCliente}>{testimonio.nombre}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
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

export default TestimoniosCarrusel;
