import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AgendaSection from '@/components/AgendaSection';
import AboutSection from '../components/AboutSection';
import SpeakersSection from '../components/SpeakersSection';
import SponsorsSection from '@/components/SponsorsSection';
import CallToActionSection from '@/components/CallToActionSection';
import HeroBlock from '@/components/HeroBlock';
import Head from 'next/head';
import HeaderSection from '@/components/HeaderSection';
import Footer from '@/components/FooterSection';
import FooterSection from '@/components/FooterSection';
import ScheduleSection from '@/components/ScheduleSection';
import TicketsSection from '@/components/TicketsSection';
import VenueSection from '@/components/VenueSection';
import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import { faCalendarAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main>
      <section id="hero-block" className="hero-block">
        <div id="hero-carousel" className="hero-carousel carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item-1 carousel-item active"></div>
            <div className="carousel-item-2 carousel-item"></div>
            <div className="carousel-item-3 carousel-item"></div>
          </div>
        </div>
        <div className="hero-block-mask"></div>
        <div className="container">
          <div className="hero-text-block">
            <h1 className="hero-heading mb-2">
              <span style={{ fontSize: '0.8em' }}>CloudDay</span>  <span style={{ fontSize: '0.4em' }}>Triângulo</span>
            </h1>
            <div className="hero-meta mb-3">
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                7 de Julho de 2025
              </span>
              <span className="mx-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                Uberlândia, MG
              </span>
              <span>
                <FontAwesomeIcon icon={faClock} className="me-2" />
                08h00 às 18h00
              </span>
            </div>
            <div className="hero-intro mb-4">
              O encontro das grandes tendências em cloud
            </div>
            <div className="hero-cta">
              <a className="btn btn-primary btn-lg" href="#" target="_blank">Faça sua inscrição</a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      {/* HeroBlock */}
      {/*<HeaderSection /> */}
      <AboutSection />
      <SpeakersSection />
      {/*<AgendaSection /> */}
      <CallToActionSection />
      <ScheduleSection />
      <TicketsSection />
      <VenueSection />
      {/*<ContactSection />*/}
      <SponsorsSection />
      <FooterSection />


    </main>
  );
}
