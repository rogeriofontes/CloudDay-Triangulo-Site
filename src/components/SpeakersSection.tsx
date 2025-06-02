'use client'

import ModalSpeaker from './ModalSpeaker'

export default function SpeakersSection() {
  const speakers = [
    {
      name: 'João Silva',
      role: 'Arquiteto Cloud AWS',
      photo: '/assets/images/speakers/speaker-1.jpg',
      bio: 'Especialista em soluções cloud com mais de 10 anos de experiência.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },
    {
      name: 'Maria Oliveira',
      role: 'DevOps Engineer',
      photo: '/assets/images/speakers/speaker-2.jpg',
      bio: 'Apaixonada por automação e cultura DevOps em grandes empresas.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },
    {
      name: 'Carlos Souza',
      role: 'Especialista em Segurança',
      photo: '/assets/images/speakers/speaker-3.jpg',
      bio: 'Consultor em segurança cibernética e compliance.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },
    {
      name: 'Carlos Souza',
      role: 'Especialista em Segurança',
      photo: '/assets/images/speakers/speaker-3.jpg',
      bio: 'Consultor em segurança cibernética e compliance.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },
    {
      name: 'Carlos Souza',
      role: 'Especialista em Segurança',
      photo: '/assets/images/speakers/speaker-3.jpg',
      bio: 'Consultor em segurança cibernética e compliance.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },
    {
      name: 'Carlos Souza',
      role: 'Especialista em Segurança',
      photo: '/assets/images/speakers/speaker-3.jpg',
      bio: 'Consultor em segurança cibernética e compliance.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },
    {
      name: 'Carlos Souza',
      role: 'Especialista em Segurança',
      photo: '/assets/images/speakers/speaker-3.jpg',
      bio: 'Consultor em segurança cibernética e compliance.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },
    {
      name: 'Carlos Souza',
      role: 'Especialista em Segurança',
      photo: '/assets/images/speakers/speaker-3.jpg',
      bio: 'Consultor em segurança cibernética e compliance.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },
    // Adicione mais speakers conforme necessário
  ]

  return (
    <section id="speakers-section" className="speakers-section section">
      <div className="container">
        <h2 className="section-heading text-center mb-5">Palestrantes</h2>
        {speakers.length > 0 && (
          <div className="section-intro text-center single-col-max mx-auto mb-5">
            Lista dos nossos palestrantes confirmados
          </div>
        )}
        <div className="row">
          {speakers.length > 0 ? (speakers.map((speaker, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
              <ModalSpeaker
                name={speaker.name}
                role={speaker.role}
                company="Angular Core Team"
                photo={speaker.photo}
                bio={speaker.bio}
                twitter={speaker.twitter}
                linkedin={speaker.linkedin}
                github={speaker.github}
              />
            </div>
          ))) : (
            <div className="col-12 text-center">
              <p>Nenhum palestrante cadastrado no momento.</p>
            </div>
          )}
        </div>
      </div>
      {/*{speakers.length === 0 ? (
        <div className="speakers-cta text-center py-3"><a className="btn btn-primary btn-lg"
          href="#tickets-section"
          target="_top">Faça sua inscrição</a></div>
      ) : (
        <div className="speakers-cta text-center py-3"><a className="btn btn-primary btn-lg"
          href="#tickets-section"
          target="_top">Faça sua inscrição em modo blind</a></div>
      )}*/}
    </section>
  )
}
