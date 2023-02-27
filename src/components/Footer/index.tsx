import { LinkContainer, ListContainer } from './styles'
import {
  LinkedInLogoIcon,
  RocketIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
} from '@radix-ui/react-icons'

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
              <InstagramLogoIcon />
            </span>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer href={user.html_url} target="_blank">
            <span>github</span>
            <span>
              <GitHubLogoIcon />
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
              <LinkedInLogoIcon />
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
              <RocketIcon />
            </span>
          </LinkContainer>
        </li>
      </ul>
    </ListContainer>
  )
}
