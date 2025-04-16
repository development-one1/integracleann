import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const SobreNosotros = () => {
  const compromisos = [
    "Nuestro compromiso es ofrecer un servicio integral de calidad a todos nuestros clientes.",
    "Nuestro equipo de trabajo ha sido cuidadosamente seleccionado y entrenado.",
    "Somos especialistas en limpiezas de propiedades vacacionales, comercios y portales.",
    "Nos esforzamos en ofrecer seriedad, responsabilidad y excelencia en cada proyecto, independientemente de su magnitud.",
    "Ofrecemos presupuestos adaptados a cada necesidad.",
    "Nuestra prioridad es la satisfacción de nuestros clientes."
  ];

  return (
    <Box 
      sx={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 4,
        p: 3,
        my: 4,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        boxShadow: 3
      }}
    >
      {/* Contenedor de la imagen */}
      <Box 
        sx={{
          flex: 1,
          minWidth: { md: 300 },
          height: { xs: 200, md: 400 },
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 2
        }}
      >
        <img 
          src="/nosotros.jpg" 
          alt="Equipo de limpieza profesional"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </Box>

      {/* Contenedor del contenido */}
      <Box sx={{ flex: 1 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            color: '#2c3e50',
            fontWeight: 'bold',
            mb: 3,
            pb: 2,
            borderBottom: '2px solid #f0f0f0'
          }}
        >
          El compromiso de IntegraClean
        </Typography>
        
        <List>
          {compromisos.map((item, index) => (
            <ListItem 
              key={index} 
              sx={{ 
                alignItems: 'flex-start', 
                py: 1,
                px: 0
              }}
            >
              <FiberManualRecordIcon 
                sx={{ 
                  fontSize: '0.8rem', 
                  mr: 2, 
                  mt: '6px',
                  color: '#4CAF50'
                }} 
              />
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  variant: 'body1',
                  sx: { color: '#555555' }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SobreNosotros;
