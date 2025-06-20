import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutSection from '../components/AboutSection';
import SpeakersSection from '../components/SpeakersSection';
import SponsorsSection from '@/components/SponsorsSection';
import CallToActionSection from '@/components/CallToActionSection';
import FooterSection from '@/components/FooterSection';
import ScheduleSection from '@/components/ScheduleSection';
import TicketsSection from '@/components/TicketsSection';
import { faCalendarAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import VenueSection from '@/components/VenueSection';
import Image from 'next/image';

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
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-text-block p-2 bg-white rounded shadow text-center" style={{
            color: '#000',
            maxWidth: '400px',
            width: '100%',
            margin: '0 auto'
          }}>
            <Image
              className="hero-logo mb-1 mx-auto d-block"
              src="/assets/images/logo-front-sitex1.png"
              alt="CloudDay Triângulo Logo"
              width={225}
              height={150}
            />
            <br />
            <div className="hero-meta mb-1 small" style={{ fontSize: '18px' }}>
              <div className="d-flex align-items-center justify-content-center mb-1">
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" style={{ fontSize: '1rem' }} />
                <span>5 de Julho de 2025</span>
              </div>
              <div className="d-flex align-items-center justify-content-center mb-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" style={{ fontSize: '1rem' }} />
                <span>Uberlândia, MG</span>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faClock} className="me-2" style={{ fontSize: '1rem' }} />
                <span>08h00 às 18h00</span>
              </div>
            </div>
            <br />
            <div className="hero-intro mt-2 fw-medium" style={{ fontSize: '14px' }}>
              O encontro das grandes tendências em cloud
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
