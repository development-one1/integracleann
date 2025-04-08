import styles from '../styles/Servicios.module.css';

const TarjetaServicio = ({ servicio, onSolicitarCotizacion }) => {
  return (
    <div className={styles.servicioCard}>
      <div className={styles.icono}>{servicio.icono}</div>
      <h2>{servicio.titulo}</h2>
      <p>{servicio.descripcion}</p>
      
      <ul className={styles.listaCaracteristicas}>
        {servicio.caracteristicas.map((item, index) => (
          <li key={index}>
            <span className={styles.checkmark}>✓</span> {item}
          </li>
        ))}
      </ul>
      
      <button 
        className={styles.botonCotizar}
        onClick={() => onSolicitarCotizacion(servicio.id)}
      >
        Solicitar cotización
      </button>
    </div>
  );
};

export default TarjetaServicio;