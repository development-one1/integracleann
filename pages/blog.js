// pages/blog.js

import { useEffect, useState } from 'react';
import Layout from "../components/Layout";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Datos estáticos simulados
    const posts = [
      {
        slug: "primer-post",
        title: "Mi Primer Post",
        content: "<p>Este es el contenido del primer post. ¡Bienvenido a mi blog!</p>",
      },
      {
        slug: "segundo-post",
        title: "Otro Post Interesante",
        content: "<p>Contenido del segundo post. Aquí hablamos de cosas más profundas.</p>",
      },
    ];

    setBlogs(posts);
  }, []);

  return (
    <Layout>
      <h5>Esto es blog</h5>
      {blogs.map((blog) => (
        <div key={blog.slug}>
          <h2>{blog.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      ))}
    </Layout>
  );
}

