import Image from 'next/image';

export default function SponsorsSection() {
  return (
    <section id="sponsors-section" className="sponsors-section section">
      <div className="container">
        <h3 className="section-heading text-center mb-3">Patrocinadores &amp; Parceiros</h3>
        <div className="section-intro text-center single-col-max mx-auto mb-5">Quer se tornar um patrocinador? Entre em
          contato.</div>
        <div className="row logos justify-content-center">
          <div className="logo-item col-6 col-md-4 col-lg-2"><Image src="/assets/images/logos/logo-1.svg" alt="" width={300} height={100} /></div>
          <div className="logo-item col-6 col-md-4 col-lg-2"><Image src="/assets/images/logos/logo-2.svg" alt="" width={300} height={100}  /></div>
          <div className="logo-item col-6 col-md-4 col-lg-2"><Image src="/assets/images/logos/logo-3.svg" alt="" width={300} height={100} /></div>
          <div className="logo-item col-6 col-md-4 col-lg-2"><Image src="/assets/images/logos/logo-4.svg" alt="" width={300} height={100}  /></div>
          <div className="logo-item col-6 col-md-4 col-lg-2"><Image src="/assets/images/logos/logo-5.svg" alt="" width={300} height={100}  /></div>
          <div className="logo-item col-6 col-md-4 col-lg-2"><Image src="/assets/images/logos/logo-6.svg" alt="" width={300} height={100}  /></div>
          <div className="logo-item col-6 col-md-4 col-lg-2"><Image src="/assets/images/logos/logo-7.svg" alt="" width={300} height={100}  /></div>
          <div className="logo-item col-6 col-md-4 col-lg-2"><Image src="/assets/images/logos/logo-8.svg" alt="" width={300} height={100}  /></div>
          <div className="logo-item col-6 col-md-4 col-lg-2"><Image src="/assets/images/logos/logo-9.svg" alt="" width={300} height={100}  /></div>
          <div className="logo-item col-6 col-md-4 col-lg-2"><Image src="/assets/images/logos/logo-10.svg" alt="" width={300} height={100}  /></div>
          <div className="logo-item col-6 col-md-4 col-lg-2"><Image src="/assets/images/logos/logo-11.svg" alt="" width={300} height={100}  /></div>
          <div className="logo-item col-6 col-md-4 col-lg-2"><Image src="/assets/images/logos/logo-12.svg" alt="" width={300} height={100}  /></div>
        </div>
        <div className="sponsors-cta text-center pt-5"><a className="btn-primary btn btn-lg" href="#">Seja um
          patrocinador</a></div>
      </div>
    </section>
  )
}
