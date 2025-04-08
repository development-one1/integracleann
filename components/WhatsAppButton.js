import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from '../styles/WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = "+34688668231";
  const defaultMessage = "¡Hola! 👋 Estoy interesado/a en sus servicios. 🧹✨ ¿Podrían brindarme más información? 📩 ¡Gracias! 😊";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={styles.whatsappContainer}>
      <button className={styles.whatsappButton} onClick={handleClick}>
        <FaWhatsapp className={styles.icon} size={28} />
      </button>
      <div className={styles.liveMessage}>Atención en vivo 💬</div>
    </div>
  );
};

export default WhatsAppButton;