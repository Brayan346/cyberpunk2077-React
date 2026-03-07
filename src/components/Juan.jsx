import React from "react";
import "./Juan.css";

const CyberpunkAnniversary = () => {
  return (
    <div className="cyberpunk-page">
      <header className="cyberpunk-header">
        <h1>¡CELEBRA LOS CINCO AÑOS DE CYBERPUNK 2077!</h1>
        <p className="subtitle-text">
          El tiempo vuela en la ciudad donde se forjan las leyendas. Para
          celebrar la ocasión y agradecerte que nos hayas acompañado al futuro
          sombrío, tenemos nuevos anuncios, colaboraciones exclusivas y mucho
          más. ¡Descubre a continuación lo que está por llegar!
        </p>
      </header>

      <section className="cyberpunk-videos">
        <a
          href="https://youtu.be/9arI4ZE6s90"
          target="_blank"
          rel="noopener noreferrer"
          className="video-card"
        >
          <div className="thumbnail-container">
            <img
              src="https://img.youtube.com/vi/9arI4ZE6s90/hqdefault.jpg"
              alt="Ciudad de Leyendas"
            />
            <div className="play-overlay">▶</div>
          </div>
          <div className="video-footer">
            <h3 className="video-title">CIUDAD DE LEYENDAS</h3>
          </div>
        </a>

        <a
          href="https://youtu.be/g-VVf_7_UdM"
          target="_blank"
          rel="noopener noreferrer"
          className="video-card"
        >
          <div className="thumbnail-container">
            <img
              src="https://img.youtube.com/vi/g-VVf_7_UdM/hqdefault.jpg"
              alt="Never Fade Away"
            />
            <div className="play-overlay">▶</div>
          </div>
          <div className="video-footer">
            <h3 className="video-title">NEVER FADE AWAY</h3>
          </div>
        </a>

        <a
          href="https://youtu.be/CkxKw2izspU"
          target="_blank"
          rel="noopener noreferrer"
          className="video-card"
        >
          <div className="thumbnail-container">
            <img
              src="https://img.youtube.com/vi/CkxKw2izspU/hqdefault.jpg"
              alt="Deseos Especiales de Cumpleaños"
            />
            <div className="play-overlay">▶</div>
          </div>
          <div className="video-footer">
            <h3 className="video-title">DESEOS ESPECIALES DE CUMPLEAÑOS</h3>
          </div>
        </a>
      </section>
    </div>
  );
};

export default CyberpunkAnniversary;