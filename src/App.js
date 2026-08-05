import { useState, useEffect } from "react";
import { FiCompass, FiArrowUp, FiArrowRight, FiArrowDown, FiArrowLeft } from "react-icons/fi";
import "./App.css";

const BATAS = [
  { arah: "Utara", tempat: "Kelurahan Cangkiran", ket: "Kec. Mijen, Kota Semarang", icon: "north" },
  { arah: "Timur", tempat: "Desa Kliris", ket: "Kec. Boja", icon: "east" },
  { arah: "Selatan", tempat: "Desa Pagerwojo", ket: "Kec. Limbangan", icon: "south" },
  { arah: "Barat", tempat: "Desa Karangmanggis", ket: "Kec. Boja", icon: "west" },
];

const POTENSI = [
  { judul: "Peta Potensi EBT Desa Ngabean", img: "/images/MULDIS1.png" },
  { judul: "Peta Tata Guna Lahan Desa Ngabean", img: "/images/PETABARU.png" },
  { judul: "Potensi Biogas Desa", img: "/images/BIOGAS.png" },
];

function useGoogleFonts() {
  useEffect(() => {
    const id = "ngabean-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap";
    document.head.appendChild(link);
  }, []);
}

function DirIcon({ name }) {
  const icons = {
    north: FiArrowUp,
    east: FiArrowRight,
    south: FiArrowDown,
    west: FiArrowLeft,
  };
  const Icon = icons[name];
  return <Icon className="nga-dir-icon" size={20} />;
}

export default function App() {
  useGoogleFonts();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="nga-page">
      {/* HEADER */}
      <header className="nga-header">
        <div className="nga-header-inner">
          <nav className="nga-nav">
            <a href="#profil" className="nga-nav-link">Profil</a>
            <a href="#batas" className="nga-nav-link">Batas Wilayah</a>
            <a href="#potensi" className="nga-nav-link">Potensi</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="nga-hero">
        <div className="nga-hero-bg">
          <img
            src="/images/ngabean.png"
            alt="Desa Ngabean"
          />
          <div className="nga-hero-gradient" />
        </div>
        <div className="nga-hero-content">
          <span className="nga-eyebrow">KECAMATAN BOJA, KABUPATEN KENDAL</span>
          <h1 className="nga-title">Desa Ngabean</h1>
          <p className="nga-subtitle"></p>
          <div className="nga-hero-actions">
            <a href="#potensi" className="nga-btn nga-btn--primary">
              Potensi Desa <FiCompass size={18} />
            </a>
            <a href="#profil" className="nga-btn nga-btn--ghost">Profil</a>
          </div>
        </div>
      </section>

      {/* PROFIL */}
      <section id="profil" className="nga-profil-section">
        <div className="nga-section-inner nga-profil-inner">
          <p className="nga-profil-text">
            Desa Ngabean merupakan salah satu desa di Kecamatan Boja, Kabupaten Kendal, dengan
            jarak tempuh ke kecamatan 5,5 km dan ke kabupaten 28 km, yang dapat ditempuh dengan
            kendaraan darat selama kurang lebih satu jam.
          </p>
        </div>
      </section>

      {/* BATAS WILAYAH */}
      <section id="batas" className="nga-batas-section">
        <div className="nga-section-inner">
          <div className="nga-center-head">
            <h3 className="nga-h2">Batas Wilayah</h3>
            <div className="nga-underline" />
          </div>
          <div className="nga-batas-grid">
            {BATAS.map((b) => (
              <div key={b.arah} className="nga-batas-card">
                <span className="nga-batas-arah">{b.arah.toUpperCase()}</span>
                <div className="nga-batas-icon-wrap">
                  <DirIcon name={b.icon} />
                </div>
                <span className="nga-batas-tempat">{b.tempat}</span>
                <span className="nga-batas-ket">{b.ket}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POTENSI */}
      <section id="potensi" className="nga-potensi-section">
        <div className="nga-section-inner">
          <div className="nga-center-head">
            <h3 className="nga-h2">Potensi & Sumber Daya Desa</h3>
            <div className="nga-underline" />
          </div>

          <div className="nga-potensi-grid">
            {POTENSI.map((p) => {
              return (
                <div key={p.judul} className="nga-potensi-card">
                  {p.img && (
                    <img
                      src={p.img}
                      alt={p.judul}
                      className="nga-potensi-card-img"
                      onClick={() => setSelectedImg(p)}
                    />
                  )}
                  <h4 className="nga-potensi-card-title">{p.judul}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="nga-footer">
        <span className="nga-footer-text">© 2026 KKN Tematik Tim 140 Universitas Diponegoro</span>
      </footer>

      {/* MODAL GAMBAR */}
      {selectedImg && (
        <div className="nga-modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="nga-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="nga-modal-close" onClick={() => setSelectedImg(null)}>
              ×
            </button>
            <img src={selectedImg.img} alt={selectedImg.judul} />
            <p>{selectedImg.judul}</p>
          </div>
        </div>
      )}
    </div>
  );
}
