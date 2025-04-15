import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Header = ({ titleHero, isSingle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo ajustado */}
        <div className={styles.logo}>
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/clean.png"
                alt="Logo de Limpiezas Integrales"
                width={180}  // Tamaño reducido
                height={150}  // Proporción ajustable según tu logo
                priority
                className={styles.imagen}
              />
            </a>
          </Link>
        </div>

        {/* Menú hamburguesa */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          ☰
        </div>

        {/* Navegación */}
        <nav className={`${styles.navbar} ${menuOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            {[
              { href: "/servicios", label: "nuestros servicios" },
              { href: "/quienes-somos", label: "Sobre nosotros" },
              { href: "/galeria", label: "Galería" },
              { href: "https://sites.google.com/view/integraclean/blog", label: "Blog", target: "_blank" },
              { href: "/contacto", label: "Contacto" },
            ].map(({ href, label, target }) => (
              <li key={href}>
                <Link href={href} legacyBehavior>
                  <a
                    className={href === "/" ? "active" : ""}
                    onClick={() => setMenuOpen(false)}
                    {...(target ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

