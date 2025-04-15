import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";

const SobreNosotros = () => {
  const CompromisoSomos = [
    "Nuestro compromiso es ofrecer un servicio integral de calidad a todos nuestros clientes.",
    "Nuestro equipo de trabajo ha sido cuidadosamente seleccionado y entrenado.",
    "Somos especialistas en limpiezas de propiedades vacacionales, comercios y portales.",
    "Nos esforzamos en ofrecer seriedad, responsabilidad y excelencia en cada proyecto, independientemente de su magnitud.",
    "Ofrecemos presupuestos adaptados a cada necesidad.",
    "Nuestra prioridad es la satisfacción de nuestros clientes."
  ];

  return (
    <Box sx={{ 
      maxWidth: 800, 
      margin: '0 auto', 
      padding: 4,
      backgroundColor: '#f9f9f9',
      borderRadius: 2,
      boxShadow: 1
    }}>
      <br />
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={{ 
          textAlign: 'center',
          color: '#2c3e50',
          fontWeight: 'bold',
          mb: 3
        }}
      >
        El compromiso de IntegraClean
      </Typography>
      
      <List>
        {CompromisoSomos.map((item, index) => (
          <ListItem key={index} sx={{ alignItems: 'flex-start', py: 1 }}>
            ●
            <Typography variant="body1" sx={{ color: '#34495e' }}>
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SobreNosotros;
