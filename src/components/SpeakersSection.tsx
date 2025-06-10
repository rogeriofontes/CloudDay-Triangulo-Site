'use client'

import ModalSpeaker from './ModalSpeaker'

export default function SpeakersSection() {
  const speakers = [
    {
      name: 'Marcelo Paiva',
      role: 'CTO na Softprime',
      company: 'Softprime',
      photo: '/assets/images/speakers/MarceloPaiva1080.png',
      bio: 'CTO na Softprime, Microsoft MVP AI e AWS Community Hero',
      instagram: 'https://www.instagram.com/marcelojpaiva',
      linkedin: 'https://www.linkedin.com/in/marcelopaiva'
    },
    {
      name: 'Rogério Fontes',
      role: 'Especialista em Sistemas e Modernização',
      company: 'NTTDATA',
      photo: '/assets/images/speakers/rogeriofontes.jpg',
      bio: 'Apaixonado em Maneiras e Formas Ágeis de Criar Código Fonte. Sempre programando com um Bom Café e Escutando um Belo e Pesado Rock`n Roll... Trabalha há mais de 10 Anos com JAVA e LINUX/AWS, passando por Várias Linguagens e Multi-Cloud. É Professor Universitário e ministra as disciplinas: Redes de Computadores e Segurança; Dispositivos Móveis com Java/Spring boot e Dispositivos Móveis. Jugleader e Co-Fundador do UAIJUG (Grupo de Usuários do Triângulo Mineiro) e do TRIÂNGULO HACKERSPACE e AWS UG Triângulo Mineiro e Organizado ca CiberCom. Além disso, aventura-se como Empreendedor, é Lider de Equipe e Arquiteto de Software especialista de Sistemas e Modenização na NTTDATA Latam.',
      twitter: 'https://twitter.com/rogerioFontes',
      linkedin: 'https://www.linkedin.com/in/rogerio-fontes/',
      github: 'https://github.com/rogeriofontes',
    }
    /*,
    {
      name: 'Rogério Fontes (presuntinhho)',
      role: 'Especialista em Segurança',
      company: 'Softprime',
      photo: '/assets/images/speakers/speaker-3.jpg',
      bio: 'Consultor em segurança cibernética e compliance.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },
    {
      name: 'Carlos Souza',
      role: 'Especialista em Segurança',
      company: 'CyberSec Solutions',
      photo: '/assets/images/speakers/speaker-3.jpg',
      bio: 'Consultor em segurança cibernética e compliance.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },
    {
      name: 'Carlos Souza',
      role: 'Especialista em Segurança',
      company: 'Softprime',
      photo: '/assets/images/speakers/speaker-3.jpg',
      bio: 'Consultor em segurança cibernética e compliance.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },
    {
      name: 'Carlos Souza',
      role: 'Especialista em Segurança',
      company: 'Softprime',
      photo: '/assets/images/speakers/speaker-3.jpg',
      bio: 'Consultor em segurança cibernética e compliance.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },
    {
      name: 'Carlos Souza',
      role: 'Especialista em Segurança',
      company: 'Softprime',
      photo: '/assets/images/speakers/speaker-3.jpg',
      bio: 'Consultor em segurança cibernética e compliance.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },
    {
      name: 'Carlos Souza',
      role: 'Especialista em Segurança',
      company: 'Softprime',
      photo: '/assets/images/speakers/speaker-3.jpg',
      bio: 'Consultor em segurança cibernética e compliance.',
      twitter: 'https://twitter.com/carlossouza',
      linkedin: 'https://www.linkedin.com/in/carlossouza',
      github: '@carlossouza',
    },*/
    // Adicione mais speakers conforme necessário
  ]

  return (
    <section id="speakers-section" className="speakers-section section">
      <div className="container">
        <h2 className="section-heading text-center mb-5">Palestrantes</h2>
        {speakers.length > 0 && (
          <div className="section-intro text-center single-col-max mx-auto mb-5">
            Lista dos nossos palestrantes confirmados para o evento
          </div>
        )}
        <div className="row">
          {speakers.length > 0 ? (speakers.map((speaker, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
              <ModalSpeaker
                name={speaker.name}
                role={speaker.role}
                company={speaker.company}
                photo={speaker.photo}
                bio={speaker.bio}
                twitter={speaker.twitter}
                linkedin={speaker.linkedin}
                github={speaker.github}
                instagram={speaker.instagram}
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
