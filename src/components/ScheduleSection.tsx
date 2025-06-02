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
                <div className="profile d-flex flex-column align-items-center">
                  <a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img
                    className="profile-image rounded-circle  mb-2"
                    src="/assets/images/speakers/speaker-1.jpg" alt="" /></a>
                  <div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1">James Doe</a></div>
                </div>
              </div>
              <div className="content">
                <h3 className="title mb-3">Credenciamento</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S</div>
                <div className="desc">Talk's summary goes here. <strong>You can hook up the speaker profile
                  image/name on the left with his or her bio modal window</strong>. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo.
                  Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur
                  ullamcorper. </div>
              </div>
            </div>
            <div className="item item-talk">
              <div className="meta">
                <h4 className="time mb-3">9:00 - 9:15</h4>
                <div className="profile d-flex flex-column align-items-center">
                  <a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img
                    className="profile-image rounded-circle  mb-2"
                    src="/assets/images/speakers/speaker-2.jpg" alt="" /></a>
                  <div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1">Rogério Fontes</a></div>
                </div>
              </div>
              <div className="content">
                <h3 className="title mb-3">Abertura</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S</div>
                <div className="desc"><strong>O Futuro da Carreira em Cloud Computing: Tendências e Inovações.</strong>. <br /> Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo.
                  Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur
                  ullamcorper. </div>
              </div>
            </div>
            <div className="item item-other">
              <div className="meta">
                <h4 className="time mb-3">10:00 - 11:00</h4>
              </div>
              <div className="content">
                <h3 className="title mb-3">Keynote</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S</div>
                <div className="desc">Coffee and cakes lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
            <div className="item item-talk">
              <div className="meta">
                <h4 className="time mb-3">11:00 - 12:00</h4>
                <div className="profile d-flex flex-column align-items-center">
                  <a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img
                    className="profile-image rounded-circle  mb-2"
                    src="/assets/images/speakers/speaker-3.jpg" alt="" /></a>
                  <div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1">Tim Doe</a></div>
                </div>
              </div>
              <div className="content">
                <h3 className="title mb-3">Palestra 1</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S</div>
                <div className="desc">Talk's summary goes here. <strong>You can hook up the speaker profile
                  image/name on the left with his or her bio modal window</strong>. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo.
                  Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur
                  ullamcorper. </div>
              </div>
            </div>
            <div className="item item-other">
              <div className="meta">
                <h4 className="time mb-3">12:00 - 13:30</h4>
              </div>
              <div className="content">
                <h3 className="title mb-3">Almoço</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S</div>
                <div className="desc">Buffet lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
              </div>
            </div>
            <div className="item item-talk">
              <div className="meta">
                <h4 className="time mb-3">13:30 - 14:50</h4>
                <div className="profile d-flex flex-column align-items-center">
                  <a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img
                    className="profile-image rounded-circle  mb-2"
                    src="/assets/images/speakers/speaker-5.jpg" alt="" /></a>
                  <div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1">Ling Doe</a></div>
                </div>
              </div>
              <div className="content">
                <h3 className="title mb-3">Open Talk - Mulheres na cloud</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S</div>
                <div className="desc">Talk's summary goes here. <strong>You can hook up the speaker profile
                  image/name on the left with his or her bio modal window</strong>. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo.
                  Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur
                  ullamcorper. </div>
              </div>
            </div>
            <div className="item item-talk">
              <div className="meta">
                <h4 className="time mb-3">15:00 - 15:50</h4>
                <div className="profile d-flex flex-column align-items-center">
                  <a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img
                    className="profile-image rounded-circle  mb-2"
                    src="/assets/images/speakers/speaker-6.jpg" alt="" /></a>
                  <div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1">Andy Doe</a></div>
                </div>
              </div>
              <div className="content">
                <h3 className="title mb-3">Palestra 2</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S</div>
                <div className="desc">Talk's summary goes here. <strong>You can hook up the speaker profile
                  image/name on the left with his or her bio modal window</strong>. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo.
                  Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur
                  ullamcorper. </div>
              </div>
            </div>
            <div className="item item-talk">
              <div className="meta">
                <h4 className="time mb-3">16:00 - 17:50</h4>
                <div className="profile d-flex flex-column align-items-center">
                  <a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1"><img
                    className="profile-image rounded-circle  mb-2"
                    src="/assets/images/speakers/speaker-7.jpg" alt="" /></a>
                  <div className="name"><a className="theme-link" href="#modal-speaker-1" data-bs-toggle="modal"
                    data-bs-target="#modal-speaker-1">Alice Doe</a></div>
                </div>
              </div>
              <div className="content">
                <h3 className="title mb-3">Palestra 3</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Auditório 5S</div>
                <div className="desc">Talk's summary goes here. <strong>You can hook up the speaker profile
                  image/name on the left with his or her bio modal window</strong>. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Fusce quis ornare nibh, pulvinar posuere justo.
                  Aenean laoreet nunc a eleifend lacinia. Phasellus dignissim augue at consectetur
                  ullamcorper. </div>
              </div>
            </div>
            <div className="item item-other">
              <div className="meta">
                <h4 className="time mb-3">18:00 - 24:00</h4>
              </div>
              <div className="content">
                <h3 className="title mb-3">After-party</h3>
                <div className="location mb-3"><i className="fas fa-map-marker-alt me-2"></i>Bar Lorem Ipsum</div>
                <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ornare
                  nibh, pulvinar posuere justo. Aenean laoreet nunc a eleifend lacinia. Phasellus
                  dignissim augue at consectetur ullamcorper. </div>
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
        <div className="schedule-cta text-center mx-auto"><a
          href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devconf-free-bootstrap-4-conference-template-for-tech-conferences-and-events/"
          className="btn btn-primary btn-lg me-md-2 d-block d-md-inline-block mb-3 mb-md-0" target="_blank">Baixar
          Programação</a><a href="#" className="btn btn-secondary btn-lg d-block d-md-inline-block"
            target="_blank">Faça inscrição</a></div>
      </div>
    </section>
  )
}  