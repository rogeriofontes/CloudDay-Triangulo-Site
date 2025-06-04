'use client'

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about-section"><span style={{ color: '#fff' }}>Sobre</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#speakers-section"><span style={{ color: '#fff' }}>Palestrantes</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#schedule-section"><span style={{ color: '#fff' }}>Agenda</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tickets-section"><span style={{ color: '#fff' }}>Ingressos</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#venue-section"><span style={{ color: '#fff' }}>Local</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sponsors-section"><span style={{ color: '#fff' }}>Patrocinadores</span></a>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary btn-sm ms-lg-3 mt-2 mt-lg-0" href="#tickets-section">
                  Inscreva-se
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
