import Head from "next/head";
import Header from "./Headers";
import Footer from "./Footer";
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Head>
        <title>Integra Clean</title>
        <meta name="description" content="Professional cleaning services" />
        
        {/* Favicon básico - formato .ico */}
        <link rel="icon" href="/favicon.png" />
        
        {/* Favicon para dispositivos Apple */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Favicons modernos en PNG */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon" />
        
        {/* Manifest para PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Color de tema para navegadores móviles */}
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Header />

      <main style={{ marginTop: "150px", minHeight: "70vh" }}>
        {children}
        <WhatsAppButton />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;