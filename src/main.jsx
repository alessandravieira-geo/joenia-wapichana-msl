import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const gallery = [
  {
    src: "https://raw.githubusercontent.com/alessandravieira-geo/joenia-wapichana/main/public/assets/galeria/joenia-1.jpg",
    alt: "Joênia Wapichana em atividade",
    caption: "Atuação e representação dos povos indígenas"
  },
  {
    src: "https://raw.githubusercontent.com/alessandravieira-geo/joenia-wapichana/main/public/assets/galeria/joenia-2.jpg",
    alt: "Joênia Wapichana",
    caption: "Uma trajetória construída pela defesa de direitos"
  },
  {
    src: "https://raw.githubusercontent.com/alessandravieira-geo/joenia-wapichana/main/public/assets/galeria/joenia-5.jpg",
    alt: "Joênia Wapichana em evento",
    caption: "Presença e participação política"
  },
  {
    src: "https://raw.githubusercontent.com/alessandravieira-geo/joenia-wapichana/main/public/assets/galeria/joenia-6.jpg",
    alt: "Joênia Wapichana",
    caption: "Direitos, território e futuro"
  },
  {
    src: "https://raw.githubusercontent.com/alessandravieira-geo/joenia-wapichana/main/public/assets/galeria/joenia-9.jpg",
    alt: "Joênia Wapichana",
    caption: "Representação indígena no Brasil"
  },
  {
    src: "https://raw.githubusercontent.com/alessandravieira-geo/joenia-wapichana/main/public/assets/galeria/joenia-99.jpg",
    alt: "Joênia Wapichana",
    caption: "Uma história que inspira novas gerações"
  }
];

const timeline = [
  {
    year: "1997",
    title: "Início da atuação",
    text: "Começa sua atuação na defesa dos direitos indígenas em Roraima."
  },
  {
    year: "2018",
    title: "Eleita deputada federal",
    text: "Torna-se a primeira mulher indígena eleita deputada federal no Brasil."
  },
  {
    year: "2019",
    title: "Posse na Câmara",
    text: "Inicia o mandato na Câmara dos Deputados, levando a pauta indígena ao Parlamento."
  },
  {
    year: "2023",
    title: "Presidência da Funai",
    text: "É nomeada presidenta da Funai, fortalecendo a política indigenista."
  },
  {
    year: "Hoje",
    title: "Território e futuro",
    text: "Segue trabalhando pela proteção dos territórios, dos povos indígenas e das novas gerações."
  }
];

function LeafMark() {
  return (
    <svg className="leaf-mark" viewBox="0 0 80 80" aria-hidden="true">
      <path d="M40 70C18 61 11 41 18 19c19 2 34 14 32 34-1 8-5 13-10 17Z" fill="currentColor" opacity=".9"/>
      <path d="M40 68C39 49 31 35 20 22M40 54C48 43 57 35 67 29" fill="none" stroke="currentColor" strokeWidth="3"/>
      <path d="M52 57c14-5 19-16 16-29-13 1-21 8-23 19" fill="currentColor" opacity=".65"/>
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedPhoto ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedPhoto]);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <header className="header">
        <button className="brand" onClick={() => go("inicio")} aria-label="Voltar ao início">
          <span className="brand-symbol">
            <span className="petal p1"></span>
            <span className="petal p2"></span>
            <span className="petal p3"></span>
            <span className="petal p4"></span>
            <span className="stem"></span>
          </span>
          <span className="brand-text">JOÊNIA<br /><strong>WAPICHANA</strong></span>
        </button>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          <span></span><span></span><span></span>
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          {[
            ["inicio", "Início"],
            ["trajetoria", "Trajetória"],
            ["atuacao", "Atuação"],
            ["povos", "Povos Indígenas"],
            ["galeria", "Galeria"],
            ["contato", "Contato"]
          ].map(([id, label]) => (
            <button key={id} onClick={() => go(id)}>{label}</button>
          ))}
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="pattern-side left"></div>
          <div className="hero-copy">
            <div className="eyebrow">TERRITÓRIO • DIREITOS • FUTURO</div>
            <h1>JOÊNIA<br /><em>WAPICHANA</em></h1>
            <p className="hero-lead">
              Primeira mulher indígena eleita deputada federal no Brasil e atual presidenta da Funai.
              Uma trajetória de luta, coragem e compromisso com os povos indígenas e com o nosso país.
            </p>
            <button className="primary-btn" onClick={() => go("trajetoria")}>
              CONHEÇA SUA TRAJETÓRIA <span>→</span>
            </button>
          </div>

          <div className="hero-art">
            <div className="sunburst"></div>
            <div className="bird">✦</div>
            <img src="/assets/joenia-portrait.png" alt="Ilustração de Joênia Wapichana" />
            <div className="plant plant-a"></div>
            <div className="plant plant-b"></div>
          </div>

          <div className="mountains">
            <span></span><span></span><span></span>
          </div>
        </section>

        <section className="intro section paper">
          <div className="section-heading">
            <span className="mini-line"></span>
            <h2>QUEM É JOÊNIA?</h2>
          </div>
          <div className="intro-grid">
            <div className="intro-text">
              <p>
                Joênia Wapichana pertence ao povo Wapichana e construiu sua trajetória na defesa
                dos direitos dos povos indígenas. Sua história inspira novas gerações e fortalece
                a luta por um Brasil mais justo e diverso.
              </p>
              <button className="outline-btn" onClick={() => go("atuacao")}>SAIBA MAIS <span>→</span></button>
            </div>
            <div className="fact">
              <div className="fact-icon">⌖</div>
              <strong>RORAIMA</strong>
              <p>Nascida em Boa Vista (RR) e pertencente ao povo Wapichana.</p>
            </div>
            <div className="fact">
              <div className="fact-icon">▱</div>
              <strong>DIREITO</strong>
              <p>Formada em Direito pela UFRR, atua há décadas na defesa dos direitos indígenas.</p>
            </div>
            <div className="fact">
              <div className="fact-icon">⌂</div>
              <strong>REPRESENTAÇÃO</strong>
              <p>Primeira mulher indígena eleita deputada federal no Brasil.</p>
            </div>
            <div className="fact">
              <div className="fact-icon">◌</div>
              <strong>ATUAÇÃO</strong>
              <p>Hoje, é presidenta da Funai e segue trabalhando pelos direitos dos povos indígenas.</p>
            </div>
          </div>
        </section>

        <section id="trajetoria" className="timeline-section section">
          <div className="section-heading centered">
            <LeafMark />
            <h2>TRAJETÓRIA QUE INSPIRA</h2>
            <LeafMark />
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <article className="timeline-item" key={item.year}>
                <div className="timeline-dot">{item.year}</div>
                <div className="timeline-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className={"timeline-illustration i" + index}></div>
              </article>
            ))}
          </div>
        </section>

        <section id="atuacao" className="action section">
          <div className="action-inner">
            <div>
              <div className="eyebrow light">ATUAÇÃO</div>
              <h2>Uma voz em defesa<br />dos direitos indígenas</h2>
              <p>
                A trajetória de Joênia conecta direito, política, território e participação social.
                Sua atuação ajuda a ampliar a presença dos povos indígenas nos espaços de decisão.
              </p>
            </div>
            <div className="action-cards">
              <div><span>01</span><strong>Direitos</strong><p>Defesa dos direitos constitucionais e da cidadania indígena.</p></div>
              <div><span>02</span><strong>Território</strong><p>Proteção das terras indígenas e dos modos de vida tradicionais.</p></div>
              <div><span>03</span><strong>Representação</strong><p>Participação política e fortalecimento da voz indígena.</p></div>
              <div><span>04</span><strong>Futuro</strong><p>Construção de novas possibilidades para as próximas gerações.</p></div>
            </div>
          </div>
        </section>

        <section id="povos" className="peoples section paper">
          <div className="peoples-copy">
            <div className="section-heading">
              <span className="mini-line"></span>
              <h2>POVOS INDÍGENAS</h2>
            </div>
            <p>
              Os povos indígenas fazem parte da diversidade cultural e histórica do Brasil.
              São centenas de povos, línguas, territórios, conhecimentos e formas de viver.
            </p>
            <p>
              Conhecer essa diversidade é também reconhecer direitos, combater preconceitos
              e compreender a importância da proteção dos territórios indígenas.
            </p>
          </div>
          <div className="territory-card">
            <div className="map-shape">
              <span>AMAZÔNIA</span>
              <span>RORAIMA</span>
            </div>
            <h3>Território é vida</h3>
            <p>Para muitos povos indígenas, território significa identidade, memória, cultura e futuro.</p>
          </div>
        </section>

        <section id="galeria" className="gallery section">
          <div className="section-heading centered">
            <LeafMark />
            <h2>GALERIA</h2>
            <LeafMark />
          </div>
          <p className="section-intro">
            Registros da trajetória, da atuação e dos momentos que ajudam a contar essa história.
          </p>
          <div className="gallery-grid">
            {gallery.map((photo, index) => (
              <button className={"gallery-item g" + index} key={photo.src} onClick={() => setSelectedPhoto(photo)}>
                <img src={photo.src} alt={photo.alt} loading="lazy"
                  onError={(e) => { e.currentTarget.parentElement.classList.add("broken"); }} />
                <span className="gallery-overlay"><strong>VER FOTO</strong><small>{photo.caption}</small></span>
              </button>
            ))}
          </div>
          <p className="gallery-note">
            As fotos da galeria estão vinculadas aos arquivos já utilizados no projeto original.
            Se você quiser deixar o novo site 100% independente, basta colocar os arquivos na pasta
            <code>public/assets/galeria</code> e alterar os caminhos em <code>src/main.jsx</code>.
          </p>
        </section>

        <section id="contato" className="quote section">
          <div className="quote-leaf"><LeafMark /></div>
          <blockquote>
            “Nosso território é vida,<br />
            é identidade, é futuro.<br />
            Defendê-lo é defender<br />
            todas as gerações.”
          </blockquote>
          <cite>JOÊNIA WAPICHANA</cite>
          <button className="gold-btn" onClick={() => go("inicio")}>VOLTAR AO INÍCIO <span>↑</span></button>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">JOÊNIA <strong>WAPICHANA</strong></div>
        <p>Território • Direitos • Futuro</p>
        <p className="footer-small">Projeto educativo • História, cultura e representação dos povos indígenas</p>
      </footer>

      {selectedPhoto && (
        <div className="lightbox" onClick={() => setSelectedPhoto(null)}>
          <button className="close" onClick={() => setSelectedPhoto(null)} aria-label="Fechar">×</button>
          <img src={selectedPhoto.src} alt={selectedPhoto.alt} onClick={(e) => e.stopPropagation()} />
          <div className="lightbox-caption">{selectedPhoto.caption}</div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
