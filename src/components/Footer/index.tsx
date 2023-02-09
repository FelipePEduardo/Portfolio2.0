import { LinkContainer, ListContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

import { useContext } from 'react'
import { ProfileContext } from '../../contexts/ProfileContext'

export function Footer() {
  const { user } = useContext(ProfileContext)

  return (
    <ListContainer>
      <ul>
        <li>
          <LinkContainer
            href="https://www.instagram.com/feh_eduardoo/"
            target="_blank"
          >
            <span>instagram</span>
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer href={user.html_url} target="_blank">
            <span>github</span>
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer
            href="https://www.linkedin.com/in/felipepereiraeduardo/"
            target="_blank"
          >
            <span>linkedin</span>
            <span>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer
            href="https://app.rocketseat.com.br/me/felipe-pereira-eduardo-00732"
            target="_blank"
          >
            <span>rocketseat</span>
            <span>
              <FontAwesomeIcon icon={faRocket} />
            </span>
          </LinkContainer>
        </li>
      </ul>
    </ListContainer>
  )
}
