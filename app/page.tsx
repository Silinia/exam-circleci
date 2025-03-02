import CounterModule from './components/CounterModule';

export default function Home() {
  return (
    <div className="hero-container">
      <div className="container">
        {/* En-tête stylisé */}
        <header className="text-center header">
          <h1 className="title">
            Projet Next.js avec CI/CD
          </h1>
          <p className="subtitle">
            Une configuration CircleCI complète avec GitFlow
          </p>
        </header>

        {/* Section principale avec effet de carte */}
        <main className="card-container">
          <div className="card">
            <h2 className="card-title">Caractéristiques</h2>
            <ul className="feature-list">
              <li className="feature-item">
                <span className="check-icon">✓</span> Next.js 15 avec TypeScript
              </li>
              <li className="feature-item">
                <span className="check-icon">✓</span> Tests avec Jest et Testing Library
              </li>
              <li className="feature-item">
                <span className="check-icon">✓</span> Pattern GitFlow
              </li>
              <li className="feature-item">
                <span className="check-icon">✓</span> CI/CD avec CircleCI
              </li>
              <li className="feature-item">
                <span className="check-icon">✓</span> Déploiement automatisé sur Vercel
              </li>
            </ul>
          </div>

          <div className="card">
            <h2 className="card-title">Démonstration</h2>
            <div style={{background: "rgba(40, 53, 147, 0.5)", padding: "1.5rem", borderRadius: "0.5rem"}}>
              <CounterModule initialValue={10} />
            </div>
            <p style={{marginTop: "1rem", fontSize: "0.875rem", color: "#bbb"}}>
              Ce compteur a été développé en suivant notre workflow GitFlow et testé via notre pipeline CI/CD.
            </p>
          </div>
        </main>

        {/* Section de remerciements avec animation */}
        <section className="thanks-section">
          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem"}}>Remerciements</h2>
          <p style={{fontSize: "1.25rem"}}>
            Un grand merci à <span style={{fontWeight: "bold", color: "#ffeb3b"}}>Julien</span> pour ce cours inspirant !
          </p>
          <p style={{marginTop: "0.5rem", fontStyle: "italic", color: "#e1bee7"}}>
            Ton enseignement a rendu le CI/CD et GitFlow clairs et accessibles.
          </p>
        </section>

        {/* Navigation vers d'autres pages */}
        <section className="nav-grid centered-grid">
          <div></div>
          <a href="https://github.com/Silinia/exam-circleci" target="_blank" rel="noopener noreferrer" className="nav-card">
            <h3 className="nav-title">GitHub</h3>
            <p>Consultez le code source</p>
          </a>
          <div></div>
        </section>

        {/* Lien vers la documentation technique */}
        <footer className="text-center">
          <a 
            href="/docs/documentation-technique.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="doc-button"
          >
            Télécharger la Documentation Technique (PDF)
          </a>
          <p className="footer-text">
            © 2025 Projet Next.js avec CI/CD | Tous droits réservés
          </p>
        </footer>
      </div>
    </div>
  );
}