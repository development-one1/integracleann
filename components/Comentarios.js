import React, { useEffect, useState } from "react";

const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nombre, setNombre] = useState("");
  const [fotoFile, setFotoFile] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);
  const [calificacion, setCalificacion] = useState(0);

  // Cargar comentarios desde localStorage
  useEffect(() => {
    const guardados = localStorage.getItem("comentarios");
    if (guardados) {
      setComentarios(JSON.parse(guardados));
    }
  }, []);

  // Guardar en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
  }, [comentarios]);

  // Previsualizar imagen subida
  useEffect(() => {
    if (fotoFile) {
      const previewURL = URL.createObjectURL(fotoFile);
      setFotoPreview(previewURL);
      return () => URL.revokeObjectURL(previewURL);
    }
  }, [fotoFile]);

  const handleSubmit = () => {
    if (
      nuevoComentario.trim() === "" ||
      nombre.trim() === "" ||
      !fotoFile ||
      calificacion === 0
    ) {
      return alert("Por favor, completa todos los campos.");
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const nuevo = {
        nombre,
        foto: reader.result,
        calificacion,
        texto: nuevoComentario.trim(),
      };

      setComentarios((prev) => [...prev, nuevo]);
      setNuevoComentario("");
      setNombre("");
      setFotoFile(null);
      setFotoPreview(null);
      setCalificacion(0);
    };

    reader.readAsDataURL(fotoFile);
  };

  const renderEstrellas = (valor, setValor) => {
    return (
      <div style={{ display: "flex", gap: "4px", marginBottom: "10px" }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            onClick={() => setValor(n)}
            style={{
              cursor: setValor ? "pointer" : "default",
              fontSize: "20px",
              color: n <= valor ? "#ffc107" : "#ccc",
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h3>Comentarios</h3>

      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{
          width: "100%",
          marginBottom: "10px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <label style={{ display: "block", marginBottom: "10px" }}>
        <strong>Sube tu foto de perfil:</strong>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFotoFile(e.target.files[0])}
          style={{ marginTop: "5px" }}
        />
      </label>

      {fotoPreview && (
        <img
          src={fotoPreview}
          alt="Vista previa"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "10px",
          }}
        />
      )}

      {renderEstrellas(calificacion, setCalificacion)}

      <textarea
        placeholder="Escribe tu comentario..."
        value={nuevoComentario}
        onChange={(e) => setNuevoComentario(e.target.value)}
        style={{
          width: "100%",
          minHeight: "80px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
      

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Publicar
      </button>

      <div style={{ marginTop: "30px" }}>
        {comentarios.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "auto",
              gap: "20px",
              paddingBottom: "10px",
            }}
          >
            {comentarios.map((comentario, i) => (
              <div
                key={i}
                style={{
                  minWidth: "250px",
                  flex: "0 0 auto",
                  background: "#f2f2f2",
                  padding: "12px",
                  borderRadius: "6px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  src={comentario.foto}
                  alt={comentario.nombre}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "5px",
                  }}
                />
                <strong>{comentario.nombre}</strong>
                <div>{renderEstrellas(comentario.calificacion, null)}</div>
                <p style={{ marginTop: "5px" }}>{comentario.texto}</p>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "#777", marginTop: "10px" }}>
            No hay comentarios aún. ¡Sé el primero!
          </p>
        )}
      </div>
    </div>
  );
};

export default Comentarios;
