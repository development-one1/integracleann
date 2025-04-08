import React from 'react';
import styles from '../styles/PQRForm.module.css';
import { FiUser, FiMail, FiPhone, FiFileText, FiSend } from 'react-icons/fi';

const PQRForm = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.headerSection}>
        <h1>Contáctanos</h1>
        <p className={styles.introText}>Estamos aquí para ayudarte. Envíanos tus PQR y te responderemos pronto.</p>
      </div>

      <div className={styles.formContainer}>
        <form
          action="https://formsubmit.co/mariaelena.zamora@gmail.com"
          method="POST"
          className={styles.form}
        >
          {/* Puedes ocultar el captcha de Formsubmit */}
          <input type="hidden" name="_captcha" value="false" />

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="nombre"><FiUser /> Nombre completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ej: Juan Pérez"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email"><FiMail /> Correo electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ej: ejemplo@dominio.com"
                required
              />
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="telefono"><FiPhone /> Teléfono *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Ej: 3028120808"
                required
              />
              <span className={styles.hint}>Mínimo 7 dígitos</span>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="asunto"><FiFileText /> Asunto *</label>
              <div className={styles.asuntoContainer}>
                <select
                  id="asunto"
                  name="asunto"
                  className={styles.selectInput}
                  required
                >
                  <option value="servicio ineficiente">Servicio ineficiente</option>
                  <option value="solicitud información">Solicitud de información</option>
                  <option value="reclamo">Reclamo</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="otro">Otro</option>
                </select>
                <div className={styles.selectArrow}></div>
              </div>
            </div>
          </div>

          <div className={styles.textareaGroup}>
            <label htmlFor="mensaje">Describe tu petición aquí *</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Por favor describe detalladamente tu consulta..."
              rows="5"
              required
            />
          </div>

          <div className={styles.footerNote}>
            <p>Revisaremos tu mensaje y te responderemos pronto.</p>
          </div>

          <button type="submit" className={styles.submitButton}>
            <FiSend /> Enviar 
          </button>
        </form>
      </div>
    </div>
  );
};

export default PQRForm;
