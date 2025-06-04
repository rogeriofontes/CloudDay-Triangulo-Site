'use client'

import { useState } from 'react'
import Image from 'next/image';

export default function HeaderSection() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  return (
    <header id="header" className="header fixed-top">
      <div className="branding">
        <div className="container-fluid">
          <nav className="main-nav navbar navbar-expand-lg">
            {/* Logo */}
            <div className="site-logo">
              <a className="scrollto" href="#hero-block">
                <Image
                  className="logo-icon"
                  src="/assets/images/logo-front-sitex.png"
                  alt="logo"
                  width={140}
                  height={40}
                />
              </a>
            </div>

            {/* Botão do menu responsivo */}
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="navigation"
              aria-expanded={!isNavCollapsed}
              aria-label="Alternar navegação"
              onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Links do menu */}
            <div
              id="navigation"
              className={`navbar-collapse collapse justify-content-lg-end me-lg-3 ${!isNavCollapsed ? 'show' : ''}`}
            >
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#about-section">Sobre</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#speakers-section">Palestrantes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#schedule-section">Agenda</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#tickets-section">Inscrições</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#venue-section">Local</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollto" href="#sponsors-section">Parceiros</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
