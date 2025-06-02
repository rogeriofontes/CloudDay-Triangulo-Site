export default function TicketsSection() {
  return (
    <section id="tickets-section" className="tickets-section section theme-bg-light">
      <div className="container">
        <h3 className="section-heading text-center mb-3">Inscrições</h3>

        <div className="row pricing mb-5">
          <div className="col-12 col-md-4 p-2 p-lg-4">
            <div className="card rounded-0 border-0">
              <div className="card-body p-0">
                <div className="heading  text-center p-3">
                  <h4 className="text-white mb-0">Super Early Bird</h4>
                </div>
                <div className="info p-3">
                  <div className="price-figure text-center mb-3"><span className="currency">R$</span><span
                    className="number"> 40,00</span></div>
                  <div className="desc px-3">
                    Compre antes de 15º de Junho. Apenas 50 ingressos disponíveis..
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <a href="#" className="btn btn-primary disabled">Esgotado</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 p-2 p-lg-4">
            <div className="card card-special rounded-0 border-0">
              <div className="card-body p-0">
                <div className="heading  text-center p-3">
                  <h4 className="text-white mb-0">Early Bird</h4>
                </div>
                <div className="info p-3">
                  <div className="price-figure text-center"><span className="currency">R$</span><span
                    className="number"> 60,00</span></div>
                  <div className="desc px-3">
                    Compre antes de 30º de junho de 2025. Apenas 100 ingressos disponíveis.
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <a href="#" className="btn btn-primary">Comprar agora</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 p-2 p-lg-4">
            <div className="card rounded-0 border-0">
              <div className="card-body p-0">
                <div className="heading  text-center p-3">
                  <h4 className="text-white mb-0">Regular</h4>
                </div>
                <div className="info p-3">
                  <div className="price-figure text-center mb-3"><span className="currency">R$</span><span
                    className="number"> 80,00</span></div>
                  <div className="desc px-3">
                    Brindes e benefícios adicionais incluídos.
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <a href="#" className="btn btn-primary">Comprar agora</a>
              </div>
            </div>
          </div>
        </div>

        <div className="offers text-center bg-white p-4 p-lg-5">
          <h4 className="mb-3">Benefícios de Participar do CloudDay Triângulo</h4>
          <ul className="offers-list list-unstyled d-inline-block mx-auto text-start">
            <li><span className="icon-holder me-2"><i className="fas fa-user-tie"></i></span><b>Atualização
              Profissional</b>
              <p style={{ paddingLeft: '3em' }}>• Fique por dentro das principais tendências em cloud computing,
                DevOps, automação, segurança e IA.</p>
            </li>
            <li><span className="icon-holder me-2"><i className="fas fa-people-carry"></i></span><b>Networking
              Estratégico</b>
              <p style={{ paddingLeft: '3em' }}>• Conecte-se com profissionais da área, especialistas, empresas,
                recrutadores e comunidades tech da região.</p>
            </li>
            <li><span className="icon-holder me-2"><i className="fas fa-users"></i></span><b>Visibilidade na
              Comunidade</b>
              <p style={{ paddingLeft: '3em' }}>• Mostre seus projetos, compartilhe conhecimento ou conheça
                oportunidades de carreira e parcerias.</p>
            </li>
            <li>
              <span className="icon-holder me-2"><i className="fas fa-graduation-cap"></i></span><b>Aprendizado
                Prático</b>
              <p style={{ paddingLeft: '3em' }}>• Tenha acesso a trilhas técnicas, demonstrações ao vivo e estudos
                de caso aplicáveis ao dia a dia.</p>
            </li>
            <li><span className="icon-holder me-2"><i className="fas fa-tshirt"></i></span><b>Kit Congressista</b> <a
              href="#" target="_blank">para desenvolvedores parceiros</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
