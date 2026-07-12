import { useEffect } from "react";
import { GiWheat, GiSprout, GiHammerNails, GiPineTree } from "react-icons/gi";
import { FiMapPin, FiClock } from "react-icons/fi";
import "./App.css";

const BATAS = [
  { arah: "Utara", tempat: "Kelurahan Cangkiran", ket: "Kec. Mijen, Kota Semarang", pos: "top" },
  { arah: "Timur", tempat: "Desa Kliris", ket: "Kec. Boja", pos: "right" },
  { arah: "Selatan", tempat: "Desa Pagerwojo", ket: "Kec. Limbangan", pos: "bottom" },
  { arah: "Barat", tempat: "Desa Karangmanggis", ket: "Kec. Boja", pos: "left" },
];

const POTENSI = [
  {
    icon: GiWheat,
    judul: "templet",
    teks: "",
  },
  {
    icon: GiSprout,
    judul: "templet",
    teks: "",
  },
  {
    icon: GiHammerNails,
    judul: "templet",
    teks: "",
  },
  {
    icon: GiPineTree,
    judul: "templet",
    teks: "",
  },
];

function useGoogleFonts() {
  useEffect(() => {
    const id = "ngabean-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap";
    document.head.appendChild(link);
  }, []);
}

function Compass() {
  return (
    <div className="nga-compass">
      <svg viewBox="0 0 200 200" className="nga-compass-svg">
        <line x1="100" y1="20" x2="100" y2="180" className="nga-compass-line" />
        <line x1="20" y1="100" x2="180" y2="100" className="nga-compass-line" />
        <circle cx="100" cy="100" r="46" className="nga-compass-ring" />
      </svg>

      <div className="nga-compass-center">
        <span className="nga-compass-center-name">Desa Ngabean</span>
      </div>

      {BATAS.map((b) => (
        <div key={b.arah} className={`nga-compass-box nga-compass-box--${b.pos}`}>
          <div className="nga-compass-arah">{b.arah.toUpperCase()}</div>
          <div className="nga-compass-tempat">{b.tempat}</div>
          <div className="nga-compass-ket">{b.ket}</div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  useGoogleFonts();

  return (
    <div className="nga-page">
      {/* HEADER */}
      <header className="nga-header">
        <div className="nga-header-content">
          <nav className="nga-nav">
            <a href="#profil" className="nga-nav-link">Profil</a>
            <a href="#batas" className="nga-nav-link">Batas Wilayah</a>
            <a href="#potensi" className="nga-nav-link">Potensi</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="nga-hero">
        <div className="nga-eyebrow">Kec. Boja, Kab. Kendal, Jawa Tengah</div>
        <h1 className="nga-title">Desa Ngabean</h1>
        <p className="nga-subtitle">
          Profil singkat dan potensi desa disusun untuk memperkenalkan wilayah dan kekayaan lokal Ngabean.
        </p>

        <div className="nga-meta-row">
          <div className="nga-meta-item">
            <FiMapPin size={16} color="var(--indigo)" />
            <span className="nga-mono">5,5 km ke kecamatan</span>
          </div>
          <div className="nga-meta-item">
            <FiMapPin size={16} color="var(--indigo)" />
            <span className="nga-mono">28 km ke kabupaten</span>
          </div>
          <div className="nga-meta-item">
            <FiClock size={16} color="var(--indigo)" />
            <span className="nga-mono">&plusmn; 1 jam kendaraan darat</span>
          </div>
        </div>
      </section>

      {/* PROFIL */}
      <section id="profil" className="nga-profil-section">
        <div className="nga-profil-inner">
          <div className="nga-section-label">Profil desa</div>
          <p className="nga-profil-text">
            Desa Ngabean merupakan salah satu desa di Kecamatan Boja, Kabupaten Kendal, dengan jarak tempuh ke
            kecamatan 5,5 km dan ke kabupaten 28 km, yang dapat ditempuh dengan kendaraan darat selama kurang lebih
            satu jam.
          </p>

          <div id="batas" className="nga-section-label nga-batas-label">Batas wilayah</div>
          <Compass />
        </div>
      </section>

      {/* POTENSI */}
      <section id="potensi" className="nga-potensi-section">
        <div className="nga-potensi-inner">
          <div className="nga-section-label">Potensi desa</div>
          <h2 className="nga-potensi-title">templet</h2>
          <p className="nga-potensi-note">
            templet
          </p>

          <div className="nga-potensi-grid">
            {POTENSI.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.judul} className="nga-potensi-card">
                  <div className="nga-potensi-icon-wrap">
                    <Icon size={18} color="var(--paper)" />
                  </div>
                  <h3 className="nga-potensi-card-title">{p.judul}</h3>
                  <p className="nga-potensi-card-text">{p.teks}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="nga-footer">
        <span className="nga-footer-text">&copy; 2026 KKN Tematik Tim 140 Universitas Diponegoro</span>
      </footer>
    </div>
  );
}
