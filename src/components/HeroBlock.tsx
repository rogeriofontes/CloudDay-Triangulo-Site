export default function HeroBlock() {
    return (
      <section id="hero-block" className="hero-block">
        <div id="hero-carousel" className="hero-carousel carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item-1 carousel-item active"></div>
            <div className="carousel-item-2 carousel-item"></div>
            <div className="carousel-item-3 carousel-item"></div>
          </div>
        </div>
        <div className="hero-block-mask"></div>
        <div className="container">
          <div className="hero-text-block text-center">
            <h1 className="hero-heading mb-2">
              CloudDay <br /> 
              <span style={{ fontSize: '0.6em' }}>Triângulo</span>
            </h1>
            <div className="hero-meta mb-3">
              <i className="far fa-calendar-alt me-2"></i>4 Outubro 
              <i className="fas fa-map-marker-alt mx-2"></i>Uberlândia, MG
            </div>
            <div className="hero-intro mb-4">
              O encontro das grandes tendências <br /> em cloud
            </div>
            <div className="hero-cta">
              <a className="btn btn-primary btn-lg" href="#" target="_blank">
                Faça sua inscrição
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  