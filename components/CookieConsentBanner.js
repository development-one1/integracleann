// components/CookieConsentBanner.js
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      enableDeclineButton
      cookieName="userConsent"
      style={{ background: "#2B373B", fontSize: "14px", zIndex: 9999 }}
      buttonStyle={{
        backgroundColor: "#fff",
        color: "#000",
        fontSize: "13px",
        marginLeft: "10px",
      }}
      declineButtonStyle={{
        backgroundColor: "#444",
        color: "#fff",
        fontSize: "13px",
      }}
      expires={365}
    >
      Este sitio utiliza cookies para mejorar tu experiencia.{" "}
      <Link href="/cookies">
        <a style={{ color: "#4e9ef3" }}>Leer más</a>
      </Link>
    </CookieConsent>
  );
};

export default CookieConsentBanner;

