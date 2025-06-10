import { faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} CloudDay Triângulo. Todos os direitos reservados.
        </p>
        <ul className="list-inline">
          <li className="list-inline-item mx-2">
            <a href="https://www.instagram.com/cloudday.triangulo.mineiro/" target="_blank" className="text-white">
              <FontAwesomeIcon icon={faInstagram} className="me-2" />
              {/*<i className="fab fa-instagram fa-lg"></i>*/}
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="https://www.linkedin.com/in/cloudday-triangulo" target="_blank" className="text-white">
              <FontAwesomeIcon icon={faLinkedin} className="me-2" />
              {/*<i className="fab fa-linkedin fa-lg"></i>*/}
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="https://x.com/DayCloudTri" target="_blank" className="text-white">
              <FontAwesomeIcon icon={faXTwitter} className="me-2" />
              {/*<i className="fab fa-x-twitter fa-lg"></i>*/}
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="https://www.youtube.com/@CloudDayTriangulo" target="_blank" className="text-white">
              <FontAwesomeIcon icon={faYoutube} className="me-2" />
              {/*<i className="fab fa-youtube fa-lg"></i>*/}
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="mailto:contato@cloudday.com.br" className="text-white">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              {/*<i className="fas fa-envelope fa-lg"></i>*/}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
