'use client'

import { useEffect } from 'react'
import Image from 'next/image';

export default function Navbar() {

    useEffect(() => {
        console.log('Entrou no useEffect do Navbar')
        const handleScroll = () => {
            const header = document.getElementById('header')
            console.log('ScrollY:', window.scrollY) // teste
            if (header) {
                if (window.scrollY > 10) {
                    header.classList.add('scrolled')
                    console.log('Adicionou classe scrolled')
                } else {
                    header.classList.remove('scrolled')
                    console.log('Removeu classe scrolled')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        console.log('handleScroll:', handleScroll()) // teste

        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('ScrollY:', window.scrollY) // teste
        }
    }, [])

    return (
        <header id="header" className="header fixed-top">
            <div className="branding">
                <div className="container-fluid">
                    <nav className="main-nav navbar navbar-expand-lg">
                        <div className="container-fluid w-100 d-flex align-items-center">
                            <div className="site-logo">
                                <a className="scrollto" href="#hero-block">
                                    <Image
                                        id="header-logo"
                                        className="logo-icon"
                                        src="/assets/images/logo-menu.png"
                                        width="120"
                                        height="120"
                                        alt="CloudDay Triângulo Logo"
                                    />
                                </a>
                            </div>

                            <div id="navigation">
                                <ul className="nav navbar-nav">
                                    <li className="nav-item"><a className="nav-link scrollto" href="#" onClick={(e) => {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}>home</a></li>
                                    <li className="nav-item"><a className="nav-link scrollto" href="#about-section">Sobre</a></li>
                                    <li className="nav-item"><a className="nav-link scrollto" href="#speakers-section">Palestrantes</a></li>
                                    <li className="nav-item"><a className="nav-link scrollto" href="#schedule-section">Agenda</a></li>
                                    <li className="nav-item"><a className="nav-link scrollto" href="#tickets-section">Inscrições</a></li>
                                    <li className="nav-item"><a className="nav-link scrollto" href="#venue-section">Local</a></li>
                                    <li className="nav-item"><a className="nav-link scrollto" href="#sponsors-section">Parceiros</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
