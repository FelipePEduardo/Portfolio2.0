import { LinkContainer, ListContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <ListContainer>
      <ul>
        <li>
          <LinkContainer href="https://www.instagram.com/feh_eduardoo/">
            instagram
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer href="https://github.com/FelipePEduardo/">
            github
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer href="https://www.linkedin.com/in/felipepereiraeduardo/">
            linkedin
            <span>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer href="https://app.rocketseat.com.br/me/felipe-pereira-eduardo-00732">
            rocketseat
            <span>
              <FontAwesomeIcon icon={faRocket} />
            </span>
          </LinkContainer>
        </li>
      </ul>
    </ListContainer>
  )
}
