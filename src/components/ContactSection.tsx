'use client'

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section section">
      <div className="container text-center">
        <h2 className="section-title">Fale Conosco</h2>
        <p className="section-intro">
          Tem alguma dúvida sobre o CloudDay Triângulo? Entre em contato!
        </p>
        <div className="contact-details">
          <p><i className="fas fa-envelope me-2"></i> contato@clouddaytriangulo.com.br</p>
          <p><i className="fas fa-phone me-2"></i> (34) 99999-8888</p>
        </div>
      </div>
    </section>
  )
}
