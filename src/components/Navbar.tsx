'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header')
      if (header) {
        if (window.scrollY > 10) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header id="header" className="header fixed-top">
      <div className="branding">
        <div className="container-fluid">
          <nav className="main-nav navbar navbar-expand-lg">
            <div className="container-fluid w-100 d-flex align-items-center justify-content-between">
              <div className="site-logo">
                <a className="scrollto" href="#hero-block">
                  <Image
                    id="header-logo"
                    className="logo-icon"
                    src="/assets/images/logo-menu.png"
                    width={120}
                    height={120}
                    alt="CloudDay Triângulo Logo"
                  />
                </a>
              </div>

              {/* Toggle Button para mobile */}
              <button className="menu-toggle d-lg-none" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
              </button>

              <div id="navigation" className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link scrollto" href="#" onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setMenuOpen(false);
                    }}>home</a>
                  </li>
                  <li className="nav-item"><a className="nav-link scrollto" href="#about-section" onClick={() => setMenuOpen(false)}>Sobre</a></li>
                  <li className="nav-item"><a className="nav-link scrollto" href="#speakers-section" onClick={() => setMenuOpen(false)}>Palestrantes</a></li>
                  <li className="nav-item"><a className="nav-link scrollto" href="#schedule-section" onClick={() => setMenuOpen(false)}>Agenda</a></li>
                  <li className="nav-item"><a className="nav-link scrollto" href="#tickets-section" onClick={() => setMenuOpen(false)}>Inscrições</a></li>
                  <li className="nav-item"><a className="nav-link scrollto" href="#venue-section" onClick={() => setMenuOpen(false)}>Local</a></li>
                  <li className="nav-item"><a className="nav-link scrollto" href="#sponsors-section" onClick={() => setMenuOpen(false)}>Parceiros</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .menu-toggle {
          background: none;
          border: none;
          font-size: 1.8rem;
          cursor: pointer;
          color: #333;
        }

        .nav-menu {
          display: flex;
        }

        @media (max-width: 991px) {
          .nav-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            z-index: 999;
            padding: 1rem;
          }

          .nav-menu.open {
            display: block;
          }

          .nav-menu ul {
            flex-direction: column;
            gap: 0.75rem;
          }

          .nav-item {
            margin-bottom: 0.5rem;
          }
        
          .nav-link {
                color: #333 !important; /* <<< garante que o texto apareça */
            }
        }
      `}</style>
    </header>
  )
}
