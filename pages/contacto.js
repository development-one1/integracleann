import Layout from '../components/Layout';
import PQRForm from '../components/PQRForm';
import styles from '../styles/PQRForm.module.css';

const Contacto = () => {
  return (
    <Layout title="Contacto | IntegraClean" description="Formulario de contacto para PQR">
      <div className={styles.contactPage}>
        <div className={styles.heroSection}>
          
         
        </div>
        
        <div className={styles.formContainer}>
          <PQRForm />
        </div>
        
        <div className={styles.infoSection}>
          <p className={styles.responseNote}>
            
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;