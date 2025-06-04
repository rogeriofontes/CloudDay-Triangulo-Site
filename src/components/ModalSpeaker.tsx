import Image from 'next/image';

type ModalSpeakerProps = {
  name: string
  role: string
  company: string
  photo: string
  bio: string
  twitter?: string
  linkedin?: string
  github?: string
}

export default function ModalSpeaker({
  name,
  role,
  company,
  photo,
  bio,
  twitter,
  linkedin,
  github
}: ModalSpeakerProps) {
  return (
    <div className="col-6 col-lg-12 mb-4">
      <div className="card rounded-0">
        <a href={`#modal-${name}`} data-bs-toggle="modal" data-bs-target={`#modal-${name}`}>
          <Image src={photo} className="card-img-top rounded-0" alt={name} width={100} height={100}/>
        </a>
        <div className="card-body">
          <h5 className="card-title mb-2">{name}</h5>
          <div className="card-text mb-3">
            <div className="meta">{role}</div>
            <div className="meta">{company}</div>
          </div>
          <a href={`#modal-${name}`} data-bs-toggle="modal" data-bs-target={`#modal-${name}`}>
            Read more &rarr;
          </a>
        </div>
        <div className="card-footer text-muted">
          <ul className="social-list list-inline mb-0">
            {twitter && (
              <li className="list-inline-item">
                <a href={twitter}><i className="fa-brands fa-x-twitter fa-fw"></i></a>
              </li>
            )}
            {linkedin && (
              <li className="list-inline-item">
                <a href={linkedin}><i className="fa-brands fa-linkedin-in fa-fw"></i></a>
              </li>
            )}
            {github && (
              <li className="list-inline-item">
                <a href={github}><i className="fa-brands fa-github fa-fw"></i></a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Modal simples */}
      <div className="modal fade" id={`modal-${name}`} tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{name}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
