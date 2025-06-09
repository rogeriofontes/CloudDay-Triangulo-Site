import { useState } from 'react'
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

type ModalSpeakerProps = {
  name: string
  role: string
  company: string
  photo: string
  bio: string
  twitter?: string
  linkedin?: string
  github?: string
  instagram?: string
}

export default function ModalSpeaker({
  name,
  role,
  company,
  photo,
  bio,
  twitter,
  linkedin,
  github,
  instagram,
}: ModalSpeakerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="col-6 col-lg-12 mb-4">
      <div className="card rounded-0 shadow">
        <button
          onClick={() => setIsOpen(true)}
          className="border-0 bg-transparent p-0"
          style={{ cursor: 'pointer' }}
        >
          <Image src={photo} className="card-img-top rounded-0" alt={name} width={100} height={100} />
        </button>
        <div className="card-body">
          <h5 className="card-title mb-2">{name}</h5>
          <div className="card-text mb-3">
            <div className="meta">{role}</div>
            <div className="meta">{company}</div>
          </div>
          <button onClick={() => setIsOpen(true)} className="custom-link-button">
            Ver bio &rarr;
          </button>
        </div>
        <div className="card-footer text-muted">
          <ul className="social-list list-inline mb-0">
            {twitter && (
              <li className="list-inline-item">
                <a href={twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} size="lg" className="text-primary" />
                </a>
              </li>
            )}
            {linkedin && (
              <li className="list-inline-item">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-primary" />
                </a>
              </li>
            )}
            {github && (
              <li className="list-inline-item">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg" className="text-primary" />
                </a>
              </li>
            )}
            {instagram && (
              <li className="list-inline-item">
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="lg" className="text-primary" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Modal personalizado */}
      {isOpen && (
        <div
          className="custom-modal-backdrop"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="custom-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="custom-modal-header">
              <h5>{name}</h5>
              <button onClick={() => setIsOpen(false)} className="custom-link-button">
                &times;
              </button>
            </div>
            <div className="custom-modal-body">
              <p>{bio}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1050;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .custom-modal-content {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
        }

        .custom-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .custom-modal-body {
          font-size: 1rem;
        }

        .close-button {
          background: transparent;
          border: none;
          font-size: 1.5rem;
          line-height: 1;
          cursor: pointer;
        }
        
      .custom-link-button {
        color: #2563eb; /* azul elegante (Tailwind: blue-600) */
        background: transparent;
        border: none;
        padding: 0;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        transition: color 0.3s ease;
      }

      .custom-link-button::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: #2563eb;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
      }

      .custom-link-button:hover {
        color: #1d4ed8; /* azul mais escuro */
      }

      .custom-link-button:hover::after {
        transform: scaleX(1);
      }
      `}</style>
    </div>
  )
}
