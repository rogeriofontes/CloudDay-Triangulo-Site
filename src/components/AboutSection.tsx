// src/app/components/AboutSection.tsx

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutSection() {
  return (
    <section id="about-section" className="about-section section theme-bg-light">
      <div className="container">
        <h3 className="section-heading text-center mb-3">Sobre CloudDay Triângulo</h3>
        <div className="section-intro section-intro-wide mx-auto mb-4">
          O CloudDay Triângulo é um evento sobre computação em nuvem da região, retornando com força desde sua primeira edição em 2014.
          Criado para reunir especialistas, entusiastas e empresas, oferece um dia completo de conhecimento, inovação e networking.
          Com trilhas técnicas, cases reais e palestras inspiradoras, o evento promove troca de experiências e atualização profissional.
          Se você vive cloud, respira inovação e quer se conectar com a comunidade tech, esse é o seu lugar.
          Prepare-se para mergulhar em soluções modernas, automações, IA e muito mais.
        </div>
        <div className="benefits-list text-center mb-3">
          <h4 className="text-center mb-4">Motivos para participar:</h4>
          <ul className="list-unstyled text-start d-inline-block">
            <li className="d-flex align-items-start mb-2"><FontAwesomeIcon icon={faCheckCircle} className="me-2" /><b>Conteúdo de alto nível</b>,&nbsp; com especialistas em AWS, Azure, GCP, Oracle Cloud e IA</li>
            <li className="d-flex align-items-start mb-2"><FontAwesomeIcon icon={faCheckCircle} className="me-2" /><b>Networking estratégico</b>,&nbsp; com profissionais, empresas e comunidades da região</li>
            <li className="d-flex align-items-start mb-2"><FontAwesomeIcon icon={faCheckCircle} className="me-2" /><b>Trilhas técnicas e práticas</b>,&nbsp; com palestras, painéis e demonstrações ao vivo</li>
            <li className="d-flex align-items-start mb-2"><FontAwesomeIcon icon={faCheckCircle} className="me-2" /><b>Oportunidades de carreira</b>,&nbsp;com visibilidade para quem quer crescer na área</li>
            <li className="d-flex align-items-start mb-2"><FontAwesomeIcon icon={faCheckCircle} className="me-2" /><b>Acesso gratuito ou acessível</b>,&nbsp; com muito conteúdo em um único dia de evento</li>
          </ul>
        </div>
        <div className="event-countdown text-center mb-3">
          <h4 className="countdown-intro mb-2 text-center mb-3">Evento começa em:</h4>
          <div id="countdown-box" className="countdown-box"></div>
        </div>
        <div className="about-cta text-center mb-5">
          <a className="btn btn-primary btn-lg mb-5" href="#tickets-section" target="_top">Faça sua inscrição</a>
          &nbsp;
          <a className="btn btn-danger btn-lg mb-5" href="https://forms.gle/tXYH5d7QbjvpqCik6" target="_blank">Call4Papers</a>
        </div>
      </div>
    </section>
  );
}
