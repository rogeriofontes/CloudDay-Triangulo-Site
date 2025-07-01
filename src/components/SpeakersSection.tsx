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
      company: 'NTTDATA Brasil',
      photo: '/assets/images/speakers/rogeriofontes.jpg',
      bio: 'Apaixonado em Maneiras e Formas Ágeis de Criar Código Fonte. Sempre programando com um Bom Café e Escutando um Belo e Pesado Rock`n Roll... Trabalha há mais de 10 Anos com JAVA e LINUX/AWS, passando por Várias Linguagens e Multi-Cloud. É Professor Universitário e ministra as disciplinas: Redes de Computadores e Segurança; Dispositivos Móveis com Java/Spring boot e Dispositivos Móveis. Jugleader e Co-Fundador do UAIJUG (Grupo de Usuários do Triângulo Mineiro) e do TRIÂNGULO HACKERSPACE e AWS UG Triângulo Mineiro e Organizado ca CiberCom. Além disso, aventura-se como Empreendedor, é Lider de Equipe e Arquiteto de Software especialista de Sistemas e Modenização na NTTDATA Latam.',
      twitter: 'https://twitter.com/rogerioFontes',
      linkedin: 'https://www.linkedin.com/in/rogerio-fontes/',
      github: 'https://github.com/rogeriofontes',
    },
    {
      name: 'Daniela Benício',
      role: 'Cybersecurity Coordinator',
      company: 'Magalu (Magazine Luiza)',
      photo: '/assets/images/speakers/dani-benicio.jpg',
      bio: 'Coordenadora Cloud SEC e Security.',
      linkedin: 'https://www.linkedin.com/in/danielabenicio',
    },
    {
      name: 'Normandes Junior',
      role: 'Engenheiro de Software',
      company: 'Zup',
      photo: '/assets/images/speakers/normandes.jpeg',
      bio: 'Engenheiro de Software na Zup trabalhando com sistema distribuídos que precisam de baixa latência e alto throughput na AWS usando Go.',
      linkedin: 'https://www.linkedin.com/in/normandesjr/',
    },
    {
      name: 'Miriene Dayrell',
      role: 'Leader Specialist',
      company: 'NTT DATA Brasil',
      photo: '/assets/images/speakers/miriene.jpg',
      bio: 'Leader Specialist na NTT Data, com 10 anos de experiência em desenvolvimento de software. Atua na gestão e governança de projetos com foco em soluções AWS, além de coordenar formações técnicas voltadas à preparação para certificações AWS e ao aprimoramento de habilidades em backend. É membro do AWS User Group do Triângulo Mineiro. Graduada em Ciência da Computação pela Universidade Federal de Uberlândia (UFU) e com MBA em Gestão de Projetos pela PUC Minas.',
      linkedin: 'https://www.linkedin.com/in/mirienedayrell/',
    },
    {
      name: 'Jéssica Santana',
      role: 'Head de comercial',
      company: 'ACK cloud',
      photo: '/assets/images/speakers/jessica-santana.jpg',
      bio: 'Head de comercial na ACK cloud ,mais de 10 anos de experiência na área de vendas ,  trabalhando com cloud á 3 anos. Mãe de 4 meninas , ex aluna e instrutora de carreira na escola da nuvem e voluntária na fundação Julita.',
      linkedin: 'https://www.linkedin.com/in/jesssantana/',
    },
    {
      name: 'Giovana Saraiva',
      role: 'Engenheira Cloud e DevOps',
      company: 'NTT DATA Brasil',
      photo: '/assets/images/speakers/giovanasaraiva.jpg',
      bio: 'Giovana Saraiva, Engenheira Cloud e DevOps com formação em Engenharia Biomédica pela UFU, encontrou na tecnologia um novo direcionamento profissional.  Sua transição para a área de computação em nuvem combinou sua sólida base analítica com sua paixão por inovação e automação.  Ela atua no desenvolvimento de arquiteturas escaláveis, automação de infraestrutura e modernização de serviços, detendo as certificações AWS Cloud Practitioner, AWS Solutions Architect – Associate e AWS AI Practitioner.  Além disso, é defensora da maior participação feminina na tecnologia, especialmente nas áreas de Cloud Computing e DevOps.',
      linkedin: 'https://www.linkedin.com/in/giovanasaraivademelo',
    },
    {
      name: 'Michelle Bittar',
      role: 'Senior Service Leader',
      company: 'NTT DATA Brasil',
      photo: '/assets/images/speakers/michelle-bittar.jpg',
      bio: 'Atualmente atuo como Senior Service Leader na NTT DATA, sou especialista em liderança, gestão de serviços de TI e suporte ao cliente. Com ampla experiência em projetos tecnológicos, atuei desde analista até liderança de equipes, gerenciando operações, implantação e melhoria contínua para garantir eficiência e satisfação do cliente. Também sou líder ativa na diversidade, com foco em equidade de gênero. Minha missão é apoiar e impulsionar mulheres e homens nesta área, promovendo iniciativas que fortalecem a inclusão e o desenvolvimento profissional.',
      linkedin: 'https://www.linkedin.com/in/michellebittar/',
    },
    {
      name: 'Ronnan Lima',
      role: 'Azure Data Architect & Especialista de Dados',
      company: 'Co-Founder BRAINS',
      photo: '/assets/images/speakers/ronnan.png',
      bio: 'Azure Data Architect & Especialista de Dados | 8x Microsoft Azure | Microsoft Certified Trainer(MCT) | Co-Founder BRAINS.  Ativo nas redes sociais com mais de 60 mil seguidores, compartilhando conhecimentos sobre Dados, Tech e IA. Alcançando mais de 3 milhões de visualizações no LinkedIn no último ano, contribuindo significativamente para o aprendizado e crescimento de comunidades de tecnologia.',
      linkedin: 'https://www.linkedin.com/in/ronnanlima/',
      instagram: 'https://www.instagram.com/ronnanlimadataeng/',
    },
    {
      name: 'Wesley Rodrigues',
      role: 'Arquiteto de Soluções certificado pela AWS',
      company: 'Núvoli',
      photo: '/assets/images/speakers/wesley-rodrigues.jpg',
      bio: 'Arquiteto de Soluções certificado pela AWS, uno atributos de Tecnologia Cloud com ênfase em AWS à soluções reais. Utilizando de boas práticas de DevOps Framework e FinOps culture. Atualmente Accredited Instructor, atuando de forma a unir humanidade nos ambientes tecnológicos.',
      linkedin: 'https://www.linkedin.com/in/wesalrodrigues',
    }
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
          {speakers.length > 0 ? (
            speakers.map((speaker, index) => (
              <div className="col-12 col-md-4 col-lg-3 mb-4" key={index}>
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
            ))
          ) : (
            <div className="col-12 text-center">
              <p>Nenhum palestrante cadastrado no momento.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .speakers-section {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        .section-heading {
          font-size: 2rem;
          font-weight: bold;
        }

        .section-intro {
          max-width: 600px;
          margin: 0 auto;
          font-size: 1rem;
          color: #555;
        }

        @media (max-width: 575px) {
          .section-heading {
            font-size: 1.5rem;
          }

          .section-intro {
            font-size: 0.95rem;
            padding: 0 1rem;
          }

          /* 🔧 Garante que o card ocupe 100% da largura no mobile */
          .card {
            width: 100% !important;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .section-heading {
            font-size: 1.75rem;
          }
        }
          
        @media (max-width: 575px) {
          .row > .col-12 {
            margin-bottom: 1rem !important; /* Reduzido de 1.5rem para 1rem */
          }
        }
      `}</style>
    </section>
  )
}
