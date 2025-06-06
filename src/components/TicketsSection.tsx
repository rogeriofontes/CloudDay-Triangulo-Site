import { faGraduationCap, faPeopleCarry, faTshirt, faUsers, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <li className="d-flex mb-3">
              <span className="me-3 mt-1">
                <FontAwesomeIcon icon={faUserTie} size="lg" className="text-primary" />
              </span>
              <div>
                <b>Atualização Profissional</b>
                <p className="mb-0">• Fique por dentro das principais tendências em cloud computing, DevOps, automação, segurança e IA.</p>
              </div>
            </li>
            <li className="d-flex mb-3">
              <span className="me-3 mt-1">
                 <FontAwesomeIcon icon={faPeopleCarry} size="lg" className="text-primary" />
              </span>
              <div>
                <b>Networking Estratégico</b>
                <p className="mb-0">• Conecte-se com profissionais da área, especialistas, empresas, recrutadores e comunidades tech da região.</p>
              </div>
            </li>
            <li className="d-flex mb-3">
              <span className="me-3 mt-1">
                <FontAwesomeIcon icon={faUsers} size="lg" className="text-primary" />
              </span>
              <div>
                <b>Visibilidade na Comunidade</b>
                <p className="mb-0">• Mostre seus projetos, compartilhe conhecimento ou conheça oportunidades de carreira e parcerias.</p>
              </div>
            </li>
            <li className="d-flex mb-3">
              <span className="me-3 mt-1">
                <FontAwesomeIcon icon={faGraduationCap} size="lg" className="text-primary" />
              </span>
              <div>
                <b>Aprendizado Prático</b>
                <p className="mb-0">• Tenha acesso a trilhas técnicas, demonstrações ao vivo e estudos de caso aplicáveis ao dia a dia.</p>
              </div>
            </li>
            <li className="d-flex">
              <span className="me-3 mt-1">
                <FontAwesomeIcon icon={faTshirt} size="lg" className="text-primary" />
              </span>
              <div>
                <b>Kit Congressista</b> <a href="#" target="_blank">para desenvolvedores parceiros</a>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}
