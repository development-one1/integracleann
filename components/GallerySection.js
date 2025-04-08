import React from 'react';

const GaleriaSection = () => {
  // Imágenes profesionales de limpieza (URLs de ejemplo - reemplazar con las definitivas)
  const servicios = [
    {
      id: 1,
      titulo: "Limpieza de Pisos Vacacionales",
      descripcion: "Prepara tu piso vacacional para la próxima reserva. Limpieza a fondo, rápida y eficiente, para que cada huésped disfrute de un espacio reluciente.",
      imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      destacado: "Listo para nuevos huéspedes"
    },
    {
      id: 2,
      titulo: "Limpieza de Portales",
      descripcion: "Portales limpios y relucientes para una primera impresión impecable. Confía en nuestros expertos para mantener la entrada de tu edificio en perfectas condiciones.",
      imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      destacado: "Primera impresión perfecta"
    },
    {
      id: 3,
      titulo: "Limpieza de Oficinas",
      descripcion: "Una oficina limpia impulsa la productividad. Nos encargamos de cada detalle, desde el escritorio hasta las zonas comunes, para un ambiente laboral agradable.",
      imagen: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      destacado: "Ambiente laboral saludable"
    },
    {
      id: 4,
      titulo: "Limpieza Doméstica",
      descripcion: "Relájate en casa sin preocuparte por la limpieza. Ofrecemos un servicio personalizado para que disfrutes de un hogar limpio y acogedor siempre.",
      imagen: "https://img.freepik.com/foto-gratis/servicio-limpieza-profesional-persona-que-limpia-ventana-oficina_23-2150520611.jpg?t=st=1743974933~exp=1743978533~hmac=88f33aa349e8a0a3569f16477e5e8dc4cf1742afdc21b415f07f5602c85f5fea&w=996",
      destacado: "Hogar impecable sin esfuerzo"
    },
    {
      id: 5,
      titulo: "Limpieza de Comercios",
      descripcion: "Tu negocio es tu carta de presentación. Permite que nuestros profesionales mantengan tu comercio reluciente y atractivo para tus clientes.",
      imagen: "https://img.freepik.com/fotos-premium/trabajador-asiatico-limpieza-arena-lavado-pasarela-exterior_30478-3050.jpg?w=996",
      destacado: "Imagen comercial impecable"
    }
];

  return (
    <section style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h1 style={{
          color: '#2A5CAA',
          fontSize: '2.2rem',
          marginBottom: '0.5rem'
        }}>Nuestra Galería de Servicios</h1>
        <p style={{
          color: '#666',
          fontSize: '1.1rem'
        }}>Resultados profesionales que hacen la diferencia</p>
      </header>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {servicios.map((servicio) => (
          <article key={servicio.id} style={{
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            backgroundColor: 'white'
          }}>
            <div style={{
              height: '220px',
              overflow: 'hidden'
            }}>
              <img 
                src={servicio.imagen} 
                alt={`Servicio de ${servicio.titulo}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
            </div>
            <div style={{
              padding: '1.5rem'
            }}>
              <h2 style={{
                color: '#2A5CAA',
                fontSize: '1.3rem',
                margin: '0 0 0.8rem 0'
              }}>{servicio.titulo}</h2>
              <p style={{
                color: '#555',
                marginBottom: '1rem',
                lineHeight: '1.5'
              }}>{servicio.descripcion}</p>
              <div style={{
                background: '#f0f7ff',
                padding: '0.7rem',
                borderRadius: '4px',
                marginTop: '1rem'
              }}>
                <span style={{
                  color: '#2A5CAA',
                  fontWeight: '500'
                }}>✓ {servicio.destacado}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GaleriaSection;