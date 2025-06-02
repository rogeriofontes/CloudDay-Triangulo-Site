export default function AgendaSection() {
    return (
      <section id="agenda-section" className="agenda-section py-5 bg-light">
        <div className="container">
          <h2 className="section-heading text-center mb-4">Agenda</h2>
          <div className="row">
  
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">09:00 - Abertura</h5>
                  <p className="card-text">Recepção dos participantes e abertura oficial do evento.</p>
                </div>
              </div>
            </div>
  
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">10:00 - Tendências em Cloud</h5>
                  <p className="card-text">Painel com especialistas sobre o futuro do cloud computing.</p>
                </div>
              </div>
            </div>
  
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">14:00 - DevOps e Segurança</h5>
                  <p className="card-text">Como implementar DevOps seguro em ambientes multicloud.</p>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    )
  }  