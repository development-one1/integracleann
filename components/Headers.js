import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Header = ({ titleHero, isSingle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" legacyBehavior>
            <a>
              <Image
                className={styles.imagen}
                src="/clean.png"
                alt="Logo de Limpiezas Integrales"
                width={150}
                height={100}
                priority
              />
            </a>
          </Link>
        </div>

        {/* Hamburguesa solo en móvil */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <nav className={`${styles.navbar} ${menuOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            {[
              // { href: "/", label: "Inicio" },
              { href: "/servicios", label: "Servicios" },
              { href: "/quienes-somos", label: "Quiénes Somos" },
              { href: "/mision", label: "Nuestra Misión" },
              { href: "/galeria", label: "Galería" },
              { href: "/blog", label: "Blog" },
              { href: "/contacto", label: "Contacto" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} legacyBehavior>
                  <a
                    className={href === "/" ? "active" : ""}
                    onClick={() => setMenuOpen(false)} // Cierra menú al hacer clic
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

