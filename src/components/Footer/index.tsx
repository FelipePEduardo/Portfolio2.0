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
            instagram
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer href={user.html_url} target="_blank">
            github
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
            linkedin
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
