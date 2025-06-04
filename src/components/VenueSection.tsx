export default function VenueSection() {
  return (
    <section id="venue-section" className="venue-section section  theme-bg-primary text-white">
      <div className="container">
        <h3 className="section-heading text-center mb-5 text-white">Local</h3>
        <div className="row gx-5 py-lg-5">
          <div className="col-12 col-lg-7 h-100">
            <div className="desc">
              <h4 className="text-white mb-3">Como na universidade Federal de Uberlândia - UFU</h4>
              <p>Aqui estão alguns lugares de Uberlândia/MG</p>

              <div className="row pt-3">
                <div className="col-12 col-md-6 mb-4">
                  <div className="grid-item p-4">
                    <h5 className="text-white mb-3 title"><i className="fas fa-plane-departure me-2"></i>Por
                      Avião</h5>
                    <p>O Aeroporto de Uberlândia fica a cerca de 8 km da UFU – Campus Santa Mônica. O
                      trajeto leva de 15 a 20 minutos de carro ou por aplicativo, via Av. Rondon
                      Pacheco. A entrada principal da UFU fica na Av. João Naves de Ávila, 2121 Bloco
                      - X.</p>
                    <a className="text-white" href="https://maps.app.goo.gl/fgiXy7WJKKGaHCRw5"
                      target="_blank">Rota &rarr;</a>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <div className="grid-item p-4">
                    <h5 className="text-white mb-4 title"><i className="fas fa-car me-2"></i>Por carro</h5>
                    <p>O jeito mais fácil de chegar à UFU é acessar a Avenida Rondon Pacheco e subir
                      pela Avenida João Naves de Ávila até a entrada principal do campus Santa Mônica.
                    </p>
                    <a className="text-white" href="https://maps.app.goo.gl/fgiXy7WJKKGaHCRw5">Rota &rarr;</a>
                  </div>
                </div>
                <div className="col-12 col-md-12 mb-4">
                  <div className="grid-item p-4">
                    <h5 className="text-white mb-3 title"><i className="fas fa-bus-alt me-2"></i>Por Ônibus</h5>
                    <p>Para chegar à UFU – Campus Santa Mônica de ônibus, use as linhas A105, A116,
                      A115, T131, T610 ou I232. Todas passam pela Av. João Naves de Ávila, próxima à
                      entrada principal. As paradas mais próximas são “UFU” e “UFU Leste”. </p>
                    <a className="text-white" href="https://maps.app.goo.gl/fgiXy7WJKKGaHCRw5">Rota &rarr;</a>
                  </div>
                </div>
              </div>
              <h4 className="text-white mb-4 mt-3 mt-lg-5">🏨 Hotéis e acomodações próximos à UFU – Campus Santa
                Mônica</h4>
              <p>
                <ul>
                  <li>
                    <strong>Sanare Hotel</strong>
                    <span className="mt-1">
                      Localizado na Av. João Naves de Ávila, 2350, bem em frente ao campus Santa Mônica.
                      Oferece fácil acesso à universidade e ao Center Shopping.
                    </span>
                  </li>
                  <br />
                  <li>
                    <strong>Savana Hotel</strong>
                    <span className="mt-1">
                      Situado no bairro Santa Mônica, próximo à UFU, é uma opção econômica e confortável para
                      os visitantes.
                    </span>
                  </li>
                  <br />
                  <li>
                    <strong>Apt no Santa Mônica próximo ao Pátio Sabiá, UFU</strong>
                    <span className="mt-1">
                      Apartamento completo com 2 quartos, cozinha equipada e varanda, localizado a poucos
                      minutos da UFU. Ideal para estadias mais longas ou em grupo.
                    </span>
                  </li>
                  <br />
                  <li>
                    <strong>Prédio San Paolo</strong>
                    <span className="mt-1">
                      Apartamento mobiliado próximo à UFU, Center Shopping e supermercados, oferecendo
                      comodidade e praticidade.
                    </span>
                  </li>
                  <br />
                  <li>
                    <strong>Hostel Santa Mônica</strong>
                    <span className="mt-1">
                      Opção econômica com quartos individuais e compartilhados, localizado a cerca de 3 km do
                      Estádio João Havelange e com fácil acesso à UFU.
                    </span>
                  </li>
                </ul>

              </p>
              <a className="btn btn-ghost"
                href="https://www.booking.com/city/br/uberlandia.pt.html?aid=1702940;label=uberlandia-uy4sd5qfLBGCqL7xYPgSjwS479842231197:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-343845015107:lp9197884:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcpDr58xwogAwmVmCRFhsnQ;ws=&gad_source=1&gbraid=0AAAAAD_Ls1JGfCbBQt2M3PBGnF2sPVP5J&gclid=Cj0KCQjwtpLABhC7ARIsALBOCVpAd8JK0AaxeNSmDQgpPIl8SJTCauSyaXSqTGQBiaDBqZPX8oRGdT0aAgyWEALw_wcB"
                target="_blank">Buscar mais hóteis</a>
              <br /> <br />
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="Universidade Federal de Uberlândia"
                  src="https://maps.google.com/maps?q=-18.917929995232225,-48.25828359201796&z=15&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-3 col-lg-4 offset-lg-1 position-relative h-100 mt-5 mt-lg-0">
            <div className="figures-holder">
              <div className="figure figure-1"><img className="shadow" src="/assets/images/venue/foto1.jpg" alt="" />
              </div>
              <div className="figure figure-2"><img className="shadow" src="/assets/images/venue/foto2.jpg" alt="" />
              </div>
              <div className="figure figure-3"><img className="shadow" src="/assets/images/venue/foto3.jpg" alt="" />
              </div>
              <div className="figure figure-4"><img className="shadow" src="/assets/images/venue/foto4.jpg" alt="" />
              </div>
              <div className="figure figure-5"><img className="shadow" src="/assets/images/venue/foto5.jpg" alt="" />
              </div>
              <div className="figure figure-6"><img className="shadow" src="/assets/images/venue/foto6.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
