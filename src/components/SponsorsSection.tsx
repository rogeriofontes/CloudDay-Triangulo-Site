import Image from 'next/image';

export default function SponsorsSection() {
  return (
    <section id="sponsors-section" className="sponsors-section section">
      <div className="container">
        <h3 className="section-heading text-center mb-3">Patrocinadores</h3>
        <div className="section-intro text-center single-col-max mx-auto mb-5">Quer se tornar um patrocinador? Entre em
          contato.</div>
        {/* <div className="row logos justify-content-center">
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
    </div> */}
        <div className="sponsors-cta text-center pt-5"><a className="btn-primary btn btn-lg" href="https://forms.gle/fW9KqoZ2Lm76uARZA">Seja um
          patrocinador/Apoiador</a></div>
      </div>
      <br />
      <div className="container">
        <h3 className="section-heading text-center mb-3">Parceiros</h3>
        <div className="row logos justify-content-center gap-4">
          <div className="row logos justify-content-center gap-4">
            <div className="logo-item col-6 col-md-4 col-lg-2">
              <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-sm flex flex-col items-center justify-center h-[200px]">
                <Image src="/assets/images/logos/parceiros/awsug-triangulo.png" alt="AWS UG Triângulo Mineiro" width={120} height={80} style={{ objectFit: 'contain' }} />
                <span className="text-center text-sm mt-2">
                  <a href="https://www.meetup.com/aws-user-group-triangulo-mineiro" target="_blank">AWS UG Triângulo Mineiro</a>
                </span>
              </div>
            </div>
            <div className="logo-item col-6 col-md-4 col-lg-2">
              <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-sm flex flex-col items-center justify-center h-[200px]">
                <Image src="/assets/images/logos/parceiros/uaijug.png" alt="UaiJUG" width={120} height={80} style={{ objectFit: 'contain' }} />
                <span className="text-center text-sm mt-2">
                  <a href="https://www.meetup.com/uaijug-meetup" target="_blank">UaiJUG</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
