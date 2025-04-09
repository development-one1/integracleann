import { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import styles from "../styles/blog.module.css";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const posts = [
      {
        slug: "consejos-viaje-costa",
        title: "5 Consejos para Disfrutar de la Costa al Máximo",
        content: "<p>Planifica tu viaje con tiempo, usa protección solar, y no olvides hidratarte. También es ideal llevar un sombrero y ropa fresca.</p>",
        date: "08 Abril 2025",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },
      {
        slug: "mejores-comidas-tipicas",
        title: "Comidas Típicas que Debes Probar en tu Próxima Escapada",
        content: "<p>No puedes irte sin probar los mariscos frescos, el ceviche local y las frutas tropicales de temporada. ¡Una delicia para el paladar!</p>",
        date: "06 Abril 2025",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
      },
      {
        slug: "que-llevar-a-la-playa",
        title: "¿Qué Llevar a la Playa? La Lista Definitiva",
        content: "<p>Toalla, protector solar, gafas de sol, agua, snacks saludables y un buen libro. ¡Prepárate para un día perfecto!</p>",
        date: "03 Abril 2025",
        image: "https://img.freepik.com/foto-gratis/vision-elementos-esenciales-viajes-aventuras_23-2151383064.jpg?t=st=1744172675~exp=1744176275~hmac=423abdb3823edcd4993d0b3d31819984e4af294f7ad978b13ba8afa5fb56fb9b&w=996",
      },
      {
        slug: "beneficios-del-mar",
        title: "Los Beneficios del Mar para tu Salud",
        content: "<p>El mar no solo relaja, también mejora la respiración, ayuda a la circulación y reduce el estrés. ¡Tu cuerpo lo agradece!</p>",
        date: "01 Abril 2025",
        image: "https://st4.depositphotos.com/11731569/28142/i/600/depositphotos_281425906-stock-photo-view-on-iguana-on-a.jpg",
      },
      {
        slug: "actividades-en-la-playa",
        title: "Actividades en la Playa para Toda la Familia",
        content: "<p>Desde hacer castillos de arena hasta jugar vóley o hacer snorkel, hay opciones para todos los gustos y edades.</p>",
        date: "30 Marzo 2025",
        image: "https://img.freepik.com/foto-gratis/familia-joven-feliz-nino-que-divierte-playa-familia-alegre_8353-8337.jpg?ga=GA1.1.2029198580.1743974822&semt=ais_hybrid&w=740",
      },
    ];
    setBlogs(posts);
  }, []);

  return (
    <Layout>
      <div className={styles.blogContainer}>
        <h1 className={styles.titulo}>Blog</h1>
        <p className={styles.descripcion}>Descubre artículos, novedades y tips útiles.</p>

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <div key={blog.slug} className={styles.card}>
              <img src={blog.image} alt={blog.title} className={styles.image} />
              <div className={styles.cardContent}>
                <h2>{blog.title}</h2>
                <p className={styles.fecha}>{blog.date}</p>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
