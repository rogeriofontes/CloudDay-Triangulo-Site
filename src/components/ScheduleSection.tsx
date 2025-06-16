import Image from 'next/image';

export default function ScheduleSection() {
  return (
    <section id="schedule-section" className="schedule-section section">
      <div className="container">
        <h3 className="section-heading text-center mb-5">Programação</h3>

        <ul className="schedule-nav nav nav-pills nav-fill" id="myTab" role="tablist">
          <li className="nav-item me-2">
            <a className="nav-link active" id="tab-1" data-bs-toggle="tab" href="#tab-1-content" role="tab"
              aria-controls="tab-1-content" aria-selected="true">
              <span className="heading">Dia 1</span>
              <span className="meta">(Sábado 5 de Julho de 2025)</span>
            </a>
          </li>
        </ul>
        <div className="schedule-tab-content tab-content">
          <div className="tab-pane active" id="tab-1-content" role="tabpanel" aria-labelledby="tab-1">
            <div className="item item-talk">
              <div className="meta">
                <h4 className="time mb-3">8:00 - 9:00</h4>
              </div>
              <div className="content">
                <h3 className="title mb-3">Credenciamento</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S - UFU Santa Mônica</div>
                <div className="desc"><strong>O credenciamento</strong> estará disponível a partir das 8h da manhã na entrada do evento. Apresente seu ingresso digital ou impresso para retirada do crachá <br /></div>
              </div>
            </div>
            <div className="item item-talk">
              <div className="meta">
                <h4 className="time mb-3">9:00 - 9:50</h4>
                <div className="profile d-flex flex-column align-items-center">
                  <a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><Image
                    className="profile-image rounded-circle  mb-2"
                    src="/assets/images/speakers/rogeriofontes.jpg" alt="" width={100} height={100} style={{ height: "80px", width: "80px" }}  /></a>
                  <div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1">Rogério Fontes</a></div>
                </div>
              </div>
              <div className="content">
                <h3 className="title mb-3">Abertura</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S - UFU Santa Mônica</div>
                <div className="desc"><strong>O Futuro da Carreira em Cloud Computing: Tendências e Inovações.</strong>. <br /> Descubra como as principais tendências em Cloud Computing estão moldando o futuro da tecnologia e das carreiras. Nesta palestra, vamos explorar inovações emergentes e o valor estratégico de dominar múltiplas plataformas como AWS, Azure e Google Cloud e Outros. Prepare-se para ampliar suas oportunidades e tornar-se um profissional mais versátil e competitivo. </div>
              </div>
            </div>
            <div className="item item-other">
              <div className="meta">
                <h4 className="time mb-3">10:00 - 11:00</h4>
                <div className="profile d-flex flex-column align-items-center">
                  <a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><Image
                    className="profile-image rounded-circle  mb-2"
                    src="/assets/images/speakers/MarceloPaiva1080.png" alt="" width={100} height={100} style={{ height: "80px", width: "80px" }}  /></a>
                  <div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1">Marcelo Paiva</a></div>
                </div>
              </div>
              <div className="content">
                <h3 className="title mb-3">Keynote</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S - UFU Santa Mônica</div>
                <div className="desc">A keynote de abertura traz uma visão estratégica sobre o impacto da computação em nuvem no mundo dos negócios. Abordaremos os desafios e as oportunidades da era multi-cloud, destacando como empresas e profissionais podem se preparar para um cenário cada vez mais distribuído, híbrido e interoperável. <br /><br />
                </div>
              </div>
            </div>
            <div className="item item-talk">
              <div className="meta">
                <h4 className="time mb-3">11:00 - 12:00</h4>
                <div className="profile d-flex flex-column align-items-center">
                  <a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">{ /* <Image
                    className="profile-image rounded-circle  mb-2"
                    src="/assets/images/speakers/MarceloPaiva1080.png" alt="" width={100} height={100}  style={{ height: "80px", width: "80px" }}  /> */ }</a>
                  <div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1">A confirmar <br /> palestrante</a></div>
                </div>
              </div>
              <div className="content">
                <h3 className="title mb-3">Palestra 1</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S - UFU Santa Mônica</div>
                <div className="desc">Palestra ainda não confirmada. <br /><br /> </div>
              </div>
            </div>
            <div className="item item-other">
              <div className="meta">
                <h4 className="time mb-3">12:00 - 13:30</h4>
              </div>
              <div className="content">
                <h3 className="title mb-3">Almoço</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S - UFU Santa Mônica</div>
                <div className="desc">Contamos com alguns bons restaurantes na região. </div>
              </div>
            </div>
            <div className="item item-talk">
              <div className="meta">
                <h4 className="time mb-3">13:30 - 14:50</h4>
                <div className="profile d-flex flex-column align-items-center">
                  {/*<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><Image
                    className="profile-image rounded-circle mb-4"
                    src="/assets/images/speakers/palestrantes.png" alt="" width={100} height={100}  style={{ height: "80px", width: "80px" }}  /></a>*/}
                  <div className="name"><a className="theme-link" href="#speakers-section">Várias Palestrantes:</a><br />
                    <a className="theme-link" href="#speakers-section">Daniela Benício</a><br />
                    <a className="theme-link" href="#speakers-section">Miriene Dayrell</a><br />
                    <a className="theme-link" href="#speakers-section">Jéssica Santana</a><br />
                    <a className="theme-link" href="#speakers-section">Giovana Saraiva</a></div>
                </div>
              </div>
              <div className="content">
                <h3 className="title mb-3">Open Talk - Mulheres na cloud</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S - UFU Santa Mônica</div>
                <div className="desc">Um espaço aberto para dar voz às mulheres que estão transformando o setor de tecnologia e cloud computing. Vamos compartilhar trajetórias, desafios e conquistas, inspirando mais diversidade e inclusão no ecossistema de nuvem. Participe dessa conversa que fortalece e conecta!</div>
              </div>
            </div>
            <div className="item item-talk">
              <div className="meta">
                <h4 className="time mb-3">15:00 - 15:50</h4>
                <div className="profile d-flex flex-column align-items-center">
                  <a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"> {/* <Image
                    className="profile-image rounded-circle  mb-2"
                    src="/assets/images/speakers/speaker-6.jpg" alt="" width={100} height={100}  style={{ height: "80px", width: "80px" }}  /> */} </a>
                  <div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1">A confirmar <br /> palestrante</a></div>
                </div>
              </div>
              <div className="content">
                <h3 className="title mb-3">Palestra 2</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S - UFU Santa Mônica</div>
                <div className="desc">Palestra ainda não confirmada. <br /><br />  </div>
              </div>
            </div>
            <div className="item item-talk">
              <div className="meta">
                <h4 className="time mb-3">16:00 - 17:50</h4>
                <div className="profile d-flex flex-column align-items-center">
                  <a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><Image
                    className="profile-image rounded-circle  mb-2"
                    src="/assets/images/speakers/normandes.jpeg" alt="" width={100} height={100} style={{ height: "80px", width: "80px" }}  /> </a>
                  <div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1">Normandes Junior</a></div>
                </div>
              </div>
              <div className="content">
                <h3 className="title mb-3">Modelando um e-commerce com DynamoDB</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S - UFU Santa Mônica</div>
                <div className="desc">Se você receber uma tarefa de modelar usando DynamoDB as áreas de gerenciamento do cliente e pedidos, como iria lidar com os relacionamentos? Como modelar os pedidos de um cliente? Os itens de pedido? Essa palestra vai te ensinar como pensar estratégicamente nessa modelagem usando single table design. </div>
              </div>
            </div>
            <div className="item item-other">
              <div className="meta">
                <h4 className="time mb-3">18:00 - 24:00</h4>
              </div>
              <div className="content">
                <h3 className="title mb-3">After-party</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Bora bater um papo?</div>
                <div className="desc">Após um dia intenso de palestras e conexões, é hora de relaxar e expandir seu networking em um ambiente descontraído. Junte-se a nós na cervejaria local para uma after-party com boa música, cervejas artesanais e conversas inspiradoras. Uma oportunidade perfeita para trocar ideias, fazer contatos e celebrar a comunidade tech! </div>
              </div>
            </div>

          </div>
          <div className="tab-pane no-timeline" id="tab-2-content" role="tabpanel" aria-labelledby="tab-2">
            <h4 className="text-center py-5 text-muted">Day 2 Agenda Coming Soon...</h4>
          </div>
          <div className="tab-pane no-timeline" id="tab-3-content" role="tabpanel" aria-labelledby="tab-3">
            <h4 className="text-center py-5 text-muted">Day 3 Agenda Coming Soon...</h4>
          </div>
        </div>
        <div className="schedule-cta text-center mx-auto">{/* <a
          href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devconf-free-bootstrap-4-conference-template-for-tech-conferences-and-events/"
          className="btn btn-primary btn-lg me-md-2 d-block d-md-inline-block mb-3 mb-md-0" target="_blank">Baixar
          Programação</a> */}<a href="#tickets-section" className="btn btn-primary btn-lg d-block d-md-inline-block"
            target="_top">Faça inscrição</a></div>
      </div>
    </section>
  )
}  