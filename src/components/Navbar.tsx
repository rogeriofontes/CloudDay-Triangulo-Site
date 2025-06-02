'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [hasMounted, setHasMounted] = useState(true)

  const toggleNavbar = () => setIsCollapsed(!isCollapsed)

  useEffect(() => {
    setHasMounted(true)

    const links = document.querySelectorAll('.scrollto')
    const nav = document.getElementById('navbarNav')

    links.forEach((link) => {
      link.addEventListener('click', () => {
        if (nav?.classList.contains('show')) {
          nav.classList.remove('show')
          setIsCollapsed(true)
        }
      })
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', () => { })
      })
    }
  }, [])

  if (!hasMounted) return null

  return (
    <header id="header" className="header fixed-top">
      <div className="branding">
        <div className="container-fluid">
          <nav className="main-nav navbar navbar-expand-lg">
            <div className="container-fluid w-100 d-flex align-items-center">

              <div className="site-logo"><a className="scrollto" href="#hero-block"><img className="logo-icon"
                src="/assets/images/logo-white.svg" width="130" height="30" alt="logo" /></a></div>

              <div className="navbar-btn order-lg-2"><a className="btn btn-secondary" href="#tickets-section" target="_top">Faça a Inscrição!</a></div>

              <div id="navigation">
                <ul className="nav navbar-nav">
                  <li className="nav-item"><a className="nav-link scrollto" href="#about-section">Sobre</a></li>
                  <li className="nav-item"><a className="nav-link scrollto" href="#speakers-section">Palestrantes</a></li>
                  <li className="nav-item"><a className="nav-link scrollto" href="#schedule-section">Agenda</a></li>
                  <li className="nav-item"><a className="nav-link scrollto" href="#tickets-section">Inscrições</a></li>
                  <li className="nav-item"><a className="nav-link scrollto" href="#venue-section">Local</a></li>
                  <li className="nav-item"><a className="nav-link scrollto" href="#sponsors-section">Parceiros</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
