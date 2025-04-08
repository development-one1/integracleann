import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" style={{ background: "#2c3e50", color: "#fff", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        
        <div style={{ flex: "1 1 250px", marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>🧼 Integra Clean</h3>
          <p>Cuidamos cada espacio como si fuera nuestro 🧽✨<br /> Comprometidos con la limpieza, la calidad y tu tranquilidad.</p>
        </div>

        <div style={{ flex: "1 1 250px", marginBottom: "20px" }}>
          <h4>📍 Contacto</h4>
          <p>
            <FaPhoneAlt /> 
            <a 
              href="tel:+34688668231" 
              style={{ color: "#fff", textDecoration: "none", marginLeft: "8px" }}
            >
              +34 688 66 82 31
            </a>
          </p>
          <p>
            <FaEnvelope /> 
            <a 
              href="mailto:servicios@integraclean.es?subject=Consulta%20sobre%20servicios&body=Buenos%20días,%20me%20interesa..."
              style={{ color: "#fff", textDecoration: "none", marginLeft: "8px" }}
            >
              contacto@integraclean.es
            </a>
          </p>
          <p>
            <FaMapMarkerAlt /> 
            <a
              href="https://www.google.com/maps/place/Valencia,+Spain/@39.4077643,-0.4315503,12z/data=!3m1!4b1!4m6!3m5!1s0xd604f4cf0efb06f:0xb4a351011f7f1d39!8m2!3d39.4699075!4d-0.3762881!16zL20vMGszcA"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "none", marginLeft: "8px" }}
            >
              Valencia, España
            </a>
          </p>
        </div>

        <div style={{ flex: "1 1 250px", marginBottom: "20px" }}>
          <h4>📲 Síguenos</h4>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

      </div>

      <div style={{ textAlign: "center", borderTop: "1px solid #ccc", paddingTop: "20px", marginTop: "20px" }}>
        © {new Date().getFullYear()} Integra Clean. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;