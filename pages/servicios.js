import Layout from "../components/Layout";
import TarjetaServicio from "../components/TarjetaServicio";
import styles from "../styles/Servicios.module.css";
import { useState } from "react";

const servicios = () => {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  // Correo específico configurado aquí
  const emailDestino = "mariaelena.zamora@gmail.com"; 

  const servicios = [
    {
      id: 1,
      icono: '🏖️',
      titulo: "Limpieza de Pisos Vacacionales",
      descripcion: "Prepara tu piso vacacional para la próxima reserva. Limpieza a fondo, rápida y eficiente, para que cada huésped disfrute de un espacio reluciente.",
      caracteristicas: [
        "Listo para nuevos huéspedes",
        "Limpieza profunda de todas las áreas",
        "Cambio de ropa de cama y toallas",
        "Revisión de amenities",
        "Control de inventario",
        "Atención a detalles específicos"
      ]
    },
    {
      id: 2,
      icono: '🏘️',
      titulo: "Limpieza de Portales",
      descripcion: "Portales limpios y relucientes para una primera impresión impecable. Confía en nuestros expertos para mantener la entrada de tu edificio en perfectas condiciones.",
      caracteristicas: [
        "Primera impresión perfecta",
        "Limpieza de accesos y escaleras",
        "Recogida de correo y paquetería",
        "Mantenimiento de áreas comunes",
        "Control de humedad y olores",
        "Tratamiento especial para superficies"
      ]
    },
    {
      id: 3,
      icono: '🏢',
      titulo: "Limpieza de Oficinas",
      descripcion: "Una oficina limpia impulsa la productividad. Nos encargamos de cada detalle, desde el escritorio hasta las zonas comunes, para un ambiente laboral agradable.",
      caracteristicas: [
        "Ambiente laboral saludable",
        "Limpieza diaria o semanal",
        "Tratamiento especial para pisos",
        "Gestión de residuos",
        "Desinfección de áreas clave",
        "Limpieza de equipos electrónicos"
      ]
    },
    {
      id: 4,
      icono: '🏠',
      titulo: "Limpieza Doméstica",
      descripcion: "Relájate en casa sin preocuparte por la limpieza. Ofrecemos un servicio personalizado para que disfrutes de un hogar limpio y acogedor siempre.",
      caracteristicas: [
        "Servicio personalizado",
        "Limpieza profunda o mantenimiento",
        "Productos ecológicos disponibles",
        "Flexibilidad de horarios",
        "Limpieza de armarios y closets",
        "Tratamiento especial para cocinas"
      ]
    },
    {
      id: 5,
      icono: '🛍️',
      titulo: "Limpieza de Comercios",
      descripcion: "Tu negocio es tu carta de presentación. Permite que nuestros profesionales mantengan tu comercio reluciente y atractivo para tus clientes.",
      caracteristicas: [
        "Adaptado a horario comercial",
        "Limpieza de vitrinas y mostradores",
        "Tratamiento de pisos comerciales",
        "Sanitización frecuente",
        "Atención a zonas de alto tráfico",
        "Limpieza de fachadas y entradas"
      ]
    }
  ];

  const manejarSolicitudCotizacion = (servicioId) => {
    const servicio = servicios.find(s => s.id === servicioId);
    setServicioSeleccionado(servicioId);
    
    const subject = `Cotización para servicio: ${servicio.titulo}`;
    const body = `Hola,\n\nEstoy interesado/a en el servicio de ${servicio.titulo}.\n\nPor favor, envíenme información sobre:\n- Precios\n- Disponibilidad\n- Detalles del servicio\n\nMis datos de contacto son:\nNombre: \nTeléfono: \n\nGracias.`;
    
    window.location.href = `mailto:${emailDestino}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Layout pagina="Servicios">
      <section className={styles.hero}>
        <h1>Nuestra Galería de Servicios</h1>
        <p>Resultados profesionales que hacen la diferencia</p>
      </section>

      <section className={styles.serviciosGrid}>
        {servicios.map(servicio => (
          <TarjetaServicio
            key={servicio.id}
            servicio={servicio}
            onSolicitarCotizacion={manejarSolicitudCotizacion}
          />
        ))}
      </section>

      
    </Layout>
  );
};

export default servicios;